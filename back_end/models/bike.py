#!/usr/bin/python
""" holds class Bike"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey, Integer, Index
from models.custom_datatype.geometry import Geometry
from sqlalchemy.orm import relationship

class Bike(BaseModel, Base):
    """Represents a single bike
    Attributes:
    bike_id (str): The unique id of the bke
    model (str): The model of the bike
    size(str) : The size of the Bike
    status (str): The status of the bike
    """
    __tablename__ = 'bikes'
    type = Column(String(128), nullable=False)
    status = Column(String(128), nullable=False)
    location = Column(Geometry, nullable=True)

    trips = relationship("Trip", backref="bike")

    def __init__(self, *args, **kwargs):
        """initializes bike"""
        super().__init__(*args, **kwargs)

Index('bike_id_index', Bike.id)