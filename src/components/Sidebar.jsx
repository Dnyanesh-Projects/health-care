import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import navigationLinks from '../navigationLinks';  // your links array
import navigationLinks from '../data/navigationLinks';
import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <ul>
        {navigationLinks.map(({ id, label, icon }) => {
          const path = label.toLowerCase();
          const isActive = location.pathname === `/${path}` || (path === 'dashboard' && location.pathname === '/');

          return (
            <li key={id} className={isActive ? 'active' : ''}>
              <Link to={path === 'dashboard' ? '/' : `/${path}`}>
                <span className="icon">{icon}</span> {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
