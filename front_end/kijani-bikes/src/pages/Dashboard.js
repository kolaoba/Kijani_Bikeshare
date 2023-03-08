// Dashboard page component for the app

import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import MapContainer from "../components/maps/BikeShareMap";
import RideLocation from "../components/RideLocation";

function Dashboard() {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <RideLocation />
        <div style={{ height: "700px", width: "700px" }}>
          <MapContainer />
        </div>
      </Navbar>
    </>
  );
}

export default Dashboard;
