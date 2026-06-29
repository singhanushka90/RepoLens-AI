from langchain_core.stores import InMemoryStore

def get_docstore():
    store=InMemoryStore()
    return store