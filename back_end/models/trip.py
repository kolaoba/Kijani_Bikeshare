#!/usr/bin/python3
"""Contains class Trip"""
import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, Geometry, DateTime
from sqlalchemy.orm import relationship

class Trip(BaseModel):
    """Represents Trip class"""
    if models.storage_t == 'db':
        __tablename__ = 'trips'
        duration = Column(String(128), nullable=False)
        user_id = Column(String(128), ForeignKey('users.id'), nullable=False)
        bike_id = Column(String(128), ForeignKey('bikes.id'), nullable=False)
        start_time = Column(DateTime, nullable=False)
        end_time = Column(DateTime, nullable=False)
        start_location = Column(Geometry('POINT'), nullable=False)
        destination = Column(Geometry('POINT'), nullable=False)

        bikes = relationship("Bike", backref="trips")

    def __init__(self, *args, **kwargs):
        """initializes Amenity"""
        super().__init__(*args, **kwargs)

