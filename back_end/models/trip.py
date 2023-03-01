#!/usr/bin/python3
"""Contains class Trip"""

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, DateTime, Integer
from geoalchemy2 import Geometry


class Trip(BaseModel, Base):
    """Represents Trip class"""
    __tablename__ = 'trips'
    duration = Column(Integer, nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    bike_id = Column(String(60), ForeignKey('bikes.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    start_location = Column(Geometry('POINT'), nullable=False)
    destination = Column(Geometry('POINT'), nullable=False)
    
    def __init__(self, *args, **kwargs):
        """initializes Trip"""
        super().__init__(*args, **kwargs)
