import React, { useState } from 'react';
import './Pagbasa.css';
import Header from '../components/Header';

// Content components for each module
const Module1Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 1: Introduksyon sa Akademikong Filipino</h2>
      <div className="text-content">
        <p>Ang akademikong Filipino ay tumutukoy sa pormal na paggamit ng wikang Filipino sa larangan ng edukasyon, pananaliksik, at iba pang intelektwal na gawain. Ito ay mahalagang kasangkapan sa pagpapalaganap ng kaalaman at pag-unawa sa ating sariling wika.</p>

        <blockquote>
          "Ang akademikong Filipino ay hindi lamang wika, kundi isang instrumento ng pag-unlad ng kaisipan at karunungan."
        </blockquote>

        <h3>Kahalagahan ng Akademikong Filipino</h3>
        <ul>
          <li><strong>Pagpapaunlad ng Wika</strong> - Nagbibigay-daan sa paglago ng bokabularyo at terminolohiya</li>
          <li><strong>Pananaliksik</strong> - Nakatutulong sa pagbuo ng mga pag-aaral sa Filipino</li>
          <li><strong>Edukasyon</strong> - Ginagamit sa pagtuturo at pagkatuto</li>
          <li><strong>Intelektwal na Diskurso</strong> - Nagsisilbing daan sa mataas na antas ng talakayan</li>
        </ul>

        <h3>Mga Katangian ng Akademikong Pagsulat</h3>
        <ol>
          <li>Malinaw at direktang pagpapahayag</li>
          <li>Paggamit ng pormal na wika</li>
          <li>Lohikal na pagkakasunod-sunod ng mga ideya</li>
          <li>Wastong dokumentasyon at pagsipi</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module2Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 2: Mga Uri ng Akademikong Sulatin</h2>
      <div className="text-content">
        <p>Ang akademikong sulatin ay may iba't ibang uri at layunin. Bawat uri ay may sariling istraktura at pamantayan na dapat sundin.</p>

        <h3>Pananaliksik</h3>
        <ul>
          <li><strong>Tesis</strong> - Komprehensibong pag-aaral sa partikular na paksa</li>
          <li><strong>Disertasyon</strong> - Mas malalim na pananaliksik para sa doktorado</li>
          <li><strong>Research Paper</strong> - Mas maikling pananaliksik tungkol sa isang paksa</li>
        </ul>

        <blockquote>
          "Ang mabuting akademikong sulatin ay nagbibigay-liwanag sa madilim na aspeto ng kaalaman."
        </blockquote>

        <h3>Mga Elemento ng Akademikong Papel</h3>
        <ol>
          <li>Panimula (Introduction)</li>
          <li>Paglalahad ng Suliranin (Problem Statement)</li>
          <li>Metodolohiya (Methodology)</li>
          <li>Resulta at Diskusyon (Results and Discussion)</li>
          <li>Konklusyon (Conclusion)</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module3Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 3: Akademikong Presentasyon</h2>
      <div className="text-content">
        <p>Ang akademikong presentasyon ay isang mahalagang kasanayan sa larangan ng edukasyon at pananaliksik. Ito ay nangangailangan ng maingat na paghahanda at mahusay na paghahatid.</p>

        <h3>Mga Uri ng Presentasyon</h3>
        <ul>
          <li><strong>Oral Defense</strong> - Pagtatanggol ng pananaliksik</li>
          <li><strong>Seminar</strong> - Pagbabahagi ng kaalaman sa grupo</li>
          <li><strong>Conference</strong> - Presentasyon sa akademikong pagtitipon</li>
        </ul>

        <blockquote>
          "Ang epektibong presentasyon ay kombinasyon ng mahusay na paghahanda at tiwala sa sarili."
        </blockquote>

        <h3>Mga Elemento ng Mahusay na Presentasyon</h3>
        <ol>
          <li>Malinaw na paghahatid ng mensahe</li>
          <li>Angkop na visual aids</li>
          <li>Epektibong paggamit ng oras</li>
          <li>Kakayahang sagutin ang mga tanong</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module4Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 4: Akademikong Pakikipag-ugnayan</h2>
      <div className="text-content">
        <p>Ang akademikong pakikipag-ugnayan ay tumutukoy sa pormal na paraan ng pakikipag-komunikasyon sa loob ng akademikong komunidad.</p>

        <h3>Mga Uri ng Akademikong Komunikasyon</h3>
        <ul>
          <li><strong>Email</strong> - Pormal na komunikasyon sa digital na paraan</li>
          <li><strong>Sulat</strong> - Tradisyonal na pormal na komunikasyon</li>
          <li><strong>Memorandum</strong> - Opisyal na pahayag o anunsyo</li>
        </ul>

        <blockquote>
          "Sa akademikong mundo, ang propesyonalismo sa komunikasyon ay susi sa tagumpay."
        </blockquote>

        <h3>Mga Pamantayan sa Pakikipag-ugnayan</h3>
        <ol>
          <li>Paggamit ng pormal na wika</li>
          <li>Malinaw na pagpapahayag</li>
          <li>Propesyonal na tono</li>
          <li>Wastong format at istraktura</li>
        </ol>
      </div>
    </div>
  </div>
);

