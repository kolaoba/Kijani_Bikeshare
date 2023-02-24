#!/usr/bin/python
""" holds class City"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship


class City(BaseModel, Base):
    """Representation of city """
    __tablename__ = 'cities'
    name = Column(String(128), nullable=False)

    areas = relationship("Area", backref="city")
    users = relationship("User", backref="city")


    def __init__(self, *args, **kwargs):
        """initializes city"""
        super().__init__(*args, **kwargs)
