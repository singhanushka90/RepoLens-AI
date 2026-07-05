from database.collections import users
from auth.password import hash_password, verify_password
from auth.jwt_hadler import create_access_token


def signup_user(user):
    existing_user = users.find_one({"email": user.email})
    if existing_user:
        return {"success": False, "message": "Email already registered"}

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password)
    }
    users.insert_one(new_user)
    return {"success": True, "message": "User Registered Successfully"}


def login_user(login_data):
    user = users.find_one({"email": login_data.email})
    if not user:
        return {"success": False, "message": "Invalid email or password"}

    if not verify_password(login_data.password, user["password"]):
        return {"success": False, "message": "Invalid email or password"}

    access_token = create_access_token({"email": user["email"], "name": user["name"]})
    return {"success": True, "access_token": access_token, "token_type": "bearer"}