import React, { useState } from 'react';
import './Pagbasa.css';
import Header from '../components/Header';

// Content components for each module
const Module1Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 1: Introduksyon sa Pagbasa at Pagsulat sa Iba't Ibang Disiplina</h2>
      <div className="text-content">
        <p>Ang pagbasa at pagsulat sa iba't ibang disiplina ay tumutukoy sa espesyalisadong paggamit ng Filipino sa iba't ibang larangan ng pag-aaral. Ito ay nakatuon sa pag-unawa at paglikha ng mga teksto na may kaugnayan sa iba't ibang akademikong larangan.</p>

        <blockquote>
          "Ang bawat disiplina ay may sariling wika at paraan ng pagpapahayag na dapat maintindihan at magamit nang wasto."
        </blockquote>

        <h3>Kahalagahan ng Interdisciplinary na Pagbasa at Pagsulat</h3>
        <ul>
          <li><strong>Espesyalisadong Kaalaman</strong> - Pag-unawa sa mga terminong teknikal sa bawat larangan</li>
          <li><strong>Propesyonal na Pagsulat</strong> - Kakayahang magsulat sa konteksto ng iba't ibang propesyon</li>
          <li><strong>Akademikong Integrasyon</strong> - Pagsasama ng Filipino sa iba't ibang larangan ng pag-aaral</li>
          <li><strong>Praktikal na Aplikasyon</strong> - Paggamit ng wika sa totoong sitwasyon ng trabaho</li>
        </ul>
      </div>
    </div>
  </div>
);

const Module2Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 2: Pagbasa at Pagsulat sa Agham</h2>
      <div className="text-content">
        <p>Ang larangan ng agham ay may natatanging pangangailangan sa pagbasa at pagsulat. Kabilang dito ang paggamit ng teknikal na terminolohiya at malinaw na pagpapaliwanag ng mga proseso at resulta.</p>

        <h3>Mga Uri ng Tekstong Pang-agham</h3>
        <ul>
          <li><strong>Laboratory Report</strong> - Dokumentasyon ng mga eksperimento</li>
          <li><strong>Scientific Paper</strong> - Pormal na ulat ng pananaliksik</li>
          <li><strong>Technical Documentation</strong> - Paglalarawan ng mga proseso at pamamaraan</li>
        </ul>

        <blockquote>
          "Sa agham, ang kawastuan at kalinawan ng pagsulat ay mahalaga para sa wastong pag-unawa ng mga konsepto."
        </blockquote>

        <h3>Mga Pamantayan sa Pagsulat ng Agham</h3>
        <ol>
          <li>Paggamit ng tamang terminolohiya</li>
          <li>Obhetibong paglalahad</li>
          <li>Malinaw na pagpapaliwanag ng metodolohiya</li>
          <li>Tumpak na presentasyon ng datos</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module3Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 3: Pagbasa at Pagsulat sa Teknolohiya</h2>
      <div className="text-content">
        <p>Sa larangan ng teknolohiya, ang pagbasa at pagsulat ay nakatuon sa paglalarawan ng mga makabagong sistema, proseso, at kagamitan.</p>

        <h3>Mga Uri ng Teknikal na Dokumentasyon</h3>
        <ul>
          <li><strong>User Manual</strong> - Gabay sa paggamit ng produkto o sistema</li>
          <li><strong>Technical Specifications</strong> - Detalyadong paglalarawan ng mga katangian</li>
          <li><strong>Process Documentation</strong> - Dokumentasyon ng mga hakbang at pamamaraan</li>
        </ul>

        <blockquote>
          "Ang mahusay na teknikal na pagsulat ay nagbibigay-daan sa mas madaling pag-unawa ng komplikadong teknolohiya."
        </blockquote>

        <h3>Mga Elemento ng Teknikal na Pagsulat</h3>
        <ol>
          <li>Malinaw na istraktura</li>
          <li>Step-by-step na paglalarawan</li>
          <li>Visual aids at diagrama</li>
          <li>Konsistenteng terminolohiya</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module4Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 4: Pagbasa at Pagsulat sa Negosyo</h2>
      <div className="text-content">
        <p>Ang larangan ng negosyo ay nangangailangan ng partikular na kasanayan sa pagbasa at pagsulat ng mga dokumentong pangnegosyo.</p>

        <h3>Mga Uri ng Business Writing</h3>
        <ul>
          <li><strong>Business Proposal</strong> - Panukala para sa negosyo</li>
          <li><strong>Marketing Materials</strong> - Mga materyales pang-marketing</li>
          <li><strong>Corporate Communications</strong> - Komunikasyong pangkorporasyon</li>
        </ul>

        <blockquote>
          "Sa negosyo, ang propesyonal na pagsulat ay nagpapakita ng kredibilidad at kahusayan."
        </blockquote>

        <h3>Mga Prinsipyo ng Business Writing</h3>
        <ol>
          <li>Direkta at malinaw na komunikasyon</li>
          <li>Propesyonal na tono</li>
          <li>Data-driven na presentasyon</li>
          <li>Target audience consideration</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module5Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 5: Pagbasa at Pagsulat sa Sining at Kultura</h2>
      <div className="text-content">
        <p>Ang pagbasa at pagsulat sa larangan ng sining at kultura ay nangangailangan ng mas malikhaing approach at malalim na pag-unawa sa kulturang Pilipino.</p>

        <h3>Mga Uri ng Kultural na Teksto</h3>
        <ul>
          <li><strong>Art Criticism</strong> - Pagsusuri ng sining</li>
          <li><strong>Cultural Essays</strong> - Sanaysay tungkol sa kultura</li>
          <li><strong>Creative Writing</strong> - Malikhaing pagsulat</li>
        </ul>

        <blockquote>
          "Ang pagsulat tungkol sa kultura ay isang paraan ng pagpapanatili at pagpapayaman ng ating pagkakakilanlan."
        </blockquote>

        <h3>Mga Elemento ng Kultural na Pagsulat</h3>
        <ol>
          <li>Kontekstwalisasyon ng kultura</li>
          <li>Malikhaing pagpapahayag</li>
          <li>Kulturang sensitibidad</li>
          <li>Paggamit ng mga kultural na reperensya</li>
        </ol>
      </div>
    </div>
  </div>
);

