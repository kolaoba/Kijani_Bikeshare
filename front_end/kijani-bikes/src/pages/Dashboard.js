import MainNavigation from "../components/layout/MainNavigation";
import { Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import SidebarNav from '../components/layout/SidebarNav';
import Footer from "../components/layout/Footer";
import DashboardButtons from './DashboardButtons';

export function Dash() {
  return (
    <section>
      <MainNavigation />
      <DashboardLayout />
      <Footer />
    </section>
  );
}

export function DashboardPage() {
  return (
    <DashboardLayout>
      <SidebarNav />
      <div className="content">
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/trips" component={Trips} />
        <Route path="/dashboard/maps" component={Maps} />
      </div>
    </DashboardLayout>
  );
}

export function Dashboard() {
  return (
    <div>
      <MainNavigation/>
      <p>Welcome to the dashboard page!</p>
      <DashboardButtons />
      <SidebarNav />
      <Footer />
    </div>
  );
}

export function Profile() {
  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
    </div>
  );
}

export function Trips() {
  return (
    <div>
      <h1>Page 2</h1>
      <p>Welcome to Page 2!</p>
    </div>
  );
}

export function Maps() {
  return (
    <div>
      <h1>Page 3</h1>
      <p>Welcome to Page 3!</p>
    </div>
  );
}

