import React, { useState } from 'react';
import './Sining.css';
import Header from '../components/Header';

// Content components for each Aralin
const Aralin1Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 1: Panimula</h2>
      <div className="text-content">
        <p>
            <b>
              <i style={{ fontStyle: "italic" }}>Alpabetong Filipino </i>
            </b> 
              ay ang kasalukuyang alpabeto na ginagamit sa wikang Filipino, na binubuo ng 28 na titik. Ito ay resulta ng pagsasanib ng makalumang abakada at ng alpabetong Ingles upang makapag-akomodate ng mga tunog mula sa iba't ibang wika sa Pilipinas at mga banyagang salita.
          </p>
            <ul>
            <li><b>Mga Titik sa Alpabetong Filipino</b></li>
            <p style={{ paddingLeft: '20px', fontStyle: 'italic' }}>
              A B C D E F G H I J K L M N Ñ Ng O P Q R S T U V W X Y Z
            </p>
          </ul>
        
          <p>
            <b>
              <i style={{ fontStyle: "italic" }}>Mga Tuntunin sa Pagbabaybay </i>
            </b> 
            ay mga gabay sa tamang pagsulat ng mga salita sa wikang Filipino, lalo na sa pagbaybay ng mga hiram na salita. Ang mga patnubay na ito ay naglalayong magkaroon ng uniformidad at pagkakaintindihan sa paggamit ng wika. Narito ang ilan sa mahahalagang tuntunin sa pagbabaybay sa Filipino:
          </p>
        <ol>
        <h2><b>1. Mga Grapema</b></h2>
          <p> Ito ay binubuo ng:</p>
          <ol type="a">
            <li>Letra. Binubuo ng dalawampu’t walong (28) letra.</li>
            <li>Hindi Letra.
              <ul>
                <li>paiwa (‘) at pakupya (^) na sumisimbolo sa impit na tunog (‘)</li>
                <li>tuldik na pahilis (‘) na sumisimbolo sa diin o haba.</li>
                <li>Bantas, gaya ng tuldol (.), pananong (?), padamdam (!), at gitling (-).</li>
              </ul>
            </li>
          </ol>
        <h2><b>2. Mga Tuntuning Panlahat sa Pagbaybay</b></h2>
          <ol type="a">
            <li>Pasalitang Pagbaybay. Ang ibig sabihin ay isa-isang pagbigkas sa maayos na pagkakasunod-sunod ng mga letrang bumubuo sa isang salita, pantig, akronim, daglat, inisyal, simbolong pang-agam, at iba pa.</li>
            <ul>
              <li><span className="italic-text">Akronim</span></li>
              <p>ASEAN (Association of Southeast Asian Nation) /ey-es-i-ey-en/</p>
              <p>ARMM (Autonomous Region of Muslim Mindanao) /ey-ar-em-em/</p>

              <li><span className="italic-text">Daglat</span></li>
              <p>Dra. (Doktora) /kapital di-ar-ey/</p>
              <p>Bb. (Binibini) /kapital bi-bi/</p>

              <li><span className="italic-text">Inisyal ng Tao</span></li>
              <p>LKS (Lope K. Santos) /el-key-as/</p>
              <p>CPR (Carlos P. Romulo) /si-pi-ar/</p>

              <li><span className="italic-text">Inisyal ng Samahan</span></li>
              <p>KWF (Komisyon sa Wikang Filipino) /key-dobolyu-ef/</p>
              <p>UP (Unibersidad ng Pilipinas) /yu-pi/</p>

              <li><span className="italic-text">Simbolong Pang-agham/Pangmatematika</span></li>
              <p>lb. (pound) /el-bi/</p>
              <p>kg. (kilogram) /key-ji/</p>
            </ul>

              <li>Pasulat na Pagbaybay</li>
              <ul>
                  <li>Panatilihin ang orihinal na anyo ng mga salitang mula sa katutubong wika sa Pilipinas.</li>
                  <p>“butanding” (Bicol) – sa halip ng whale shark</p>
                  <li>Sa pagbaybay ng mga hiram na salita mula sa mga banyagang wika, panatilihin ang original nitong anyo.</li>
                  <p>pizza pie	bouquet</p>
                  <li>Sa pagbaybay ng mga salitang mula sa Espanyol, baybayin ito ayon sa ABAKADA.</li>
                  <p>familia		-	pamilya</p>
                  <p>cheque		-	tseke</p>
                  <li>Sa pag-uulit ng salitang-ugat na nagtatapos sa pantig na e hindi ito pinapalitan ang letrang i. Kinakabitan ng pang-ugnay/linker (-ng) at ginagamitan ng gitling sa pagitan ng salitang-ugat.</li>
                  <p>libre		-	libreng-libre</p>
                  <p>suwerte		-	suwerteng-suwerte</p>
                  <li>Sa pag-uulit ng salitang-ugat na nagtatapos sa pantig na o hindi ito pinapalitan ang letrang u. Ginagamitan ng gitling sa pagitan ng salitang-ugat.</li>
                  <p>bato		-	bato-bato</p>
                  <p>piso		-	piso-piso</p>
                  <li>Kapag hinuhulapian ang huling pantig ng salitang-ugat na nagtatapos sa e, ito ay nagiging i at ang o ay u.</li>
                  <p>ataki		-	atakihin</p>
                  <p>salbahe		-	salbahihin</p>
                  <li>Makabuluhan ang tunog na e at o kapag inihambingan ng mga hiram na salita sa mga katutubo o hiram na salita.</li>
                  <p>mesa		-	misa</p>
                  <p>uso		-	oso</p>
              </ul>
          </ol>
          <h2><b>3. Ang Paghihiram</b></h2>
          <ol type="a">
            <li><i>Tumbasan ng kasulukuyang leksikon sa Filipino ang mga salitang hiram o banyaga.</i></li>
              <p>rule	-	tuntunin</p>
            <li><i>Gamitin ang natatanging mga salita mula sa mga katutubong wika sa Pilipinas at panatilihin ang orihinal na baybay.</i></li>
              <p>“imam” (Tausug)	-	tawag sa paring Muslim</p>
            <li><i>Mga Salitang Hiram sa Espanol</i></li>
              <ul>
                  <li>Baybayin ang salita ayon sa ABAKADA</li>
                  <p>telefono	-	telepono</p>
                  <li>Sa mga salitang hiram sa Espanol na may e, panatilihin ang e.</li>
                  <p>estudyante	-	hindi istudyante</p>
                  <li>Sa mga salitang hiram sa Espanol na may o, panatilihin ang o.</li>
                  <p>opisina	-	hindi upisina</p>
              </ul>
          </ol>
         </ol>
      </div>
    </div>
  </div>
);

