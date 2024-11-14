import React, { useState } from 'react';
import './Sining.css';
import Header from '../components/Header';

// Content components for each Aralin
const Aralin1Content = () => (
  <div className="content-grid">
    <div className="info-card introduction">
      <h2>Aralin 1: Introduksyon sa Komunikasyon</h2>
      <p>Ang komunikasyon ay isang mahalagang bahagi ng ating pang-araw-araw na buhay. Sa araling ito, pag-aaralan natin ang mga pangunahing konsepto ng komunikasyon.</p>
    </div>

    <div className="info-card">
      <h2>Kahulugan ng Komunikasyon</h2>
      <p>Ang komunikasyon ay ang proseso ng pagpapalitan ng impormasyon, ideya, damdamin, at kaisipan sa pagitan ng dalawa o higit pang tao.</p>
    </div>

    <div className="info-card">
      <h2>Mga Elemento ng Komunikasyon</h2>
      <ul>
        <li>Tagapagpadala (Sender)</li>
        <li>Mensahe (Message)</li>
        <li>Daluyan (Channel)</li>
        <li>Tagatanggap (Receiver)</li>
        <li>Feedback</li>
      </ul>
    </div>

    <div className="info-card">
      <h2>Layunin ng Komunikasyon</h2>
      <ul>
        <li>Magbigay ng impormasyon</li>
        <li>Magpahayag ng damdamin</li>
        <li>Makaimpluwensya sa iba</li>
        <li>Magbigay ng aliw o libangan</li>
      </ul>
    </div>
  </div>
);

const Aralin2Content = () => (
  <div className="content-grid">
    <div className="info-card introduction">
      <h2>Aralin 2: Verbal na Komunikasyon</h2>
      <p>Ang verbal na komunikasyon ay tumutukoy sa paggamit ng mga salita at wika sa pagpapahayag ng ating mga ideya at damdamin.</p>
    </div>

    <div className="info-card">
      <h2>Pasalitang Komunikasyon</h2>
      <ul>
        <li>Talumpati</li>
        <li>Panayam</li>
        <li>Usapan</li>
        <li>Pagtatanong</li>
      </ul>
    </div>

    <div className="info-card">
      <h2>Pasulat na Komunikasyon</h2>
      <ul>
        <li>Liham</li>
        <li>Sanaysay</li>
        <li>Ulat</li>
        <li>Mensahe sa Text</li>
      </ul>
    </div>
  </div>
);

const Aralin3Content = () => (
  <div className="content-grid">
    <div className="info-card introduction">
      <h2>Aralin 3: Di-Verbal na Komunikasyon</h2>
      <p>Ang di-verbal na komunikasyon ay ang pagpapahayag ng mensahe nang walang paggamit ng mga salita.</p>
    </div>

    <div className="info-card">
      <h2>Kilos ng Katawan</h2>
      <ul>
        <li>Galaw ng kamay</li>
        <li>Postura</li>
        <li>Kilos ng ulo</li>
      </ul>
    </div>

    <div className="info-card">
      <h2>Ekspresyon ng Mukha</h2>
      <ul>
        <li>Ngiti</li>
        <li>Kunot-noo</li>
        <li>Pagtaas ng kilay</li>
      </ul>
    </div>
  </div>
);

const Aralin4Content = () => (
  <div className="content-grid">
    <div className="info-card introduction">
      <h2>Aralin 4: Kultural na Komunikasyon</h2>
      <p>Ang kultural na komunikasyon ay tumutukoy sa mga paraan ng pakikipag-ugnayan na may kaugnayan sa ating kultura.</p>
    </div>

    <div className="info-card">
      <h2>Tradisyonal na Pagbati</h2>
      <ul>
        <li>Pagmamano</li>
        <li>Paggamit ng Po at Opo</li>
        <li>Beso-beso</li>
      </ul>
    </div>

    <div className="info-card">
      <h2>Kultural na Pagpapahalaga</h2>
      <ul>
        <li>Paggalang sa nakatatanda</li>
        <li>Bayanihan</li>
        <li>Pakikisama</li>
      </ul>
    </div>
  </div>
);

