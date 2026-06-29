from langchain_chroma import Chroma
from embeddings.embedding_model import get_embedding_model


def get_retriever():
    embeddding=get_embedding_model()
    vectorstore=Chroma(
        persist_directory="chroma_db",
        embedding_function=embedding
    )
    retriever=vectorstore.as_retriever(search_kwargs={"k":5})
    return retriever