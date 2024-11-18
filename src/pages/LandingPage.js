import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSiningClick = () => {
    navigate('/sining');
  };

  const handlePagbasaClick = () => {
    navigate('/pagbasa');
  };

  return (
    <div className="landing-container">
      <div className="left-section">
        <div className="left-content">
          <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
          <div className="course-title-container">
            <div className="title-underline"></div>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <div className="book">
          <div className="book-cover">
            <div className="book-spine">
              <div className="spine-line"></div>
              <h2>Filipino Subjects</h2>
              <div className="spine-line"></div>
            </div>
            <div className="pages">
              <div className="page-wrapper">
                <button 
                  className="page page1"
                >
                  <div className="page-line left"></div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page2"
                  onClick={handleSiningClick}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>SINING NG PAKIKIPAGTALASTASAN</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble dark">
                  <ul>
                    <li>Aralin 1: Panimula</li>
                    <li>Aralin 2: Ang Komunikasyon</li>
                    <li>Aralin 3: Ang Wika</li>
                    <li>Aralin 4: Ang Masining na Pagbabasa, Pakikinig at Pag-unawa</li>
                    <li>Aralin 5: Ang Masining na Pagsasalita</li>
                    <li>Talasanggunian / Mga Sanggunian sa Internet</li>
                  </ul>
                </div>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page3"
                  onClick={handlePagbasaClick}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>PAGBASA AT PAGSULAT SA IBA'T IBANG DISCIPLINA</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble dark">
                  <ul>
                    <li>Aralin 1: Pagbasa sa Iba't Ibang Disciplina</li>
                    <li>Aralin 2: Pagsulat sa Iba't Ibang Disciplina</li>
                    <li>Talasanggunian / Mga Sanggunian sa Internet</li>
                  </ul>
                </div>
              </div>
                  
              <div className="page-wrapper">
                <button 
                  className="page page4"
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
