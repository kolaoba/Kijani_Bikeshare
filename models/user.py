#!/usr/bin/python3
"""A derived class User that inherits from BaseModel"""
from models.base_model import BaseModel
import models

class User(BaseModel):
    """user class"""
    email = ''
    password = ''
    first_name = ''
    last_name = ''
    city_id


