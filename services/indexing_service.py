from retrievers.parent_retriever import get_parent_retriever


def index_documents(documents, user_email=None):
    """Index documents with user-specific retriever"""
    
    # Get user-specific retriever
    retriever = get_parent_retriever(user_email)
    
    print("Total_docs :",len(documents))
    print(type(documents))
    print(type(documents[0]))
    print("Before add documents")

    # Add user email to metadata for each document
    if user_email:
        for doc in documents:
            if doc.metadata is None:
                doc.metadata = {}
            doc.metadata["user_email"] = user_email

    retriever.add_documents(documents)
    print(("After add documents"))

    return retriever