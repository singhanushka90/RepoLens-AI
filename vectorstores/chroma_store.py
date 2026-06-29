from langchain_chroma import Chroma

from embeddings.embedding_model import get_embedding_model


# =====================================
# Embedding Model
# =====================================

embedding_model = get_embedding_model()


# =====================================
# Create ChromaDB
# =====================================

def create_vectorstore():

    vectorstore = Chroma(

        collection_name="ai_project_reviewer",

        embedding_function=embedding_model,

        persist_directory="chroma_db"

    )

    return vectorstore