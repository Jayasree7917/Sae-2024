import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1 className="header-heading">Our Events</h1>
          <p className="header-tagline">Where Ideas Drive Progress</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
