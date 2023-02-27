import React from 'react';
import SidebarNav from '../SidebarNav';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <SidebarNav />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

