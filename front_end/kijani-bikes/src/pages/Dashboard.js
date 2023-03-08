// Dashboard page component for the app

import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import NewMap from "../components/maps/NewMap";
import RideLocation from "../components/RideLocation";

function Dashboard() {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <RideLocation />
        <NewMap />
      </Navbar>
    </>
  );
}

export default Dashboard;
