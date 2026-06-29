from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document


# =====================================
# Parent Splitter
# =====================================

parent_splitter = RecursiveCharacterTextSplitter(
    chunk_size=2000,
    chunk_overlap=200
)


# =====================================
# Child Splitter
# =====================================

child_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)


# =====================================
# Split Documents
# ======================================

def split_documents(documents):

    parent_docs = []
    child_docs = []

    for doc in documents:

        # Dictionary -> Document
        if isinstance(doc, dict):

            doc = Document(
                page_content=doc["content"],
                metadata=doc["metadata"]
            )

        # Parent Split
        parents = parent_splitter.split_documents([doc])

        for parent in parents:

            parent_docs.append(parent)

            # Child Split
            children = child_splitter.split_documents([parent])

            child_docs.extend(children)

    return {
        "parent_docs": parent_docs,
        "child_docs": child_docs
    }