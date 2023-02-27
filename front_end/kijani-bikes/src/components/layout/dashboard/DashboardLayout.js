import React from 'react';
import MainNavigation from '../MainNavigation';
import Footer from '../Footer';

const DashboardLayout = (props) => {
  return (
    <div className="dashboard-layout">
      <MainNavigation />
      <div className="dashboard-content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