const Aralin2Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 2: Ang Komunikasyon</h2>
      <div className="text-content">
        <p>Ang <i><b>komunikasyon</b></i> ay ang proseso ng pagpapahayag ng kaisipan, impormasyon, at damdamin sa paraang berbal at di-berbal. Mahalaga ito sa sining ng pakikipagtalastasan sapagkat ito ang pundasyon ng lahat ng anyo ng interaksyon sa lipunan.</p>
        <ol>
          <li><b>Mga Uri mg Komunikasyon</b>
            <ol>
              <li>Komunikasyong Berbal - Ang paggamit ng wika sa pasalita at pasulat na anyo.</li>
              <li>Komunikasyong Di-Berbal - Ang pagpapahayag ng mensahe sa pamamagitan ng kilos, ekspresyon ng mukha, at kumpas ng kamay.</li>
            </ol>
          </li>
          <li>Mga Uri ng Prosesong Pangkomunikasyon:
            <ol>
              <li><i>Intrapersonal</i> - uri ng komunikasyong tinatawag na pansarili lamang sapagkat ito ay nagaganap sa mga sandali ng pagmumuni-muni o pagninilay-nilay. Nagaganap ang komunikasyon sa isipan ng tao. Ang utak ay pinoproseso, binibigyang interpretasyon at sinusuri ang mga impormasyong natanggap.</li>
              <li><i>Interpersonal</i> - nagaganap ito sa pagitan ng dalawang tao o pakikipag-usap ng isang tao sa isang mallit na pangkat. Nakikipag-ugnayan o nakikisalamuha tayo sa komunikasyong interpersonal dahil kailangan nating maipahayag at matanggap ang pangangailangan nating personal.</li>
              <li><i>Pampubliko</i> - ito sa pagitan ng isang tao at malalaking pangkat ng mga tao. Pinapanatili nito ang relasyong pampubliko.</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin3Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 3: Ang Wika</h2>
      <div className="text-content">

      <ol>
          <li><b>Antas ng Wika:</b>
            <ol>
              <li><i>Pormal</i> - ito'y antas ng wika na istandard at kinikilala/ ginagamit ng nakakarami.</li>
                <ul>
                  <li>Pambansa</li>
                  <li>Pampanitikan 2</li>
                </ul>
              <li><i>Impormal</i> - antas ng wika na karaniwan, palasak, pang-araw-araw, madalas gamitin sa pakikipag-usap at pakikipagtalastasan.</li>
                <ul>
                    <li>Lalawigan</li>
                    <li>Kolokyal</li>
                    <li>Balbal</li>
                    <li>Salitang Pang-LinguaFranca</li>
                </ul>
            </ol>
          </li>
          <li><b> Paraan ng Pagpapahayag</b>
            <ol>
              <li><i>Paglalahad</i> - ay isang uri ng pagpapahayag na ang hangarin nito ay magpaliwanag. Sinasagot ito ng katanungang "bakit".</li>
              <li><i>Paglalarawan</i> - ay isang uri ng pagpapahayag na ang layunin ay maipamalas sa kausap o mambabasa ang katangian, kulay, hugis, anyo at sukat ng isang bagay na nagsasaad ng kaibahan sa mga kauri nito.</li>
                <ol type="i">
                  <li>Karaniwang paglalarawan </li>
                  <li>Masining na paglalarawan </li>
                </ol>
              <li><i>Pagsasalaysay</i> - ay isang uri ng pagpapahayag na ang hangarin ay mag-ulat ng mga pangyayari sa isang maayos na pagkakahanay. Ito ay tinutugunan ang mga tanong na sino, saan, kailan, at ano.</li>
              <li><i>Pangangatwiran</i> - ay isang uri ng pagpapahayag na ang hangarin ay makaakit sa mga sarili at magbigay dahilan sa mga bagay. Ito ay isang paraan ng pagdepensa sa sarili.</li>
              <ol type="i">
                  <li>Pangangatwirang Pabuo (inductive reasoning)</li>
                </ol>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin4Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 4: Ang Masining na Pagbabasa, Pakikinig at Pag-unawa</h2>
      <div className="text-content">
        <p>Ang <i><b>masining na pagbasa, pakikinig, at pag-unawa</b></i> ay mahahalagang kasanayan sa sining ng pakikipagtalastasan. Ang mga ito ay tumutulong hindi lamang sa pagkakaroon ng mas epektibong komunikasyon, kundi sa pagpapalalim din ng pag-intindi at pagpapahayag ng damdamin at ideya. Sa bawat kasanayan, mayroong mga teknik na makakatulong upang mapabuti ang ating abilidad sa pag-unawa at pakikipag-ugnayan sa iba.</p>

        <ol type="1">
          <li><i>Pagbigkas</i> - ay ang sining ng pagpapahayag sa pamamagitan ng mahusay at damdaming pagbigkas ng mga salita. Ginagamit dito ang tamang boses, tono, damdamin, at kilos upang epektibong maiparating ang mensahe. Ang masining na pagbigkas ay maaaring gamitin sa mga tula, kwento, at iba pang anyo ng panitikan.</li>
          <li><i>Ponolohiya</i> - ay pag-aaral ng mga tunog o ponema, naginagamit sa pagbuo ng mga salita ng isang partikular na wika attunog na ginagamit sa pagsasalita.</li>
          <li><i>Tula</i> - ay isang anyo ng panitikang nagpapahayag ng damdamin at kaisipan sa masining na anyo. Ang tula ay nagtataglay ng sukat, tugma, at talinghaga na nagbibigay-lalim at kabuluhan sa nilalaman nito. Ang mga tula ay maaaring tungkol sa pag-ibig, kalikasan, bayan, o anumang aspeto ng buhay.</li>
          <li><i>Balagtasan</i> - ay isang uri ng debate o pagtatalo sa anyong patula na nagmula sa Pilipinas. Sa balagtasan, dalawang magkatunggaling panig ang nagtatagisan ng kanilang mga argumento sa isang paksang napapanahon o mahalaga sa lipunan. Ang pangalan nito ay hango kay Francisco Balagtas, ang kilalang makata at may-akda ng "Florante at Laura."</li>
          <li><i>Talumpati</i> - ay isang pormal na pagpapahayag ng ideya o saloobin sa isang isyu. Layunin nito ang magbigay-impormasyon, manghikayat, o magbigay-inspirasyon sa mga tagapakinig. Ang talumpati ay maaaring basahin, i-memorize, o bigkasin nang malaya, at ginagamit sa mga pormal na okasyon, pagpupulong, at mga kaganapang pampubliko.</li>
        </ol>
      </div>
    </div>
  </div>
);

