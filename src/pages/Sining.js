import React, { useState } from 'react';
import './Sining.css';
import Header from '../components/Header';

// Content components for each Aralin
const Aralin1Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 1: Introduksyon sa Komunikasyon</h2>
      <div className="text-content">
        <p>Ang komunikasyon ay isang mahalagang bahagi ng ating pang-araw-araw na buhay. Ito ay ang proseso ng pagpapalitan ng kaalaman, ideya, damdamin, at kaisipan sa pagitan ng dalawa o higit pang tao. Sa pamamagitan ng komunikasyon, nabubuo ang ugnayan at pag-unawaan sa pagitan ng mga tao.</p>

        <h3>Kahulugan ng Komunikasyon</h3>
        <p>Ang komunikasyon ay isang dinamikong proseso na kinabibilangan ng pagpapahayag at pagtanggap ng mensahe. Ito ay maaaring verbal o di-verbal, nakasulat o pasalita, at maaaring gawin sa iba't ibang paraan at plataporma.</p>
        
        <blockquote>
          "Ang komunikasyon ay hindi lamang tungkol sa pagsasalita, kundi tungkol din sa pakikinig at pag-unawa."
        </blockquote>

        <h3>Mga Elemento ng Komunikasyon</h3>
        <ul>
          <li><strong>Tagapagpadala (Sender)</strong> - Ang pinagmumulan ng mensahe o impormasyon</li>
          <li><strong>Mensahe (Message)</strong> - Ang nilalaman ng komunikasyon</li>
          <li><strong>Daluyan (Channel)</strong> - Ang paraan ng paghahatid ng mensahe</li>
          <li><strong>Tagatanggap (Receiver)</strong> - Ang tumatanggap ng mensahe</li>
          <li><strong>Feedback</strong> - Ang tugon o reaksyon sa mensahe</li>
        </ul>

        <h3>Layunin ng Komunikasyon</h3>
        <p>Ang komunikasyon ay may iba't ibang layunin na nakatutulong sa ating pang-araw-araw na pamumuhay:</p>
        <ul>
          <li>Pagbabahagi ng impormasyon at kaalaman</li>
          <li>Pagpapahayag ng damdamin at emosyon</li>
          <li>Pagkakaroon ng impluwensya sa iba</li>
          <li>Pagbuo ng relasyon at ugnayan</li>
        </ul>

        <h3>Kahalagahan sa Lipunan</h3>
        <p>Sa ating lipunan, ang komunikasyon ay nagsisilbing pundasyon ng mga sumusunod:</p>
        <ol>
          <li>Pagbuo ng mga relasyon at pakikipag-ugnayan</li>
          <li>Pagpapanatili ng kultura at tradisyon</li>
          <li>Pag-unlad ng lipunan at ekonomiya</li>
          <li>Paglutas ng mga suliranin at hindi pagkakaunawaan</li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin2Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 2: Verbal na Komunikasyon</h2>
      <div className="text-content">
        <p>Ang verbal na komunikasyon ay ang paggamit ng mga salita at wika sa pagpapahayag ng ating mga ideya, damdamin, at kaisipan. Ito ang pinaka-karaniwang paraan ng pakikipag-ugnayan sa ating lipunan.</p>

        <h3>Pasalitang Komunikasyon</h3>
        <p>Ang pasalitang komunikasyon ay ang direktang paggamit ng mga salita sa pamamagitan ng pagsasalita. Ito ay may mga sumusunod na anyo:</p>
        <ul>
          <li><strong>Talumpati</strong> - Pormal na paghahatid ng mensahe sa harap ng maraming tao</li>
          <li><strong>Panayam</strong> - Pakikipag-usap sa layuning makalikom ng impormasyon</li>
          <li><strong>Usapan</strong> - Impormal na palitan ng mga ideya at saloobin</li>
          <li><strong>Pagtatanong</strong> - Paghingi ng impormasyon o paglilinaw</li>
        </ul>

        <blockquote>
          "Ang maayos na pagsasalita ay susi sa malinaw na komunikasyon at mabisang pakikipag-ugnayan."
        </blockquote>

        <h3>Pasulat na Komunikasyon</h3>
        <p>Ang pasulat na komunikasyon ay ang pagpapahayag ng mga ideya sa pamamagitan ng nakasulat na mga salita. Kabilang dito ang:</p>
        <ul>
          <li><strong>Liham</strong> - Pormal o impormal na pakikipag-ugnayan sa pamamagitan ng sulat</li>
          <li><strong>Sanaysay</strong> - Masinop na paglalahad ng mga ideya at pananaw</li>
          <li><strong>Ulat</strong> - Sistematikong paglalahad ng impormasyon o pananaliksik</li>
          <li><strong>Digital na Mensahe</strong> - Modernong paraan ng nakasulat na komunikasyon</li>
        </ul>

        <h3>Kahalagahan ng Verbal na Komunikasyon</h3>
        <p>Ang verbal na komunikasyon ay mahalaga sa mga sumusunod na aspeto:</p>
        <ol>
          <li>Malinaw na pagpaparating ng mensahe</li>
          <li>Pagbuo ng mga relasyon at ugnayan</li>
          <li>Pag-unlad ng akademiko at propesyonal na buhay</li>
          <li>Pagpapanatili ng kultura at tradisyon</li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin3Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 3: Di-Verbal na Komunikasyon</h2>
      <div className="text-content">
        <p>Ang di-verbal na komunikasyon ay ang pagpapahayag ng mensahe nang walang paggamit ng mga salita. Ito ay kasing halaga ng verbal na komunikasyon sa pagpaparating ng ating mga nais ipahayag.</p>

        <h3>Kilos ng Katawan (Body Language)</h3>
        <p>Ang kilos ng katawan ay makapangyarihang paraan ng pagpapahayag ng ating saloobin at damdamin:</p>
        <ul>
          <li><strong>Galaw ng Kamay</strong> - Pagpapakita ng direksyon, pagbibigay-diin, o pagpapahayag ng emosyon</li>
          <li><strong>Postura</strong> - Nagpapakita ng kumpiyansa, interes, o kawalan ng interes</li>
          <li><strong>Kilos ng Ulo</strong> - Pagtango para sa pagsang-ayon o pag-iling para sa pagtanggi</li>
        </ul>

        <blockquote>
          "Ang katawan ay nagsasalita ng sarili nitong wika, at madalas ito ay mas matapat kaysa sa mga salitang binibitawan."
        </blockquote>

        <h3>Ekspresyon ng Mukha</h3>
        <p>Ang mukha ay isa sa pinakamahalagang instrumento ng di-verbal na komunikasyon:</p>
        <ul>
          <li><strong>Ngiti</strong> - Pagpapakita ng kasiyahan, pagtanggap, o pagbati</li>
          <li><strong>Kunot-noo</strong> - Pagpapahayag ng pagkalito o pagkabalisa</li>
          <li><strong>Pagtaas ng Kilay</strong> - Pagtatanong, pagkagulat, o pagdududa</li>
        </ul>

        <h3>Iba Pang Uri ng Di-Verbal na Komunikasyon</h3>
        <ol>
          <li>Distansya at Espasyo (Proxemics)</li>
          <li>Tono ng Boses (Paralanguage)</li>
          <li>Pananamit at Itsura</li>
          <li>Paggamit ng Oras (Chronemics)</li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin4Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 4: Kultural na Komunikasyon</h2>
      <div className="text-content">
        <p>Ang kultural na komunikasyon ay ang paraan ng pakikipag-ugnayan na nakabatay sa mga kaugalian, tradisyon, at pagpapahalaga ng isang lipunan. Sa Pilipinas, ito ay may malalim na ugat sa ating kasaysayan at kultura.</p>

        <h3>Tradisyonal na Pagbati at Paggalang</h3>
        <p>Ang mga Pilipino ay kilala sa kanilang magalang na pakikitungo:</p>
        <ul>
          <li><strong>Pagmamano</strong> - Pagpapakita ng paggalang sa nakatatanda</li>
          <li><strong>Paggamit ng Po at Opo</strong> - Berbal na pagpapakita ng respeto</li>
          <li><strong>Beso-beso</strong> - Tradisyonal na pagbati sa mga kaibigan at kamag-anak</li>
        </ul>

        <blockquote>
          "Ang kulturang Pilipino ay nakaugat sa pagpapahalaga sa kapwa at pagrespeto sa nakatatanda."
        </blockquote>

        <h3>Kultural na Pagpapahalaga</h3>
        <p>Ang ating kultura ay mayaman sa mga pagpapahalagang nagbibigay-hugis sa ating pakikipag-ugnayan:</p>
        <ul>
          <li><strong>Paggalang sa Nakatatanda</strong> - Pagkilala sa karunungan at karanasan</li>
          <li><strong>Bayanihan</strong> - Diwa ng pagtulong at pagtutulungan</li>
          <li><strong>Pakikisama</strong> - Kakayahang makibagay at makisama sa kapwa</li>
        </ul>

        <h3>Impluwensya ng Kultura sa Komunikasyon</h3>
        <ol>
          <li>Pagbuo ng mga salitang may kulturang kahulugan</li>
          <li>Paraan ng pagpapahayag ng damdamin</li>
          <li>Pamamaraan ng paglutas ng hindi pagkakaunawaan</li>
          <li>Sistema ng pagpapahalaga sa relasyon</li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin5Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 5: Makabagong Komunikasyon</h2>
      <div className="text-content">
        <p>Ang makabagong komunikasyon ay tumutukoy sa mga bagong paraan ng pakikipag-ugnayan na dulot ng teknolohiya. Sa digital na panahon, nagbago at lumawak ang ating mga paraan ng pakikipagtalastasan.</p>

        <h3>Digital na Komunikasyon</h3>
        <p>Ang teknolohiya ay nagdala ng mga bagong platform para sa komunikasyon:</p>
        <ul>
          <li><strong>Social Media</strong> - Platform para sa pagbabahagi at pakikipag-ugnayan</li>
          <li><strong>Email</strong> - Pormal na digital na komunikasyon</li>
          <li><strong>Video Conferencing</strong> - Virtual na pakikipag-usap at pagpupulong</li>
          <li><strong>Instant Messaging</strong> - Mabilis na pagpapalitan ng mensahe</li>
        </ul>

        <blockquote>
          "Ang teknolohiya ay nagbigay ng bagong dimensyon sa paraan ng ating pakikipag-ugnayan."
        </blockquote>

        <h3>Mga Hamon sa Digital na Komunikasyon</h3>
        <p>Kasama sa pag-unlad ng teknolohiya ang mga bagong hamon:</p>
        <ul>
          <li><strong>Digital Etiquette</strong> - Tamang asal sa online na pakikipag-ugnayan</li>
          <li><strong>Privacy at Security</strong> - Proteksyon ng personal na impormasyon</li>
          <li><strong>Information Overload</strong> - Labis na dami ng impormasyon</li>
        </ul>

        <h3>Epekto sa Lipunan</h3>
        <ol>
          <li>Pagbabago ng tradisyonal na paraan ng komunikasyon</li>
          <li>Mas mabilis na pagkalat ng impormasyon</li>
          <li>Pagbuo ng virtual na komunidad</li>
          <li>Hamon sa personal na pakikipag-ugnayan</li>
        </ol>
      </div>
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
            <div className="text-section highlight">
              <h2>Introduksyon sa Sining ng Pakikipagtalastasan</h2>
              <div className="text-content">
                <p>Ang Sining ng Pakikipagtalastasan ay ang masining at epektibong paraan ng pagpapahayag ng damdamin, ideya, kaalaman, at mensahe sa pamamagitan ng salita, kilos, o iba pang anyo ng komunikasyon. Sa wikang Filipino, ito ay isang mahalagang aspeto ng kultura at edukasyon dahil tumutulong ito sa pagbuo ng koneksyon, pag-unawa, at pakikisalamuha sa iba.</p>

                <blockquote>
                  "Ang tunay na sining ng pakikipagtalastasan ay hindi lamang nasa kung ano ang sinasabi, kundi nasa kung paano ito sinasabi at kung paano ito nauunawaan ng iba."
                </blockquote>

                <h3>Ang Kalikasan ng Pakikipagtalastasan</h3>
                <p>Ang pakikipagtalastasan ay isang komplikadong proseso na may iba't ibang dimensyon:</p>
                <ul>
                  <li><strong>Pagpapahayag ng Sarili</strong> - Ang kakayahang ipahayag nang malinaw ang ating mga ideya, damdamin, at pananaw</li>
                  <li><strong>Pakikinig at Pag-unawa</strong> - Ang kakayahang maintindihan at bigyang-halaga ang mensahe ng iba</li>
                  <li><strong>Kulturang Konteksto</strong> - Ang pagsasaalang-alang sa mga kaugalian at pagpapahalaga ng lipunan</li>
                  <li><strong>Dinamikong Proseso</strong> - Ang patuloy na pag-aangkop sa iba't ibang sitwasyon at pangangailangan</li>
                </ul>

                <h3>Mga Pangunahing Elemento</h3>
                <p>Ang epektibong pakikipagtalastasan ay binubuo ng mga sumusunod na elemento:</p>
                <ol>
                  <li><strong>Malinaw na Mensahe</strong> - Ang nilalaman ng komunikasyon ay dapat malinaw at angkop sa tagapakinig</li>
                  <li><strong>Angkop na Paraan</strong> - Ang pagpili ng tamang pamamaraan ng pagpapahayag</li>
                  <li><strong>Wastong Konteksto</strong> - Ang pagsasaalang-alang sa sitwasyon at kapaligiran</li>
                  <li><strong>Aktibong Pakikinig</strong> - Ang tunay na pag-unawa sa mensahe ng kausap</li>
                </ol>

                <h3>Kahalagahan sa Lipunang Filipino</h3>
                <p>Sa ating lipunan, ang sining ng pakikipagtalastasan ay may mga sumusunod na papel:</p>
                <ul>
                  <li><strong>Pagpapanatili ng Kultura</strong> - Nagsisilbing tulay sa pagpapasa ng ating mga kaugalian at pagpapahalaga sa susunod na henerasyon</li>
                  <li><strong>Pagpapaunlad ng Lipunan</strong> - Nakatutulong sa maayos na ugnayan at kolaborasyon sa pagitan ng mga mamamayan</li>
                  <li><strong>Pagpapayaman ng Wika</strong> - Nagbibigay-daan sa patuloy na pag-unlad at pagyaman ng wikang Filipino</li>
                  <li><strong>Pagbuo ng Pagkakaisa</strong> - Nagtataguyod ng mas malalim na pag-unawaan at pagkakaisa sa mga Filipino</li>
                </ul>

                <h3>Mga Hamon sa Makabagong Panahon</h3>
                <p>Sa kasalukuyang digital na era, ang sining ng pakikipagtalastasan ay nahaharap sa mga bagong hamon:</p>
                <ul>
                  <li><strong>Digital na Komunikasyon</strong> - Ang pag-angkop sa mga bagong teknolohiya at platform</li>
                  <li><strong>Cross-Cultural Communication</strong> - Ang pakikipag-ugnayan sa iba't ibang kultura at komunidad</li>
                  <li><strong>Information Overload</strong> - Ang paghahanda sa dami ng impormasyon sa digital na panahon</li>
                  <li><strong>Authenticity</strong> - Ang pagpapanatili ng tunay at makabuluhang komunikasyon</li>
                </ul>

                <blockquote>
                  "Sa mundo ng mabilis na pagbabago, ang kakayahang makipag-ugnayan nang epektibo ay nananatiling mahalagang kasanayan para sa tagumpay at pag-unlad."
                </blockquote>

                <h3>Mga Aralin sa Kursong Ito</h3>
                <p>Upang mas maunawaan ang sining ng pakikipagtalastasan, ang kursong ito ay nahahati sa limang mahahalagang aralin:</p>
                <ol>
                  <li><strong>Aralin 1: Introduksyon sa Komunikasyon</strong> - Pag-aaral ng mga pangunahing konsepto at elemento ng komunikasyon</li>
                  <li><strong>Aralin 2: Verbal na Komunikasyon</strong> - Pagsusuri sa iba't ibang anyo ng pasalita at pasulat na komunikasyon</li>
                  <li><strong>Aralin 3: Di-Verbal na Komunikasyon</strong> - Pag-unawa sa kahalagahan ng body language at iba pang di-verbal na paraan</li>
                  <li><strong>Aralin 4: Kultural na Komunikasyon</strong> - Pagtuklas sa papel ng kultura sa ating pakikipag-ugnayan</li>
                  <li><strong>Aralin 5: Makabagong Komunikasyon</strong> - Pag-aaral ng mga bagong paraan ng komunikasyon sa digital na panahon</li>
                </ol>
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
