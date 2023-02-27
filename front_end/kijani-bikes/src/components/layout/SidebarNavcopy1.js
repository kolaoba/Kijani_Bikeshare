import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarNavItem from './SidebarNavItem';

const SidebarNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <SidebarNavItem text="Dropdown">
          <ul className="dropdown-menu">
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
            <li><Link to="/page3">Page 3</Link></li>
          </ul>
        </SidebarNavItem>
      </ul>
    </div>
  );
};

export default SidebarNav;

