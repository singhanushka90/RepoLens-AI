from langchain_core.output_parsers import StrOutputParser

from llms.groq import get_llm
from prompts.review_prompt import review_prompt
from services.retrieval_service import retrieve_documents


llm = get_llm()

output_parser = StrOutputParser()


def review_project(question, user_email=None):

    # Retrieve Documents
    documents = retrieve_documents(question, user_email) or []

    # Context with file information
    if documents:
        context_parts = []
        for doc in documents:
            file_info = f"[File: {doc.metadata.get('file_name', 'Unknown')} ]\n{doc.page_content}"
            context_parts.append(file_info)
        context = "\n\n".join(context_parts)
    else:
        context = (
            "No project documents were found for this user. "
            "Answer the question based on available information and note that document context is unavailable."
        )

    # Chain
    chain = review_prompt | llm | output_parser

    # Invoke
    # Debug: log context size and a preview to ensure documents are passed
    try:
        docs_len = len(documents)
    except Exception:
        docs_len = 0

    print(f"[reviewer_chain] user={user_email} docs_len={docs_len}")
    if docs_len:
        try:
            print(f"[reviewer_chain] first_file={documents[0].metadata.get('file_name')}")
        except Exception:
            pass

    response = chain.invoke(
        {
            "context": context,
            "question": question
        }
    )

    return response