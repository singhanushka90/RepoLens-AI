# Request Receive  2
from fastapi import APIRouter , UploadFile , File
from services.upload_service import process_zip
from services.upload_service import process_zip, process_github
from pydantic import BaseModel

router=APIRouter()
class GitHubRequest(BaseModel):
    github_url:str


#request_bhejega or ek file upload karega
@router.post("/upload")
async def upload_project(file : UploadFile=File(...)):
    result=await process_zip(file)
    return result


@router.post("/github")
async def github_upload(request:GitHubRequest):
    result=await process_github(request.github_url)
    return result
   