#!/usr/bin/python
""" holds class Area"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Area(BaseModel, Base):
    """Representation of area """
    __tablename__ = 'areas'
    city_id = Column(String(60), ForeignKey('cities.id'), nullable=False)
    name = Column(String(128), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes area"""
        super().__init__(*args, **kwargs)
