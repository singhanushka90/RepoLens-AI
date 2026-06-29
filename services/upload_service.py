#Zip save and extract 3
import os
import shutil
from loaders.github_loader import load_github_repo
from services.document_service import load_project_document
from loaders.zip_loader import extract_zip
from services.indexing_service import index_documents




UPLOADE_FOL="uploads"

os.makedirs(UPLOADE_FOL,exist_ok=True)
async def process_zip(file):
    #upload me save karta jayega file
    zip_path=os.path.join(UPLOADE_FOL,file.filename)
    #file create
    with open(zip_path,"wb") as buffer:
        #actual upload zip ko disk me save karna
        shutil.copyfileobj(file.file,buffer)
    #zip extract
    extracted_path=extract_zip(zip_path)

    # call document_service
    documents = load_project_document(extracted_path)
    retriever = index_documents(documents)
    return {
        "total_documents": len(documents),
        "message": "Project Indexed Successfully"
        }


async def process_github(github_url):
    repo_path=load_github_repo(github_url)
    documents = load_project_document(repo_path)

    retriever = index_documents(documents)

    return {
        "total_documents": len(documents),
        "message": "Project Indexed Successfully"
    }
   