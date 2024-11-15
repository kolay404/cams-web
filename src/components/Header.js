import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src="/cit-logo2.png" alt="CIT Logo" className="header-logo" />
        </Link>
        
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Menu
            <span className="dropdown-arrow"></span>
          </button>
          
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/" onClick={toggleDropdown}>Home</Link>
            <Link to="/sining" onClick={toggleDropdown}>Sining</Link>
            <Link to="/pagbasa" onClick={toggleDropdown}>Pagbasa</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
