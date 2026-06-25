#do nothing just call folder_loader 5
from loaders.folder_loader import load_folder

def load_project_document(project_path):
    documents=load_folder(project_path)
    return documents