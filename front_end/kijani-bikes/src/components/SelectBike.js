import React from "react";
import mountainBike from "../assets/mountainbike.png";
import roadBike from "../assets/roadbike.png";
import electricBike from "../assets/citybike.png";
import { Link } from "react-router-dom";
import Footer from "./layout/Footer";
import classes from "./SelectBike.module.css";

export const SelectBike = () => {
  return (
    <div className={classes.container}>
      <h1>Select Bike</h1>
      <div className="bike-selection">
        <div className="bike-selection__item">
          <Link to="/rides">
            <img
              src={mountainBike}
              alt="Mountain Bike"
              className="bike-selection__image"
            />
            <div className="bike-selection__info">
              <h2>Bike Type: Mountain</h2>
              <h3>Hourly rate: 300/-</h3>
            </div>
            <button className="bike-selection__select-button">Select</button>
          </Link>
        </div>
        <div className="bike-selection__item">
          <Link to="/rides">
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
        </div>
        <div className="bike-selection__item">
          <Link to="/rides">
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
        </div>
      </div>
      <Footer />
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
