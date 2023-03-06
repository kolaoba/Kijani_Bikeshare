import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Rides } from "./pages/Rides";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import { Trips } from "./pages/Trips";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path= "rides" element={<Rides />} />
          <Route path= "payment" element={<Payment />} />
          <Route path="trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
