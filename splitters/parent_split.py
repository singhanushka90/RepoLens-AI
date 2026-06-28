from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document


def split_documents(documents):

    parent_splitter = RecursiveCharacterTextSplitter(chunk_size=2000,chunk_overlap=200)

    child_splitter = RecursiveCharacterTextSplitter(chunk_size=500,chunk_overlap=50)
    parent_docs = []
    child_docs = []
    for doc in documents:

        if isinstance(doc, dict):

            document = Document(page_content=doc["content"],metadata=doc["metadata"])
        else:
            document = doc

        parents = parent_splitter.split_documents([document])

        parent_docs.extend(parents)

        for parent in parents:

            children = child_splitter.split_documents([parent])

            child_docs.extend(children)

    return parent_docs, child_docs