const Aralin5Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 5: Ang Masining na Pagsasalita</h2>
      <div className="text-content">
        <p>Ang <i><b>masining na pagsasalita</b></i> ay isang mahalagang kasanayan na hindi lamang nakatutok sa pagpapahayag ng mga ideya kundi sa pagbuo ng makulay at epektibong komunikasyon. Sa pamamagitan ng tamang pagbigkas, ekspresyon, at organisasyon ng mga ideya, ang masining na pagsasalita ay nakakatulong sa pagpapahayag ng mensahe nang malinaw at kaakit-akit. Ang pagiging mahusay sa masining na pagsasalita ay hindi lamang nakabatay sa kasamaang wika kundi sa pag-unawa sa tagapakinig, kaya't mahalaga ang patuloy na pagsasanay at pagpapabuti sa larangang ito.</p>
        
        <ol>
          <li><b>Mga Sangkap ng Masining na Pagsasalita:</b>
            <ol>
              <li>Kagandahan</li>
              <li>Kawastuhan</li>
            </ol>
            <p>Dahil dito and retorika at balarila ay hindi na maaring paghiwalayin.</p>
            <p><b>Retorika</b> – ang sumasaklaw sa kagandahan</p>
            <p><b>Balarila</b> – ang sumasaklaw sa kawastuhan</p>
          </li>
          <li><b>Mga Masining na Pagsasalita sa Iba’t Ibang Pagkakataon:</b>
            <ol>
              <li>Ang pakikipag-usap sa dalawahan</li>
              <li>Ang pakikipanayam o interbyu (pangkaalaman at panghanapbuhay)</li>
              <li>Ang pakikipag-usap sa telepono</li>
            </ol>
          </li>
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
                <p>Ang <i><b>Sining ng Pakikipagtalastasan</b></i> ay ang masining at epektibong paraan ng pagpapahayag ng damdamin, ideya, kaalaman, at mensahe sa pamamagitan ng salita, kilos, o iba pang anyo ng komunikasyon. Sa wikang Filipino, ito ay isang mahalagang aspeto ng kultura at edukasyon dahil tumutulong ito sa pagbuo ng koneksyon, pag-unawa, at pakikisalamuha sa iba.</p>
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
              <option value="1">Aralin 1: Panimula</option>
              <option value="2">Aralin 2: Ang Komunikasyon</option>
              <option value="3">Aralin 3: Ang Wika</option>
              <option value="4">Aralin 4: Ang Masining na Pagbabasa, Pakikinig at Pag-unawa</option>
              <option value="5">Aralin 5: Ang Masining na Pagsasalita</option>
            </select>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default Sining;
