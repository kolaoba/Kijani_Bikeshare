#!/usr/bin/python3
"""Contains class Trip"""

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, DateTime, Integer
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import datetime
from sqlalchemy.event import listens_for


class Trip(BaseModel, Base):
    """Represents Trip class"""
    __tablename__ = 'trips'
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    bike_id = Column(String(60), ForeignKey('bikes.id'), nullable=False)
    start_time = Column(DateTime, nullable=False, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)
    start_docking_station = Column(
        String(60),
        ForeignKey('stations.id'),
        nullable=False)
    destination_docking_station = Column(
        String(60), ForeignKey('stations.id'), nullable=False)
    # 0 = active, 1 = completed, 2 = cancelled
    status = Column(Integer, nullable=False)
    duration = Column(Integer, nullable=True)

    def __init__(self, *args, **kwargs):
        """initializes Trip"""
        super().__init__(*args, **kwargs)

    @hybrid_property
    def duration_seconds(self):
        if self.end_time and self.end_time > self.start_time:
            return (self.end_time - self.start_time).total_seconds()
        return None


@listens_for(Trip.end_time, 'set')
def calculate_duration(target, value, oldvalue, initiator):
    if value is not None:
        target.duration = (value - target.start_time).total_seconds()
