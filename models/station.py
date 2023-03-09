#!/usr/bin/python3
"""Defines the station class"""
import models
from models.base_model import BaseModel, Base, schema
from sqlalchemy import Column, String, ForeignKey, Integer
from geoalchemy2 import Geometry
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
    name = Column(String(128), nullable=False, unique=True)
    area_id = Column(String(60), ForeignKey('areas.id'), nullable=False)
    description = Column(String(128), nullable=False)
    capacity = Column(Integer, nullable=False)
    # rack_id = Column(String(60), ForeignKey('racks.id', name='fk_station_rack_id'), nullable=False)
    location = Column(Geometry('POINT', srid=4326), nullable=False)

    bikes = relationship(
        "Bike",
        secondary=f'{schema}.bike_station',
        overlaps="stations")

    # racks = relationship("Rack", backref="station", cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes station"""
        super().__init__(*args, **kwargs)
