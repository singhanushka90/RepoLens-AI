from fastapi import APIRouter

from models.user import User
from models.login import LoginRequest
from services.auth_service import login_user, signup_user

router = APIRouter()


@router.post("/signup")
async def signup(user: User):
    return signup_user(user)


@router.post("/login")
async def login(login_data: LoginRequest):
    return login_user(login_data)
