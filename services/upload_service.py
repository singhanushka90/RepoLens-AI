#Zip save and extract 3
import os
import shutil
from loaders.github_loader import load_github_repo
from services.document_service import load_project_document
from loaders.zip_loader import extract_zip




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
    result = load_project_document(extracted_path)
    parent_docs = result["parent_docs"]
    child_docs = result["child_docs"]
    return {
        "parent_documents": len(parent_docs),
        "child_documents": len(child_docs)
        }



async def process_github(github_url):
    repo_path=load_github_repo(github_url)
    result = load_project_document(repo_path)
    parent_docs = result["parent_docs"]
    child_docs = result["child_docs"]
    return {
        "parent_documents": len(parent_docs),
        "child_documents": len(child_docs)
        }
   