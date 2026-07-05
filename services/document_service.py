from loaders.folder_loader import load_folder

def load_project_document(project_path):

    documents = load_folder(project_path)

    print("Total documents:", len(documents))

    return documents