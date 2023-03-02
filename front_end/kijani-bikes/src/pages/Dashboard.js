import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Rides, EnterCurrentLocation, UnlockBike, EnterDestination, Dock } from "./Rides";
import { Profile, AccountInfo, Transactions } from "./Profile";
import { Trips, RecentTrips, TripRewards } from "./Trips";
import Contact from "./ContactUs";
import Settings from "./Settings";
//import Footer from "../components/layout/Footer";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case "profile":
      content = <Profile />;
      <select>
	<option value="Account info">AccountInfo </option>
      </select>
      break;
    case "account":
      content = <AccountInfo />;
      break;
    case "transactions":
      content = <Transactions />;
      break;
    case "rides":
      content = <Rides />;
      break;
    case "enter-current-location":
      content = <EnterCurrentLocation />;
      break;
    case "unlock-bike":
      content = <UnlockBike />;
      break;
    case "enter-destination":
      content = <EnterDestination />;
      break;
    case "dock":
      content = <Dock />;
      break;
    case "trips":
      content = <Trips />;
      break;
    case "recent-trips":
      content = <RecentTrips />;
      break;
    case "trip-rewards":
      content = <TripRewards />;
      break;
    case "contact":
      content = <Contact />;
      break;
    case "settings":
      content = <Settings />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <Sidebar handleNavigation={handleNavigation} />
      {content}
    </div>
  );
}

export default Dashboard;

