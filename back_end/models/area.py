#!/usr/bin/python3
"""Defines the Area class."""
from models.base_model import BaseModel


class Area(BaseModel):
    """Represent an area.

    Attributes:
        state_id (str): The state id.
        name (str): The name of the city.
    """

    city_id = ""
    name = ""
