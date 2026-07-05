from langchain_core.stores import InMemoryStore
from langchain_classic.retrievers import ParentDocumentRetriever

from vectorstores.chroma_store import create_vectorstore

from splitters.parent_split import (
    parent_splitter,
    child_splitter
)


# Dictionary to store retrievers for each user
retrievers_cache = {}


def get_parent_retriever(user_email=None):
    """Get or create user-specific retriever"""
    
    # Default retriever for backward compatibility
    if user_email is None:
        user_email = "default"
    
    # Return cached retriever if exists
    if user_email in retrievers_cache:
        return retrievers_cache[user_email]
    
    # Create new user-specific vectorstore
    vectorstore = create_vectorstore(user_email)
    
    # Create DocStore
    docstore = InMemoryStore()
    
    # Create Parent Retriever
    retriever = ParentDocumentRetriever(
        vectorstore=vectorstore,
        docstore=docstore,
        child_splitter=child_splitter,
        parent_splitter=parent_splitter
    )
    
    # Cache it
    retrievers_cache[user_email] = retriever
    
    return retriever