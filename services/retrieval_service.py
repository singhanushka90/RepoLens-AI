from retrievers.parent_retriever import get_parent_retriever


def retrieve_documents(query, user_email=None):
    """Retrieve documents with user-specific retriever"""
    
    # Get user-specific retriever
    retriever = get_parent_retriever(user_email)
    
    documents = retriever.invoke(query)

    return documents