import React from "react";
import Navbar from "../components/ForDash/Navbar";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";
import { SelectBike } from "../components/SelectBike";

const ReserveBike = () => {
  return (
    <div>
      <MainNavigation />
      <Navbar>
        <SelectBike />
        <Footer />
      </Navbar>
    </div>
  );
};

export default ReserveBike;
