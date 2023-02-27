import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarNavItem = ({ to, text, onClick }) => {
  return (
    <li className="sidebar-nav-item" onClick={onClick}>
      <NavLink to={to} activeClassName="active">
        {text}
      </NavLink>
    </li>
  );  
};

export default SidebarNavItem;

