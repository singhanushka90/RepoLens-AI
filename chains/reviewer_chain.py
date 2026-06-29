from langchain_core.output_parsers import StrOutputParser

from llms.groq import get_llm
from prompts.review_prompt import review_prompt
from services.retrieval_service import retrieve_documents


llm = get_llm()

output_parser = StrOutputParser()


def review_project(question):

    # Retrieve Documents
    documents = retrieve_documents(question)

    # Context
    context = "\n\n".join(
        [doc.page_content for doc in documents]
    )

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