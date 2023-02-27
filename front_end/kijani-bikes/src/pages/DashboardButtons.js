import React from 'react';
import { Link } from 'react-router-dom';

const DashboardButtons = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/trips">Trips</Link></li>
        <li><Link to="/stations">Stations near you</Link></li>
        <li><Link to="/destination">Enter destination</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </div>
  );
};

export default DashboardButtons;

