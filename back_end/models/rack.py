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
    station_id = Column(String(128), ForeignKey('stations.id'), nullable=False)
        
    def __init__(self, *args, **kwargs):
        """initializes rack"""
        super().__init__(*args, **kwargs)