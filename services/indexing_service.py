from retrievers.parent_retriever import get_parent_retriever

retriever = get_parent_retriever()


def index_documents(documents):
    print("Total_docs :",len(documents))
    print(type(documents))
    print(type(documents[0]))
    print("Before add documents")

    retriever.add_documents(documents[:1])
    print(("After add documents"))

    return retriever