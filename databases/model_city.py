#!/usr/bin/python3
"""
This script defines a City class and
a Base class to work with MySQLAlchemy ORM
"""

import sqlalchemy
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class City(Base):
    """Representation of a city"""
    __tablename__ = 'cities'
    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)
