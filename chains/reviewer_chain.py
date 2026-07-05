from langchain_core.output_parsers import StrOutputParser

from llms.groq import get_llm
from prompts.review_prompt import review_prompt
from services.retrieval_service import retrieve_documents


llm = get_llm()

output_parser = StrOutputParser()


def review_project(question, user_email=None):

    # Retrieve Documents
    documents = retrieve_documents(question, user_email)

    # Context with file information
    context_parts = []
    for doc in documents:
        file_info = f"[File: {doc.metadata.get('file_name', 'Unknown')}]\n{doc.page_content}"
        context_parts.append(file_info)
    
    context = "\n\n".join(context_parts)

    # Chain
    chain = review_prompt | llm | output_parser

    # Invoke
    response = chain.invoke(
        {
            "context": context,
            "question": question
        }
    )

    return response