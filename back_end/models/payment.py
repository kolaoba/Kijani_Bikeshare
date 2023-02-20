#!/usr/bin/python3
"""Defines the Payment class"""
from models.base_model import BaseModel


class Payment(BaseModel):
    """Represents the payment"""
    user_id = ""
    trip_id = ""
