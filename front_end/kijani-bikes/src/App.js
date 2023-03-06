import { Route, Routes, BrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import UserContext from "./context/UserContext";
import React, { useState } from "react";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            {/* <Route path="/about" element={<About />} /> */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
