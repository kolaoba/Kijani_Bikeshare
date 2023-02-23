#!/usr/bin/python
""" holds class Area"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Area(BaseModel, Base):
    """Representation of area """
    if models.storage_t == "db":
        __tablename__ = 'areas'
        city_id = Column(String(60), ForeignKey('cities.id'), nullable=False)
        name = Column(String(128), nullable=False)
        # places = relationship("Place",
        #                       backref="cities",
        #                       cascade="all, delete, delete-orphan")
    else:
        city_id = ""
        name = ""

    def __init__(self, *args, **kwargs):
        """initializes area"""
        super().__init__(*args, **kwargs)
