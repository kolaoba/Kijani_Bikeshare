#!/usr/bin/python3
""" holds class User"""

import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey, BigInteger, Index
from sqlalchemy.orm import relationship
from hashlib import md5
from flask_login import UserMixin
from werkzeug.security import generate_password_hash

class User(BaseModel, Base, UserMixin):
    """Representation of a user """
    __tablename__ = 'users'
    email = Column(String(128), nullable=False, unique=True)
    password = Column(String(128), nullable=False)
    first_name = Column(String(128), nullable=True)
    last_name = Column(String(128), nullable=True)
    phone_number = Column(BigInteger, nullable=True)
    city_id = Column(String(60), ForeignKey('cities.id'), nullable=True)

    trips = relationship("Trip", backref="user")

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        """sets a password with md5 encryption"""
        if name == "password":
            value = generate_password_hash(value, method='sha256')
        super().__setattr__(name, value)