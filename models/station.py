#!/usr/bin/python3
"""Defines the station class"""
from models.base_model import BaseModel


class Station(BaseModel):
    """Represents a docking station.
    Attributes:
        area_id(str): The Area id
        bike_id(str): The Bike id
        name (str): Name of the docking station
        description: The description of the station
        capacity (str): Number of docking racks in the station
        rack_id (str): The unique id of each docking rack
        longitude (float): The longitude of the station
        latitude (float): The latitude of the station
    """
    area_id = ""
    bike_id =""
    name = ""
    description = ""
    capacity = ""
    longitude = 0.0
    latitude = 0.0
