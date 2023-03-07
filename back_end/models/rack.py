#!/usr/bin/python3
""" holds class Rack"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Rack(BaseModel, Base):
    """Representation of rack """
    __tablename__ = 'racks'
    
    bikes = relationship("Bike", secondary='bike_rack', cascade="all, delete, delete-orphan")
    
    # station_id = Column(String(128), ForeignKey('stations.id',  name='fk_rack_station_id'), nullable=False)

    # stations = relationship("Station", backref="rack", cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes rack"""
        super().__init__(*args, **kwargs)
