import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import QrCode from "../components/QrCode";

export const Unlock = () => {
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
      <h1>Find the stations nearest to you</h1>
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