const Aralin5Content = () => (
  <div className="content-grid">
    <div className="info-card introduction">
      <h2>Aralin 5: Makabagong Komunikasyon</h2>
      <p>Ang makabagong komunikasyon ay tumutukoy sa mga bagong paraan ng pakikipag-ugnayan gamit ang teknolohiya.</p>
    </div>

    <div className="info-card">
      <h2>Digital na Komunikasyon</h2>
      <ul>
        <li>Social Media</li>
        <li>Email</li>
        <li>Video Conferencing</li>
        <li>Instant Messaging</li>
      </ul>
    </div>

    <div className="info-card">
      <h2>Mga Hamon sa Digital na Komunikasyon</h2>
      <ul>
        <li>Digital Etiquette</li>
        <li>Privacy at Security</li>
        <li>Information Overload</li>
      </ul>
    </div>
  </div>
);

function Sining() {
  const [selectedAralin, setSelectedAralin] = useState('');

  const renderContent = () => {
    switch(selectedAralin) {
      case '1':
        return <Aralin1Content />;
      case '2':
        return <Aralin2Content />;
      case '3':
        return <Aralin3Content />;
      case '4':
        return <Aralin4Content />;
      case '5':
        return <Aralin5Content />;
      default:
        return (
          <div className="content-grid">
            <div className="info-card introduction">
              <h2>Introduksyon</h2>
              <p>Ang Sining ng Pakikipagtalastasan ay isang komprehensibong pag-aaral ng iba't ibang paraan ng komunikasyon sa Filipino. Ito ay nakatuon sa pagpapaunlad ng kakayahan sa epektibong pakikipag-ugnayan sa iba't ibang konteksto.</p>
            </div>

            <div className="info-card objectives">
              <h2>Mga Layunin</h2>
              <ul>
                <li>Maunawaan ang iba't ibang anyo ng komunikasyon</li>
                <li>Mapaunlad ang kakayahan sa pakikipag-usap</li>
                <li>Matutuhan ang tamang paggamit ng wika</li>
                <li>Mapahusay ang kasanayan sa pakikinig at pagsasalita</li>
              </ul>
            </div>

            <div className="info-card communication-types">
              <h2>Uri ng Komunikasyon</h2>
              <div className="comm-type">
                <h3>Verbal na Komunikasyon</h3>
                <ul>
                  <li>Pasalita (Oral Communication)</li>
                  <li>Pasulat (Written Communication)</li>
                </ul>
              </div>
              <div className="comm-type">
                <h3>Di-Verbal na Komunikasyon</h3>
                <ul>
                  <li>Kilos ng Katawan (Body Language)</li>
                  <li>Ekspresyon ng Mukha (Facial Expressions)</li>
                  <li>Galaw ng Mata (Eye Contact)</li>
                </ul>
              </div>
            </div>

            <div className="info-card cultural-context">
              <h2>Kultural na Konteksto</h2>
              <p>Ang komunikasyon ay may malalim na ugnayan sa kultura:</p>
              <ul>
                <li>Paggamit ng "Po" at "Opo"</li>
                <li>Pagmamano at Pagbati</li>
                <li>Tradisyonal na Pakikipag-usap</li>
                <li>Modernong Komunikasyon</li>
              </ul>
            </div>

            <div className="info-card modern-application">
              <h2>Makabagong Aplikasyon</h2>
              <div className="modern-examples">
                <ul>
                  <li>Digital na Komunikasyon</li>
                  <li>Social Media</li>
                  <li>Online Collaboration</li>
                  <li>Virtual Meetings</li>
                </ul>
              </div>
            </div>

            <div className="info-card practical-tips">
              <h2>Mga Praktikal na Payo</h2>
              <div className="tips-content">
                <ul>
                  <li>Malinaw na pagpapahayag ng ideya</li>
                  <li>Aktibong pakikinig</li>
                  <li>Tamang pagbigkas at tono</li>
                  <li>Angkop na body language</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="sining-container">
      <Header />
      
      <div className="main-content">
        <div className="title-section">
          <h1>SINING NG PAKIKIPAGTALASTASAN</h1>
          <p className="subtitle">Pag-aaral ng Sining ng Komunikasyon sa Filipino</p>
          
          <div className="aralin-selector">
            <select 
              className="aralin-dropdown"
              value={selectedAralin}
              onChange={(e) => setSelectedAralin(e.target.value)}
            >
              <option value="">Pumili ng Aralin</option>
              <option value="1">Aralin 1: Introduksyon sa Komunikasyon</option>
              <option value="2">Aralin 2: Verbal na Komunikasyon</option>
              <option value="3">Aralin 3: Di-Verbal na Komunikasyon</option>
              <option value="4">Aralin 4: Kultural na Komunikasyon</option>
              <option value="5">Aralin 5: Makabagong Komunikasyon</option>
            </select>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default Sining;
