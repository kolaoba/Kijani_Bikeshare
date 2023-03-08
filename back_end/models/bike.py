#!/usr/bin/python
""" holds class Bike"""

from models.base_model import BaseModel, Base, schema

from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry


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
    location = Column(Geometry('POINT', srid=4326), nullable=False)

    trips = relationship(
        "Trip",
        backref="bike",
        cascade="all, delete, delete-orphan")

    stations = relationship("Station", secondary=f'{schema}.bike_station')

    def __init__(self, *args, **kwargs):
        """initializes bike"""
        super().__init__(*args, **kwargs)
