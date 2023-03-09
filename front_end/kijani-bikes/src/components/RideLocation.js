// Select start and end location for a ride

import React, { useState } from "react";
import axios from "../api/axios";
import classes from "./RideLocation.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StartContext from "../context/StartContext";

function DropdownList() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const { setStart } = useContext(StartContext);
  // const [ride, setRide] = useState("");

  //   Handle start location change
  function handleStart(e) {
    e.preventDefault();
    setStartLocation(e.target.value);
    setStart(e.target.value);
  }

  //   Handle end location change
  function handleEnd(e) {
    setEndLocation(e.target.value);
  }

  //   Handle submit button click
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(startLocation, endLocation);

    const formData = {
      startLocation: startLocation,
      endLocation: endLocation,
    };

    // make api call to get start location details
    try {
      const response = await axios.get(
        "/profile",
        // `api/v1/station/${startLocation}`,
        // JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      console.log(response);
    } catch (err) {
      if (!err.response) {
        console.log("Network Error");
        return;
      } else if (err.response.status === 401) {
        console.log("Invalid credentials");
        return;
      }
    }
  };

  return (
    <div className={classes.rideCont}>
      <div>
        {" "}
        <h3>Choose Start Location</h3>
        <select value={startLocation} onChange={handleStart}>
          <option value="">Select Start Location</option>
          <option value="Unilag-Gate-001">Unilag-Gate-001</option>
          <option value="Unilag-Auditorium-002">Unilag-Auditorium-002</option>
        </select>
      </div>
      <div>
        <h3>Choose End Location</h3>
        <select value={endLocation} onChange={handleEnd}>
          <option value="">Select End Location</option>
          <option value="Unilag-Gate-001">Unilag-Gate-001</option>
          <option value="Unilag-Auditorium-002">Unilag-Auditorium-002</option>
        </select>
      </div>
      <div>
        <Link to="/reserve">
          <button
            onClick={handleSubmit}
            disabled={!startLocation}
            className={classes.btn}
          >
            Start Ride
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DropdownList;
