# 4 extract and open
import zipfile
import os

EXTRACT_FOL=("extracted_projects")
os.makedirs(EXTRACT_FOL,exist_ok=True)

def extract_zip(zip_path):
    folder_name=os.path.basename(zip_path).replace("zip","")
    extract_path=os.path.join(EXTRACT_FOL,folder_name)
    #open zip
    with zipfile.ZipFile(zip_path,"r") as zip_ref:
        zip_ref.extractall(extract_path)
    return extract_path