#!/usr/bin/python
"""holds class City"""

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship


class City(BaseModel, Base):
    """Representation of city """
    __tablename__ = 'cities'
    name = Column(String(128), nullable=False)

    areas = relationship("Area", backref="city")

    def __init__(self, *args, **kwargs):
        """initializes city"""
        super().__init__(*args, **kwargs)
