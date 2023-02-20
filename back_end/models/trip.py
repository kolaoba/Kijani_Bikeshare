#!/usr/bin/python3
"""Contains class Trip"""

from models.base_model import BaseModel


class Trip(BaseModel):
    """Represents Amenity class"""
    area_id = ""
    user_id = ""
    start_location = ""
    destination = ""
    start_time = ""
    end_time = ""
    duration = ""
    payment_id = ""
