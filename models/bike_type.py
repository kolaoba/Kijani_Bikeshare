#!/usr/bin/python
""" holds class Bike Types"""

from models.base_model import BaseModel, Base, schema

from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship



class BikeType(BaseModel, Base):
    """Represents a single bike
    Attributes:
    name (str): The name of the bike type
    rate (int): price of the bike per hour
    """
    __tablename__ = 'bike_types'
    name = Column(String(128), nullable=False, unique=True)
    rate = Column(Integer, nullable=True) # per hour
    
    bikes = relationship("Bike", backref="biketype", cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes bike"""
        super().__init__(*args, **kwargs)
