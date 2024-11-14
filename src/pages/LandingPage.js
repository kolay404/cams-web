import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSiningClick = () => {
    navigate('/sining');
  };

  const handleAkademikoClick = () => {
    navigate('/akademiko');
  };

  return (
    <div className="landing-container">
      <div className="left-section">
        <div className="left-content">
          <img src="/citu logo.png" alt="CITU Logo" className="logo-image" />
          <div className="course-title-container">
            <h1 className="main-title">FILIPINO SA PILING LARANGAN</h1>
            <div className="title-underline"></div>
            <p className="course-subtitle">Pangkalahatang Pag-aaral ng Filipino sa Iba't Ibang Larangan</p>
          </div>
          <div className="course-description">
            <div className="description-card">
              <h3>Tungkol sa Kurso</h3>
              <p>Isang komprehensibong programa na naglalayong paunlarin ang kakayahan sa paggamit ng Filipino sa iba't ibang aspeto ng komunikasyon at akademikong diskurso.</p>
            </div>
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
                  onClick={handleAkademikoClick}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>KOMUNIKASYON SA AKADEMIKONG FILIPINO</h3>
                    <p className="page-description">
                      Pag-aaral ng pormal na paggamit ng Filipino sa akademikong konteksto, kasama ang:
                    </p>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble enhanced">
                  <p>Komprehensibong pag-aaral ng akademikong pagsulat at komunikasyon</p>
                  <ul>
                    <li>Akademikong Pagsulat at Pananaliksik</li>
                    <li>Pormal na Presentasyon</li>
                    <li>Propesyonal na Komunikasyon</li>
                    <li>Kritikal na Pagsusuri</li>
                    <li>Akademikong Diskurso</li>
                  </ul>
                </div>
              </div>

              <div className="page-wrapper">
                <button 
                  className="page page2"
                  onClick={handleSiningClick}
                >
                  <div className="page-line left"></div>
                  <div className="page-content">
                    <h3>SINING NG PAKIKIPAGTALASTASAN</h3>
                    <p className="page-description">
                      Pag-aaral ng masining at epektibong paraan ng komunikasyon, kabilang ang:
                    </p>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble enhanced">
                  <p>Masusing pag-aaral ng iba't ibang anyo ng komunikasyon</p>
                  <ul>
                    <li>Verbal at Di-verbal na Komunikasyon</li>
                    <li>Kultural na Aspeto ng Pakikipag-usap</li>
                    <li>Tradisyonal at Makabagong Media</li>
                    <li>Epektibong Pakikipag-ugnayan</li>
                    <li>Digital na Komunikasyon</li>
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
                    <p className="page-description">
                      Integrasyon ng Filipino sa iba't ibang larangan ng pag-aaral
                    </p>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble enhanced">
                  <p>Espesyalisadong paggamit ng Filipino sa iba't ibang larangan</p>
                  <ul>
                    <li>Teknikal na Pagsulat at Pagbasa</li>
                    <li>Akademikong Literatura</li>
                    <li>Espesyalisadong Terminolohiya</li>
                    <li>Interdisciplinary na Pag-aaral</li>
                    <li>Praktikal na Aplikasyon</li>
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
                    <p className="page-description">
                      Paggamit ng Filipino sa iba't ibang konteksto at sitwasyon
                    </p>
                  </div>
                  <div className="page-line right"></div>
                  <div className="page-fold"></div>
                </button>
                <div className="info-bubble enhanced">
                  <p>Kontekstuwal na paggamit ng Filipino sa iba't ibang larangan</p>
                  <ul>
                    <li>Propesyonal na Pakikipag-ugnayan</li>
                    <li>Panlipunang Diskurso</li>
                    <li>Kontemporaryong Komunikasyon</li>
                    <li>Situational na Paggamit ng Wika</li>
                    <li>Kulturang Pilipino sa Komunikasyon</li>
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
