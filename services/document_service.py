#do nothing just call folder_loader 5

from loaders.folder_loader import load_folder
from splitters.parent_split import split_documents


def load_project_document(project_path):

    documents = load_folder(project_path)

    parent_docs, child_docs = split_documents(documents)

    return {
        "parent_docs": parent_docs,
        "child_docs": child_docs
    }