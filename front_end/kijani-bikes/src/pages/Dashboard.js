// Dashboard page component for the app

import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import MapContainer from "../components/maps/BikeShareMap";
function Dashboard() {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <MapContainer />
      </Navbar>
    </>
  );
}

export default Dashboard;
