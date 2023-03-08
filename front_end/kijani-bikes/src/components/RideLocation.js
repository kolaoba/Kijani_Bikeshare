// Select start and end location for a ride

import React, { useState } from "react";
import axios from "../api/axios";
import classes from "./RideLocation.module.css";
import { Link } from "react-router-dom";

function DropdownList() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [ride, setRide] = useState("");

  //   Handle start location change
  function handleStart(e) {
    setStartLocation(e.target.value);
  }

  //   Handle end location change
  function handleEnd(e) {
    setEndLocation(e.target.value);
  }

  //   Handle submit button click
  function handleSubmit(e) {
    e.preventDefault();
    console.log(startLocation, endLocation);
    setRide({ startLocation, endLocation });

    const formData = {
      startLocation: startLocation,
      endLocation: endLocation,
    };

    try {
      const response = axios.post("/ride", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.rideCont}>
      <div>
        {" "}
        <h3>Choose Start Location</h3>
        <select value={startLocation} onChange={handleStart}>
          <option value="">Select Start Location</option>
          <option value="dock1">Unilag-Gate-001</option>
          <option value="option2">Unilag-Auditorium-002</option>
        </select>
      </div>
      <div>
        <h3>Choose End Location</h3>
        <select value={endLocation} onChange={handleEnd}>
          <option value="">Select End Location</option>
          <option value="dock1">Unilag-Gate-001</option>
          <option value="option2">Unilag-Auditorium-002</option>
        </select>
      </div>
      <div>
        <Link to="/reserve">
          <button>Start Ride</button>
        </Link>
      </div>
    </div>
  );
}

export default DropdownList;
