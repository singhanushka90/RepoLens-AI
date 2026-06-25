#Zip save and extract 3
import os
import shutil

from loaders.zip_loader import extract_zip
from services.document_service import load_project_document


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
    documents=load_project_document(extracted_path)
    return {"total_documents":len(documents),"documents":documents[:5]}