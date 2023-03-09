// User Profile page component for the app

import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import UserProfile from "../components/Profile";
import Footer from "../components/layout/Footer";

function Profile() {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <UserProfile />
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </div>
      </Navbar>
    </>
  );
}

export default Profile;
