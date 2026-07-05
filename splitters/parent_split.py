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

