#!/usr/bin/python3
"""Defines the Bike class"""
from models.base_model import BaseModel


class Bike(BaseModel):
    """Represents a single bike
    Attributes:
    bike_id (str): The unique id of the bke
    model (str): The model of the bike
    size(str) : The size of the Bike
    status (str): The status of the bike
    """
    bike_id = ""
    size = ""
    model = ""
    status = ""
