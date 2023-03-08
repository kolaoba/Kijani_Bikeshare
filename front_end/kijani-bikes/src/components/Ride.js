import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./ride.module.css";

function Ride() {
  return (
    <div className={classes.container}>
      <h1>ride page</h1>
      <Link to="/payment">
        <button className={classes.btn}>End Trip</button>
      </Link>
    </div>
  );
}

export default Ride;

