from fastapi import APIRouter, Depends

from auth.dependencies import get_current_user
from database.collections import users

router = APIRouter()


@router.get("/profile")
async def profile(user=Depends(get_current_user)):
    profile = users.find_one(
        {"email": user["email"]},
        {"_id": 0, "password": 0}
    )
    return profile
