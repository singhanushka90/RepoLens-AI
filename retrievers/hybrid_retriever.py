from langchain_community.retrievers import BM25Retriever
from langchain.retrievers import EnsembleRetriever

from retrievers.parent_retriever import get_parent_retriever


def get_hybrid_retriever(parent_docs):

    # ParentDocumentRetriever
    vector_retriever = get_parent_retriever()

    # BM25 Retriever
    bm25_retriever = BM25Retriever.from_documents(parent_docs)

    bm25_retriever.k = 5

    # Hybrid Retriever
    hybrid_retriever = EnsembleRetriever(

        retrievers=[
            vector_retriever,
            bm25_retriever
        ],

        weights=[
            0.7,
            0.3
        ]

    )

    return hybrid_retriever