function Pagbasa() {
  const [selectedModule, setSelectedModule] = useState('');

  const renderContent = () => {
    switch(selectedModule) {
      case '1':
        return <Module1Content />;
      case '2':
        return <Module2Content />;
      case '3':
        return <Module3Content />;
      case '4':
        return <Module4Content />;
      case '5':
        return <Module5Content />;
      default:
        return (
          <div className="content-grid">
            <div className="text-section highlight">
              <h2>Introduksyon sa Pagbasa at Pagsulat sa Iba't Ibang Disiplina</h2>
              <div className="text-content">
                <p>Ang kursong ito ay naglalayong paunlarin ang kakayahan ng mga mag-aaral sa pagbasa at pagsulat ng mga tekstong may kaugnayan sa iba't ibang larangan ng pag-aaral. Ito ay nakatuon sa pag-unawa at paglikha ng mga espesyalisadong teksto sa iba't ibang disiplina.</p>

                <blockquote>
                  "Ang kakayahang magbasa at magsulat sa iba't ibang disiplina ay susi sa matagumpay na pakikilahok sa iba't ibang larangan ng lipunan."
                </blockquote>

                <h3>Layunin ng Kurso</h3>
                <ul>
                  <li><strong>Interdisciplinary Understanding</strong> - Pag-unawa sa iba't ibang larangan</li>
                  <li><strong>Technical Writing Skills</strong> - Pagpapaunlad ng teknikal na pagsulat</li>
                  <li><strong>Professional Communication</strong> - Kahusayan sa propesyonal na komunikasyon</li>
                  <li><strong>Critical Reading</strong> - Kritikal na pagbasa at pag-unawa</li>
                </ul>

                <h3>Mga Pangunahing Larangan</h3>
                <p>Ang kurso ay sumasaklaw sa mga sumusunod na larangan:</p>
                <ol>
                  <li>Agham at Pananaliksik</li>
                  <li>Teknolohiya at Engineering</li>
                  <li>Negosyo at Ekonomiya</li>
                  <li>Sining at Kultura</li>
                  <li>Sosyal na Agham</li>
                </ol>

                <h3>Mga Modyul sa Kursong Ito</h3>
                <p>Ang kurso ay nahahati sa limang mahahalagang modyul:</p>
                <ol>
                  <li><strong>Modyul 1: Introduksyon sa Interdisciplinary na Pagbasa at Pagsulat</strong></li>
                  <li><strong>Modyul 2: Pagbasa at Pagsulat sa Agham</strong></li>
                  <li><strong>Modyul 3: Pagbasa at Pagsulat sa Teknolohiya</strong></li>
                  <li><strong>Modyul 4: Pagbasa at Pagsulat sa Negosyo</strong></li>
                  <li><strong>Modyul 5: Pagbasa at Pagsulat sa Sining at Kultura</strong></li>
                </ol>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pagbasa-container">
      <Header />
      
      <div className="main-content">
        <div className="title-section">
          <h1>PAGBASA AT PAGSULAT SA IBA'T IBANG DISIPLINA</h1>
          <p className="subtitle">Integrasyon ng Filipino sa Iba't Ibang Larangan ng Pag-aaral</p>
          
          <div className="module-selector">
            <select 
              className="module-dropdown"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option value="">Pumili ng Modyul</option>
              <option value="1">Modyul 1: Introduksyon sa Interdisciplinary na Pagbasa at Pagsulat</option>
              <option value="2">Modyul 2: Pagbasa at Pagsulat sa Agham</option>
              <option value="3">Modyul 3: Pagbasa at Pagsulat sa Teknolohiya</option>
              <option value="4">Modyul 4: Pagbasa at Pagsulat sa Negosyo</option>
              <option value="5">Modyul 5: Pagbasa at Pagsulat sa Sining at Kultura</option>
            </select>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default Pagbasa; 