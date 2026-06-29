from retrievers.parent_retriever import get_parent_retriever


retriever = get_parent_retriever()


def retrieve_documents(query):

    documents = retriever.invoke(query)

    return documents