import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  };


  return (
    <div className="split-screen">
      <div className="left-container">
        <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
      </div>
      <div className="right-container">
        <div className="button-container">
          <button className="moving-button button1">
            <div className="vertical-line left"></div> 
            <div className="vertical-line right"></div>
          </button>
          <button 
          className="moving-button button2"
          onClick={() => handleNavigation('/Sining')}
          >
            <h3 className="button-title2">SINING NG PAKIKIPAGTALASTASAN</h3>
            <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
          </button>
          <button className="moving-button button3">
            <h3 className="button-title3">PAGBASA AT PAGSULAT SA IBA’T IBANG DISCIPLINA</h3>
            <div className="vertical-line left"></div>
            <div className="vertical-line right"></div>
          </button>
          <button className="moving-button button4">
            <div className="vertical-line left"></div> 
            <div className="vertical-line right"></div> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
