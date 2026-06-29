from langchain_core.stores import InMemoryStore
from langchain_classic.retrievers import ParentDocumentRetriever

from vectorstores.chroma_store import create_vectorstore

from splitters.parent_split import (
    parent_splitter,
    child_splitter
)

# ===========================
# Create VectorStore
# ===========================

vectorstore = create_vectorstore()

# ===========================
# Create DocStore
# ===========================

docstore = InMemoryStore()

# ===========================
# Parent Retriever
# ===========================

retriever = ParentDocumentRetriever(
    vectorstore=vectorstore,
    docstore=docstore,
    child_splitter=child_splitter,
    parent_splitter=parent_splitter
)


def get_parent_retriever():
    return retriever