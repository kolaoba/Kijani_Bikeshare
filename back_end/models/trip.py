#!/usr/bin/python3
"""Contains class Trip"""

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, DateTime, Integer
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

class Trip(BaseModel, Base):
    """Represents Trip class"""
    __tablename__ = 'trips'
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    bike_id = Column(String(60), ForeignKey('bikes.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=True)
    start_docking_station = Column(String(60), ForeignKey('stations.id'), nullable=False)
    destination_docking_station = Column(String(60), ForeignKey('stations.id'), nullable=False)

    duration = Column(Integer, nullable=True)
    
    def __init__(self, *args, **kwargs):
        """initializes Trip"""
        super().__init__(*args, **kwargs)
        
    @hybrid_property
    def duration_seconds(self):
        diff = (self.end_time - self.start_time).total_seconds()
        return diff

    @validates('end_time', 'start_time')
    def validate_end_time(self, key, end_time):
        if key == 'end_time':
            assert end_time >= self.start_time, 'End time must be after start time'
            self.duration = self.duration_seconds
        elif key == 'start_time':
            assert end_time <= self.end_time, 'Start time must be before end time'
        return end_time    
