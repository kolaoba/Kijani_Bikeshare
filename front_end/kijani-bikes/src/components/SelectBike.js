import React from "react";
import mountainBike from "../assets/mountainbike.png";
// import roadBike from "../assets/roadbike.png";
// import electricBike from "../assets/citybike.png";
import { Link } from "react-router-dom";
import classes from "./SelectBike.module.css";
import { useContext } from "react";
import StartContext from "../context/StartContext";

export const SelectBike = () => {
  const { start } = useContext(StartContext);
  return (
    <div className={classes.container}>
      <h1>Available Bikes at {start}</h1>
      <div className="bike-selection">
        <div className="bike-selection__item">
          <img
            src={mountainBike}
            alt="Mountain Bike"
            className="bike-selection__image"
          />
          <div className="bike-selection__info">
            <h3>Bike Type: Mountain</h3>
            <h3>Hourly rate: 300/-</h3>
            <h3>Unit Available: </h3>
          </div>
          <Link to="/unlock">
            <button className="bike-selection__select-button">Select</button>
          </Link>
        </div>

        {/*
        <div className="bike-selection__item">
          <Link to="/unlock">
            <img
              src={roadBike}
              alt="Road Bike"
              className="bike-selection__image"
            />
            <div className="bike-selection__info">
              <h2>Bike Type: Road</h2>
              <h3>Hourly rate: 250/-</h3>
            </div>
            <button className="bike-selection__select-button">Select</button>
          </Link>
        </div> */}
        {/* <div className="bike-selection__item">
          <Link to="/unlock">
            <img
              src={electricBike}
              alt="City Bike"
              className="bike-selection__image"
            />
            <div className="bike-selection__info">
              <h2>Bike Type: City</h2>
              <h3>Hourly rate: 200/-</h3>
            </div>
            <button className="bike-selection__select-button">Select</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export const AccountInfo = () => {
  return (
    <div className="home">
      <h1>Kijani basic user info</h1>
    </div>
  );
};

export const Transactions = () => {
  return (
    <div className="home">
      <h1>Transaction and payment history</h1>
    </div>
  );
};
