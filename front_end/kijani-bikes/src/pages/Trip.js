import React from "react";
import { Trips } from "../components/Trips";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";

const Trip = () => {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <Trips />
        <Footer />
      </Navbar>
    </>
  );
};

export default Trip;
