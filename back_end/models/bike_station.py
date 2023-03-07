""" holds class Bike_Stations"""

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, Integer

class BikeStation(BaseModel, Base):
    """Represents a bike to station relationship
    Attributes:
    bike_id (str): The unique id of the bke
    station_id (str): The unique id of the station
    """
    __tablename__ = 'bike_station'
    
    bike_id = Column(String(60), ForeignKey('bikes.id', name='fk_bike_station_bike_id'), primary_key=True)
    station_id = Column(String(60), ForeignKey('stations.id', name='fk_bike_station_station_id'), primary_key=True)
    status = Column(Integer, nullable=False) # 0 = inactive, 1 = active
    
    def __init__(self, *args, **kwargs):
        """initializes bike_station"""
        super().__init__(*args, **kwargs)
