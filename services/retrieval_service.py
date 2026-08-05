from retrievers.parent_retriever import get_parent_retriever


def retrieve_documents(query, user_email=None):
    """Retrieve documents with user-specific retriever"""
    
    # Get user-specific retriever
    retriever = get_parent_retriever(user_email)
    
    documents = retriever.invoke(query)

    # Debug: log retrieval counts to help diagnose missing-context issues
    try:
        doc_count = len(documents) if documents is not None else 0
    except Exception:
        doc_count = 0

    print(f"[retrieval_service] user={user_email} query='{str(query)[:120]}' docs_found={doc_count}")
    # If no documents found via ParentDocumentRetriever, try vectorstore similarity search as a fallback
    if doc_count == 0:
        try:
            vectorstore = getattr(retriever, 'vectorstore', None)
            if vectorstore is not None and hasattr(vectorstore, 'similarity_search'):
                fallback_docs = vectorstore.similarity_search(query, k=5)
                fallback_count = len(fallback_docs) if fallback_docs is not None else 0
                print(f"[retrieval_service] fallback vectorstore returned {fallback_count} docs")
                return fallback_docs
        except Exception as e:
            print(f"[retrieval_service] fallback failed: {e}")

    return documents