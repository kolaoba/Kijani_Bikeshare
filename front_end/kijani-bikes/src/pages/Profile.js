// User Profile page component for the app

import Navbar from "../components/ForDash/Navbar";
import MainNavigation from "../components/layout/MainNavigation";
import UserProfile from "../components/Profile";

function Profile() {
  return (
    <>
      <MainNavigation />
      <Navbar>
        <UserProfile />
      </Navbar>
    </>
  );
}

export default Profile;
