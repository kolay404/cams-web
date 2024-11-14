import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-container">
      <div className="left-section">
        <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
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
                  onClick={() => handleNavigation('/komunikasyon')}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>KOMUNIKASYON SA AKADEMIKONG FILIPINO</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble">
                  <p>Pag-aaral ng mga pangunahing konsepto at kasanayan sa akademikong Filipino</p>
                  <ul>
                    <li>Akademikong Pagsulat</li>
                    <li>Pananaliksik</li>
                    <li>Presentasyon</li>
                  </ul>
                </div>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page2"
                  onClick={() => handleNavigation('/Sining')}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>SINING NG PAKIKIPAGTALASTASAN</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble">
                  <p>Pag-aaral ng iba't ibang anyo ng komunikasyon</p>
                  <ul>
                    <li>Verbal at Di-verbal</li>
                    <li>Kulturang Pilipino</li>
                    <li>Makabagong Media</li>
                  </ul>
                </div>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page3"
                  onClick={() => handleNavigation('/pagbasa')}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>PAGBASA AT PAGSULAT SA IBA'T IBANG DISCIPLINA</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble">
                  <p>Integrasyon ng Filipino sa iba't ibang larangan</p>
                  <ul>
                    <li>Teknikal na Pagsulat</li>
                    <li>Akademikong Pagbasa</li>
                    <li>Espesyalisadong Teksto</li>
                  </ul>
                </div>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page4"
                  onClick={() => handleNavigation('/konteksto')}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>KONTEKSTUWALISADONG KOMUNIKASYON SA FILIPINO</h3>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble">
                  <p>Paggamit ng Filipino sa iba't ibang konteksto</p>
                  <ul>
                    <li>Propesyonal na Komunikasyon</li>
                    <li>Panlipunang Diskurso</li>
                    <li>Kontemporaryong Gamit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
