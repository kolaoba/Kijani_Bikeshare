#!/usr/bin/python3
"""Defines the station class"""
import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, Integer
from models.custom_datatype.geometry import Geometry
from sqlalchemy.orm import relationship


class Station(BaseModel, Base):
    """Represents a docking station.
    Attributes:
        area_id(str): The Area id
        name (str): Name of the docking station
        description: The description of the station
        capacity (str): Number of docking racks in the station
        rack_id (str): The unique id of each docking rack
        longitude (float): The longitude of the station
        latitude (float): The latitude of the station
    """
    __tablename__ = 'stations'
    name = Column(String(128), nullable=False)
    area_id = Column(String(60), ForeignKey('areas.id'), nullable=False)
    description = Column(String(128), nullable=False)
    capacity = Column(Integer, nullable=False)
    rack_id = Column(String(60), ForeignKey('racks.id'), nullable=False)
    location = Column(Geometry, nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes station"""
        super().__init__(*args, **kwargs)