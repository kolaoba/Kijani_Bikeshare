import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import QrCode from "../components/QrCode";

export const Rides = () => {
  return (
    <div className="services">
      <MainNavigation />
      <Navbar>
        {" "}
        <QrCode />
      </Navbar>
    </div>
  );
};

export const EnterCurrentLocation = () => {
  return (
    <div className="services">
      <h1>Find the stations neres to you</h1>
    </div>
  );
};

export const UnlockBike = () => {
  return (
    <div className="services">
      <h1>Get the secret code to unlock the bike</h1>
    </div>
  );
};

export const EnterDestination = () => {
  return (
    <div className="services">
      <h1>Get the best route choices to your preferred destinations</h1>
    </div>
  );
};

export const Dock = () => {
  return (
    <div className="services">
      <h1>Dock the bike to end yor current trip</h1>
    </div>
  );
};
