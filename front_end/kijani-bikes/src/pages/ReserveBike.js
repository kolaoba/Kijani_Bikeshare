import React from "react";
import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import { SelectBike } from "../components/SelectBike";

const ReserveBike = () => {
  return (
    <div>
      <MainNavigation />
      <Navbar>
        <SelectBike />
      </Navbar>
    </div>
  );
};

export default ReserveBike;
