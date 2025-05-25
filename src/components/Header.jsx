import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" disabled />
      </div>
      <div className="header-icons">
        <button className="icon-btn" title="Notifications">🔔</button>
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <span className="user-name">Dnyanesh Awaghad</span>
        </div>
        <button className="icon-btn" title="Add">＋</button>
      </div>
    </header>
  );
}

export default Header;
