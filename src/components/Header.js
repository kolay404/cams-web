import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="logo-container">
            <img 
              src="/citu logo.png" 
              alt="CITU Logo" 
              className="header-logo"
            />
            <div className="school-name">
              <h1>CEBU INSTITUTE OF TECHNOLOGY</h1>
              <h2>UNIVERSITY</h2>
            </div>
          </div>
        </div>
        <div className="header-right">
          <button className="menu-button">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
