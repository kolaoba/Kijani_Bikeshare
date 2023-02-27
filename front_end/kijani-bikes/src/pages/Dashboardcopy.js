//import React from 'react';
import MainNavigation from "../components/layout/MainNavigation";
import { Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import SidebarNav from '../components/layout/SidebarNav';
import Footer from "../components/layout/Footer";

function Dash() {
  return (
    <section>
      <MainNavigation />
      <DashboardLayout />
      <Footer />
    </section>
  );  
}

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <SidebarNav />
      <div className="content">
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/page1" component={Page1} />
        <Route path="/dashboard/page2" component={Page2} />
        <Route path="/dashboard/page3" component={Page3} />
      </div>
    </DashboardLayout>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
    </div>
  );
};

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <p>Welcome to Page 2!</p>
    </div>
  );
};

const Page3 = () => {
  return (
    <div>
      <h1>Page 3</h1>
      <p>Welcome to Page 3!</p>
    </div>
  );
};

export default {DashboardPage, Dash};