const Module5Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Modyul 5: Akademikong Pagsusuri</h2>
      <div className="text-content">
        <p>Ang akademikong pagsusuri ay ang sistematikong pag-aaral at ebalwasyon ng mga teksto, datos, o pananaliksik. Ito ay nangangailangan ng kritikal na pag-iisip at maingat na pagsusuri.</p>

        <h3>Mga Uri ng Pagsusuri</h3>
        <ul>
          <li><strong>Literature Review</strong> - Pagsusuri ng mga naunang pag-aaral</li>
          <li><strong>Content Analysis</strong> - Pagsusuri ng nilalaman</li>
          <li><strong>Critical Analysis</strong> - Malalimang pagsusuri at interpretasyon</li>
        </ul>

        <blockquote>
          "Ang mabuting pagsusuri ay nagbubunga ng mas malalim na pag-unawa at bagong kaalaman."
        </blockquote>

        <h3>Mga Hakbang sa Pagsusuri</h3>
        <ol>
          <li>Pagbabasa at pag-unawa</li>
          <li>Pagtukoy ng mahahalagang punto</li>
          <li>Pagsusuri ng mga ebidensya</li>
          <li>Pagbuo ng konklusyon</li>
        </ol>
      </div>
    </div>
  </div>
);

function Akademiko() {
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
              <h2>Introduksyon sa Akademikong Filipino</h2>
              <div className="text-content">
                <p>Ang Komunikasyon sa Akademikong Filipino ay isang mahalagang asignatura na naglalayong paunlarin ang kakayahan ng mga mag-aaral sa paggamit ng wikang Filipino sa akademikong konteksto. Ito ay nakatuon sa pagpapahusay ng kasanayan sa pormal na pagsulat, presentasyon, at pakikipag-ugnayan sa larangan ng edukasyon at pananaliksik.</p>

                <blockquote>
                  "Ang akademikong Filipino ay hindi lamang tungkol sa wika, kundi sa kakayahang magpahayag ng malalim na kaisipan at kaalaman sa ating sariling wika."
                </blockquote>

                <h3>Layunin ng Kurso</h3>
                <ul>
                  <li><strong>Kasanayan sa Pagsulat</strong> - Pagpapaunlad ng kakayahan sa akademikong pagsulat</li>
                  <li><strong>Kritikal na Pag-iisip</strong> - Pagpapalalim ng kakayahan sa pagsusuri at pag-unawa</li>
                  <li><strong>Pormal na Komunikasyon</strong> - Pagpapahusay ng kakayahan sa pormal na pakikipag-ugnayan</li>
                  <li><strong>Pananaliksik</strong> - Paglinang ng kasanayan sa pananaliksik sa Filipino</li>
                </ul>

                <h3>Kahalagahan ng Akademikong Filipino</h3>
                <p>Sa kasalukuyang panahon, ang akademikong Filipino ay may mahalagang papel sa:</p>
                <ol>
                  <li>Pagpapaunlad ng intelektwal na diskurso sa Filipino</li>
                  <li>Pagpapanatili at pagpapayaman ng wikang pambansa</li>
                  <li>Pagbuo ng mga pananaliksik at akademikong materyal</li>
                  <li>Paghubog ng mga iskolar at mananaliksik</li>
                </ol>

                <h3>Mga Modyul sa Kursong Ito</h3>
                <p>Ang kurso ay nahahati sa limang mahahalagang modyul:</p>
                <ol>
                  <li><strong>Modyul 1: Introduksyon sa Akademikong Filipino</strong> - Pangunahing konsepto at kahalagahan</li>
                  <li><strong>Modyul 2: Mga Uri ng Akademikong Sulatin</strong> - Pagsusuri at pagsulat ng iba't ibang akademikong papel</li>
                  <li><strong>Modyul 3: Akademikong Presentasyon</strong> - Mga kasanayan sa pagprepresenta ng pananaliksik</li>
                  <li><strong>Modyul 4: Akademikong Pakikipag-ugnayan</strong> - Pormal na komunikasyon sa akademikong konteksto</li>
                  <li><strong>Modyul 5: Akademikong Pagsusuri</strong> - Kritikal na pagsusuri at ebalwasyon</li>
                </ol>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="akademiko-container">
      <Header />
      
      <div className="main-content">
        <div className="title-section">
          <h1>KOMUNIKASYON SA AKADEMIKONG FILIPINO</h1>
          <p className="subtitle">Mga Kasanayan sa Akademikong Pagsulat at Presentasyon</p>
          
          <div className="module-selector">
            <select 
              className="module-dropdown"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option value="">Pumili ng Modyul</option>
              <option value="1">Modyul 1: Introduksyon sa Akademikong Filipino</option>
              <option value="2">Modyul 2: Mga Uri ng Akademikong Sulatin</option>
              <option value="3">Modyul 3: Akademikong Presentasyon</option>
              <option value="4">Modyul 4: Akademikong Pakikipag-ugnayan</option>
              <option value="5">Modyul 5: Akademikong Pagsusuri</option>
            </select>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default Akademiko; 