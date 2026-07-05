# Request Receive  2
from fastapi import APIRouter , UploadFile , File, Depends
from services.upload_service import process_zip, process_github
from auth.dependencies import get_current_user
from pydantic import BaseModel

router=APIRouter()
class GitHubRequest(BaseModel):
    github_url:str


#request_bhejega or ek file upload karega
@router.post("/upload")
async def upload_project(file : UploadFile=File(...), user=Depends(get_current_user)):
    result=await process_zip(file, user["email"])
    return result


@router.post("/github")
async def github_upload(request:GitHubRequest, user=Depends(get_current_user)):
    result=await process_github(request.github_url, user["email"])
    return result
   