# Request Receive  2
from fastapi import APIRouter , UploadFile , File
from services.upload_service import process_zip

router=APIRouter()

#request_bhejega or ek file upload karega
@router.post("/upload")
async def upload_project(file : UploadFile=File(...)):
    result=await process_zip(file)
    return result


