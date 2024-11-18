import React, { useState } from 'react';
import './Pagbasa.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Content components for each module
const Module1Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 1: PAGBASA SA IBA’T IBANG DISCIPLINA</h2>
      <div className="text-content">

        <h2>Kahulugan at Kahalagan</h2>
        <ol type="i">
          <li>Ang pagbasa ay interpretasyon ng mga nakalimbag na simbolo ng kaisipan. Pagpapakahulugan ito ng mga nakatitik na sagisag ng mga kaisipan.</li>
          <li>Ang pagbasa ay pagtanggap ng mga mensahe sa pamamagitan ng pagtugon ng damdamin at kaisipan sa mga titik at simbolong nakalimbag sa pahina.</li>
          <li>Ang pagbabasa ay susi sa malawak na karunungan natipon ng daigdig sa mahabang panahon.</li>
          <li>Ayon kay Arrogante, ang pagbabasa ay nakapagpapalawak ng panapaw at paniniwala sa buhay, nakapagpapatatag sa tao na harapin ang mga di-inaasahang suliranin sa buhay. </li>
          <li>Ang pagbasa ay nakapagpapataas ng uri ng panlasa sa mga babasahin.</li>
          <li>Ayon kay Thorndike, ang pagbasa ay hindi pagbibigay tanong lamang sa mga salitang binabasa kundi pangangatwiran at pag-lisip. </li>
          <li>Ayon kay Toze, ang pagbasa ay nagbibigay ng impormasyon na nagiging daan sa kabatiran at krunungan. Ito'y isang aliwan, kasiyahan, pakikipagsapalaran, paglutas sa mga suliranin at nakapagdudulot ng iba't ibang karanasan sa buhay.</li>
        </ol>

        <h2>Bumabasa ang tao dahil sa iba't ibang kadahilanan:</h2>
        <ul>
          <li>May nagbabasa upang kumuha ng dagdag kaalaman o karunungan.</li>
          <li>May nagbabasa dahil gusto niyang malaman ang nangyayari sa paligid, ayaw niyang mapag-iwanan ng takbo ng panahon.</li>
          <li>May nagbabasa upang maaliw o malibang, mabawasan ang pagkainip at pagkabagot na nararamdaman.</li>
        </ul>

        <h2>Teorya sa Pagbasa</h2>
        <ol type="1">
          <li><i>Teoryang Bottom up</i> - ang sentro ng pagbasa ay ang teksto na kailangan munang maunawaan ng mambabasa bago siya makapagbigay ng kaukulang reaksyon o interpretasyon. Sa madali, ang pag-unawa sa tekstong binabasa ay nagsisimula sa teksto (botto) patungo sa mambabasa (up). </li>
          <li><i>Teoryang Top Down</i> - ay kabaligtaran naman ng “Bottom Up”. Sinasabi rito na ang pag-unawa sa teksto ay nagsisimula sa mambabasa (Up) patungo sa teksto (Down). Ang mambabasa ay nagiging isang aktibong “stock knowledge” o mga naka imbak na kaalaman na bunga ng kanyang mga karanasan. Dahil sasinasabing stock knowledge ay mabilis na nakauugnay ang mga mambabasa sa teksto. Tinatawag din itong “inside out” sa kadahilanang inilabas ng mambabasa ang dating kaalaman maiugnay sa teksto.</li>
          <li><i>Teoryang Interaktib</i> – dito pumapasok ang kahalagahan ng kasabihang “Learning is two-way process”. Sa teoryangito, hindi monopoly ng mgamambabasa ang pag-unawa sa teksto, sa halip kinakailangan ang interaksyon o pakikipag-ugnayan ng mambabasa sa guro, magulang, kaklase at iba pa upangmatamo ang pag-unawasatekstongbinasa. Gamitin ang teoryang ito sa pagtuturo ng mga mahihirap na konsepto tulad ng “Values Formation”. Halimbawa’y pagkakaisa ang mensaheng, nais bigyang-diin ng teksto. Maaaringmagmungkahi ang guro ng isang “team building activity”, upang magkaroon ng direkta ng pag-unawa ang mga mag-aaral sa gawain.</li>
          <li><i>Teoryang Iskema</i> - tumutukoy ang teoryang ito sa kalayaan ng mambabasa na magbigay ng kahulugan sa teksto. Pinaniniwalaan sa teoryang ito na ang teksto ay walang taglay na kahulugan at sa halip ay nagsisilbi lamang “stimuli” sa mga mambabasa upang magbigay ng reaksyon. Ang iskema ay nangangahulugan ng pagtugon sa mga “stimuli” nasumasaklaw sa iba’t ibang pagkilos sa iba’t ibang sitwasyon.</li>
        </ol>

        <h2>Apat na Hakbang sa Pagbasa</h2>
        <ol type="1">
          <li><i>Pagkilala</i> – isang kakayahan sa pagbasa sa pagbigkas ng salita (pagbasa) at pag-unawa sa mga simbolong nakalimbag, pagkilala sa salita (word perception).</li>
          <li><i>Pag-unawa</i> (Comprehension) – ang pag-unawa o pag-alam  sa mga nais na ipahayag o ipaabot ng mga salita, pangungusap, talata o akda (pasulat at pasalita).</li>
          <li><i>Reaksyon</i> – ang kakayang humusga at magpasya ayon sa pang-unawa ng mambabasa. Ang puna ay naibibigay sa akdang binasa. </li>
          <li><i>Paglalagom</i> – kakayahang dapat taglayin ng isang mambabasa; may kakayahang pagsama-samahin ang mga dapat at di-tapat at pag-ugnay-ugnay ng mga tama at bagong kaalaman. May kakayahan ang mambabasa na ilarawan at ilahad ang isang akda sa maayos at maganang paraan.</li>
        </ol>

        <h2>Mga Uri ng Pagbasa</h2>
        <h3>Pagbasa Ayon sa Paraan:</h3>
        <ol>
          <li><b><i>Mabilisang pagbasa (Skimming)</i></b> - ang pinakamabilis na pagbasa na nakakaya ng isang tao. Nagtuturo ito sa mambabasa upang malaman ang pangkalahatang pananaw na matatagpuan sa mga aklat at iba pang nakalaimbag na babasahin. Tinatatawag din itong pinaraanang pagbasa at pinakamabilis na paraan ng pagbasa.
            <ul>
              <li>Pagtingin at pagbasa nang mabilisan sa kabuuang nilalaman ng isang aklat;</li>
              <li>Pagtingin at pagbasa ng mahahalagang datos na kailangan sa pananaliksik (key word);</li>
              <li>Pagkuha sa pangkalahatang impresyon sa nilalaman.</li>
            </ul>
          </li>
          <li><b><i>Pahapyaw Na Pagbasa (Scanning)</i></b> - tumutukoy sa paghahanap ng isang tiyak na impormasyon sa isang pahina. Ito ang uri ng pagbasa na hindi hinahangad na makuha ang kaisipan ng sumulat dahil sa mahalaga rito'y makita ang hinahanap sa madali at mabilis na paraan. Tulad ng paghahanap ng telepono sa direktoryo, paghahanap ng trabaho, mga paupahang establisemento (buy & sell), pagtingin sa resulta ng mga eksamen, numerong nanalo sa swipstiks, lotto atbp.</li>
          <li><b><i>Pagsusuring Pagbasa (Analytical Reading)</i></b> - nakasalalay sa mga materyales ang gawaing pagsusuri sa pagbasa. Ginagamit dito ng matalino at malalim na pag-lisip. Nahahasa rito ang kahusayan ng mag-aaral sa pamamagitan ng kanyang mapanuring pag-iisip.</li>
          <li><b><i>Pamumunang Pagbasa (Critical Reading)</i></b> - Dapat na matiyak ng mambabasa na naunawaan ang buong nilalaman ng akda. Sa pamumuna hindi lamang ang nilalaman ng akda ang binibigyan ng pansin. Kasama rito ang pagpuna mula sa pamagat, simula, katawan (nilalaman) at wakas ng akda. Binibigyan din ng pansin o puna ang istruktura ng mga pangungusap, ang mga ginamit na salita o istilo sa pagsulat ng may-akda. Tinitingnan din ang kalakasan at kahinaan ng paksa at may-akda.</li>
          <li><b><i>Tahimik Na Pagbasa (Silent Reading)</i></b> - mata lamang ang gumagalaw sa uri ng pagbasang ito, walang puwang dito ang paggamit ng bibig kaya walang tunog ng salita ang nalilikha ng bumabasa ng teksto.</li>
          <li><b><i>Pasalitang Pagbasa (Oral Reading)</i></b> - pagbasa ito sa teksto na inaangkupan ng wastong pagbigkas sa mga salita at sapat na lakas ng tinig upang sapat na marinig at maunawaan ng mga tagapakinig.</li>
          <li><b><i>Masinsinang Pagbasa</i></b> - hindi ito “undertime pressure” na pagbasa. Binibigyan dito ng guro ang mga mag-aaral ng sapat na panahon upang maisa-isang basahin at mapagtuunan ng pansin ang mga salitang bumubuo sa teksto. Pagpapabasa sa mag-aaral sa bahay ng isang teksto at sa pamamagitan ng kanyang nabasa ay ipalahad ang buod, aral at pananaw sa kanyang binasang aklat. Madadagdagan ang kanyang kaalaman sa pamamagitan ng ganitong pamamaraan.</li>
        </ol>
        

        <h2>A.	HULWARAN NG ORGANISASYON NG TEKSTO</h2>
        <p>Nalilinang sa hulwaran ng organisasyon ng teksto. Ang pagbibigay ng depinisyon, pag-iisa-isa, pagkasunod-sunod, paghahambing at pagkokontrast, problema at solusyon at sanhi at bunga.</p>
        <ol type="1">
          <li><b>Depinisyon</b></li>
          <p>Dalawang Dimensyon ng Depinisyon.</p>
          <ol type="1">
            <li><i>Denotasyon</i> – Dimensyon na karaniwang kahulugan dala ng diksyunaryo o salitang ginagamit sa pinakakaraniwan at simpleng pahayag.</li>
            <li><i>Konotasyon</i> – Dimensyon na di-tuwiran ang kahulugan. Nagkakaroon ng ikalawang kahulugan ang salita o pahayag. May mga paniniwala na sa dimensyong ito, pansariling kahulugan ng isang tao ang maaari ring ibigay.</li>
          </ol>
          <li><b>Pag-iisa-isa (Enumenasyon)</b></li>
          <p>Sa hulwarang ito, iniisa-isa ang mahahalagang konsepto ideya, mensahe at iba pa. Sa pag-iisa-isa tiyakin kung dapat na magkakasunod ayon sa inilalahad na aytem o maaari naming hindi magkakasunodsunod sapagkat walang prosesong dapat sundin, ang mahalaga kumpleto ang pinaiisa-isang aytem o bagay.</p>
          <p>Halimbawa: Isa-isahin ang katangian ng teksto</p>
            <li><b>Pagkasunod-sunod</b></li>
            <p>Mahalaga ang hulwarang ito sapagkat sa pamamagitan nito nabibigyan ng ebalwasyon ng isang mambabasa kung ano ang mga pangyayaring naganap sa isang kwento, dula, nobela, talambuhay at iba pa. May tatlong uri ng pagkasunod-sunod.</p>
            <ol typeof="1">
              <li><i>Sekwensyal</i> – karaniwang ginagamitan ng mga salitang una, pangalawa, pangatlo, susunod at iba pa. Karaniwang sekwensyal ang pagkasunod-sunod kung mgapangyayari ang pinagsunod sunod tulad sa mga kwento,talambuhay, balita at iba pa.</li>
              <p>Halimbawa: Sekwensyal ng Isang kwento.</p>
              <li><i>Kronolohikal</i> – uri ng pagkasunod-sunod ng mga impormasyon at mahalagang pangyayari ayon sa kung kailan nangyayari ang mga ito. Halimbawa ay ang kasaysayan ng isang bansa o mahahalagang pangyayari sa mundo. Karaniwang may petsa gaya ng tiyak na araw at taon upang malaman kung kalian nangyayari ang kasaysayan.</li>
              <p>Halimbawa: Mgapananakop ng Dayuhan sa Pilipinas</p>
              <li><i>Prosejural</i> – uri ng hulwaran ng organisasyon ng tekstona may pagkasunod-sunod ng mga hakbang o proseso ng isasagawa. Maaarin gpagkasunod-sunurin kung paano gawin ang isang bagay, pagluluto at pagsunod sa dimensyon ng isang pagsusulit o direksyon kung paano puntahan ang isang lugar.</li>
            </ol>
            <li><b>Paghahambing at Pagkokontrast</b></li>
            <p>Sa hulwarang ito, kinakailangan ang maingat na pagbasa sa teksto upan gganap na magkaroon ng konsentrasyon o pag-unawa. Ipinakikita sa hulwarang ito ang kahigitan o kaugnayan ng isang bagay sa iba pagkakatulad at ganap na pagkakaiba.</p>
            <p>Halimbawa: Venn diagram</p>
            <li><b>Problema at Solusyon</b></li>
            <p>Karaniwang na ang problema sa isang tao na ang kasunod ay ang pagbibigay ng solusyon sa problemang kinakaharap. Sa akdang pampanitikan na binabasa, umiikot ang kwento sa tinatawag na tunggalian o suliranin patungo sa resolusyon o kakalasan kung binibigyan ng kalutasan ang nagging problema sa kwento.</p>
            <p>Halimbawa: “May mga paraan upang mapakinabangan ang texting nakinababaliwan ng mga mag-aaral at itinuturing ng mga guro na sagabal sa kanilang pag-aaral.”</p>
            <li><b>Sanhi at Bunga</b></li>
            <p>Ang sanhi ay isang ideya o pangyayari na maaaring humantong sa isang bunga. Halimbawa, mo ang sirenang bumbero. Ano ang maaaring maging bunga sirenang ito?</p>
            <p>Halimbawa: Epekto ng kalamidad sa kabuhayan ng mga tao.”</p>
        </ol>

        <h2>B. MGA KASANAYAN SA AKADEMIKONG PAGBASA</h2>
        <ol type="1">
          <li><b>Pag-uuri ng mga Ideya o Detalye</b></li>
          <ol type="i">
            <li><i>Paksang Pangungusap</i> - sentro o pangunahing tema/pokus sa pagpapalawak ng ideya</li>
            <li><i>Suportang Detalye</i> - tumutulong, nagpapalawak, nagbibigay-linaw sa paksang pangungusap:</li>
          </ol>
            <li><b>Pagtiyak sa Damdamin, Tono, Layunin at pananaw ng Teksto</b></li>
            <ol type="i">
              <li><i>Damdamin</i> - Kung ano ang nagging saloobin ng mambabasa sa binasang teksto (saya/tuwa, lungkot, takot, galit, pagkabahala at iba pa.)</li>
              <li><i>Tono</i> - saloobin ng awtor sa paksang kanyang tinalakay masaya, malungkot, seryoso, mapagbiro, mapangutya). </li>
              <li><i>Pananaw</i> - tumutukoy sa punto de vistang ginagamit ng awtor</li>
                <ul>
                  <li>Unang Panauhan - ako, ko, akin, kita, tayo, natin, atin, kami, naming at amin</li>
                  <li>Ikalawang Panauhan - ikaw, ka, mo, iyo, kayo, ninyo, at inyo</li>
                  <li>Ikatlong Panauhan- siya, niya, kanya, sila, nila at kanila</li>
                </ul>
            </ol>
            <li><b>Pagkilala sa Pagkakaiba ng sa Katotohanan at Opinion</b></li>
            <ol typeof="i">
              <li><i>Katotohanan</i> - mga paktwal (Factual) na kaisipan o pahayag na hindi na mapasusubalian at samakatuwid ay tinatanggap ng lahat.</li>
              <li><i>Opinyon</i> - pahayag ng isang tao hinggil sa isang paksa batay sa kanyang paniniwala o prinsipyo.</li>
            </ol>
            <li><b>Paghinuha at Paghula sa Kalalabasan ng Pangyayari</b></li>
            <ol type="i">
              <li><i>Paghihinuha</i> (Inferencing) – tumutukoy sa kakayahang tukuyin ang isang bagay na hindi pa alam batay sa ilang clues.</li>
              <p>Clues: Pamagat ng Teksto, mga larawan sa binasang teksto </p>
              <li><i>Paghula</i> (prediksyon) – ang isang matalinong mambabasa ay nakakagawa ng halos akyureyt na hula kung ano ang susunod na mangyayari o maging ang kalabasan o wakas.</li>
            </ol>
              <li><b>Pagsusuri kung Balido o Hindi ang Ideya</b></li>
                <ol typeof="i">
                  <li>Sino ang nagsabi ng ideya o pananaw?</li>
                  <li>Masasabi bang siya ay awtoridad sa kanyang paksang tinatalakay?</li>
                  <li>Ano ang kanyang nagging batayan sa pagsasabi ng ideya o pananaw?</li>
                  <li>Gaano katotoo ang ginamit niyang batayan? Mapananaligan ba iyon?</li>
                </ol>
                  <li><b>Pagbuo ng Buod at Konklusyon</b></li>
                    <ol type="i">
                      <li><i>Lagom o Buod</i> – tumutukoy sa pinakapayak at pinakamaikling anyo ng diskurso na batay sa isang binasang teksto. Taglay nito ang pinakadiwa at mahalagang kaisipan ng teksto.</li>
                      <li><i>Konklusyon</i> – tumutukoy sa mga implikasyong mahahango sa isang binasang teksto</li>
                    </ol>
                      <li><b>Pagbibigay-interpretasyon sa Mapa, Tsart, Grap at Talahanayan</b></li>
                        <ol typeof="i">
                          <li>Mga presentasyong biswal na kadalasang ginagamit ilang pantulog sa isang teksto.</li>
                          <li>Nagagawang payak at mas madaling unawain ang mga datos na inilalahad sa isang teksto.</li>
                        </ol>
                      </ol>
                      <h2>C. PAGBASA NG TEKSTING AKADEMIK AT PROPESYONAL</h2>
                        <ol type="1">
                          <li><i>Agham Panlipunan</i> - ay isang pangkat ng madisiplinang akademiko sa pinagpaaralanang mga aspeto ng tao sa mundo nag bibigay din sa paggamit ng kaparaang agham at mahigpitna mga pamantayan ng ebidensiya sa pag-aaral ng sangkatauhan.</li>
                          <li><i>Likas na Agham</i> - ay isang sangay ng agham na nauugnay sa paglalarawan, hula, at pag-unawa sa mga likas na phenomena, batay sa empirical na katibayan mula sa pagmamasid at pag- eksperimento. Ang mga mekanismo tulad ng pagsusuri ng kapantay at kakayahang ulitin ng mga natuklasan ay ginagamit upang subukang matiyak ang bisa ng mga pagsulong ng pang-agham.</li>
                          <li><i>Humanidades</i> – ay naglalaman ng mga kaalaman tungkol sa mga sining na Biswal tulad ng musika, arkitektura, pintura, sayaw, dula, at panitikan. Sa pamamagaitan ng mga tekstong ito, naipapahayag ng sumulat ang kanyang nadarama, adhikain, pangarap, pag-asa o pangamba.</li>
                        </ol>
                  </div>
                </div>
              </div>
);

const Module2Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Aralin 2: PAGSULAT SA IBA’T IBANG DISCIPLINA</h2>
      <div className="text-content">
        <h2>1. Kahulugan ng Pagsulat</h2>
        <ul>
          <li>Ay pagsasalin sa papel o anumang kasangkapang maaaring magamit na mapagsasalinan ng mga nabuong salita, simbolo at ilustrasyon ng isang tao o mga tao sa layuning maipahayag ang kaniyang kaisipan. (Bernales, at al. 2001)</li>
          <li>Ay isang biyaya, isang pangangailangan at isang kaligayan ng nagsasagawa nito. (Keller 1985)</li>
          <li>Ay isang komprehensiv na kakayahang naglalaman ng wastong gamit, talasalitaan, pagbubuo ng kaisipan, retorika at iba pang elementio. (Xin Jin 1989)</li>
        </ul>
        <h2>2. Kahuluhan ng Pagsulat</h2>
        <ul>
          <li>Kung marunong tayong sumulat makaaangat tayo sa iba dala na rin ng mahigpit na kompetisyon sa ngayon.</li>
          <li>Makasasagot tayo sa mga pagsusulit na pasanaysay, pagbibigay ng ulat, pagtatala ng resulta ng mga eksperimentasyon at paglikha ng mga papel pananaliksik dahil ito ay bahagi ng pananagumpay.</li>
          <li>Sa daigdig ng edukasyon, kailangang sumulat tayo ng liham ng aplikasyon, paggawa ng balangkas pangkaunlaran, gumawa ng anunsyo, umapila sa paglilikom ng pondo, sumagot sa pakiusap ng mga kliyente at marami pang iba.</li>
        </ul>
        <h2>3.	Sosyo-Kognitibong na Pananaw sa Pagsulat</h2>
        <ul>
          <li><i>Sosyo</i> – ito ay isang salitang tumutukoy sa lipunan ng mga tao. Samantalang ang kognitib naman ay tumutukoy sap ag-iisip.</li>
          <li>Ang <i>sosyo – kognitibong</i> pananaw sa pagsulat ay isang paraan ng pagtingin sa proseso ng pagsulat.</li>
        </ul>
        <h2>4. Pagsulat bilang multidimensional na proseso</h2>
        <ul>
          <li><i>Bago sumulat</i> – binubuo ito ng pagpili ng paksa, paglika ng mga ideya at pagbuo ng mga ideya</li>
          <li><i>Pagsulat</i> – pagbuo ng draft, pagtanggap ng fidbak, pagsangguni at pagrerebisa</li>
          <li><i>Paglalathala</i> – sangkot dito ang pagdidisplay ng komposisyon o sulatin sa bulletin board o kaya’y paglilimbag o paglalathala </li>
        </ul>
        <h2>5. Layunin sa Pagsulat</h2>
        <ul>
          <li><i>Ekspresib</i> – personal na pagsulat upang maipahayag ang sarili</li>
          <li><i>Formulari</i> – isang mataas at istandardisadong pagsulat katulad ng kasulutan o kasunduan sa Negosyo o bisnes at iba pang transyong legal, political, at pang-ekonomiya</li>
          <li><i>Imaginatibo</i> – ginagamit upang mabigyang-ekspresyon ang mapanilikhang imahinasyon ng manunulat sa pagsulat ng mga dula, awit, tula, isksrip at iba pa</li>
          <li><i>Informatib</i> – upang magbigay ng mahahalagang inpormasyon at ebidensya</li>
          <li><i>Persweysib</i> – updang makapanghikayat, mapaniwala ang mambabasa dahil sa mga ebidensya katibayang ipinahayag</li>
        </ul>
        <h2>6. Hakbang Pagsulat</h2>
        <ul>
          <li><i>Prewriting / Gawain Bago Sumulat</i> – ginagawa rito ang pagpili ng paksang isusulat at ang pangangalap ng mga datos o impormasyong kailangan sa pagsulat.</li>
          <li><i>Actual writing</i> – dito isinasagawa ang aktwal na pagsulat. Nakapaloob dito ang pagsulat ng burador o draft.</li>
          <li><i>Rewriting</i> – dito nagaganap ang pag-eedit at pagrerebisa ng draft batay sa wastong grammar, bokabulari at pagkakasunod-sunod ng mga ideya o lohika.</li>
        </ul>
        <h2>7. Mga Kasanayan sa Akademikong Pagsulat / Pagbuo ng konseptong papel</h2>
        <p><i>KONSEPTONG PAPEL</i></p>
        <ul>
          <li>Ay inihahanda upang magpaliwanag, magbigay linaw at bigyang-kahulugan ang isang konsepto, ideya o pormula sa isang malinaw na paraan.</li>
          <li>Binabanggit nito ang kahalagahan, katangian at kaugnayan ng isang bagay (abstrak o konkreto man) sa paraang madaling maunawaan.</li>
          <li>Halimbawa: Ano ang konsepto ng pag-ibig, kabiguan, pagtutulungan, kabayanihan, ekonomiya, kalayaan, edukasyon at iba pa.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Module3Content = () => (
  <div className="content-grid">
    <div className="text-section highlight">
      <h2>Talasanggunian / Mga Sanggunian sa Internet</h2>
      <div className="text-content">
        <p>Ang pagbasa at pagsulat sa larangan ng sining at kultura ay nangangailangan ng mas malikhaing approach at malalim na pag-unawa sa kulturang Pilipino.</p>
        <p>
          Pagbasa Sa Mga Tekstong Propesyonal: 
          <a
            href="https://www.scribd.com/doc/298141461/Pagbasa-Sa-Mga-Tekstong-Propesyonal"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link"
          >
            https://www.scribd.com/doc/298141461/Pagbasa-Sa-Mga-Tekstong-Propesyonal
          </a>
        </p>
        <p>Bernales, et.al, 2022</p>
        <p>PAGBASA AT PAGSULAT SA IBA’T IBANG DISIPLINA (Filipino 102)</p>
        <a
          href="https://www.studocu.com/ph/document/mountain-view-college-phillipines/education/pagbasa-at-pagsulat-sa-ibat-ibang-disiplina-filipino-102/23758879"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          https://www.studocu.com/ph/document/mountain-view-college-phillipines/education/pagbasa-at-pagsulat-sa-ibat-ibang-disiplina-filipino-102/23758879
        </a>
        <a
          href="https://www.slideshare.net/EmmanuelAlimpolos/mga-kasanayan-sa-akademikong-pagbasa-55453099"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          https://www.slideshare.net/EmmanuelAlimpolos/mga-kasanayan-sa-akademikong-pagbasa-55453099
        </a>
        <a
          href="https://slideplayer.com/slide/14124002/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          https://slideplayer.com/slide/14124002/
        </a>
      </div>
    </div>
  </div>
);

function Pagbasa() {
  const [selectedModule, setSelectedModule] = useState('1');

  const renderContent = () => {
    switch(selectedModule) {
      case '1':
        return <Module1Content />;
      case '2':
        return <Module2Content />;
      case '3':
        return <Module3Content />;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="pagbasa-container">
      <Header />
      
      <div className="main-content">
        <div className="title-section">
          <h1>FIL 012: PAGBASA AT PAGSULAT SA IBA'T IBANG DISIPLINA</h1>          
          <div className="module-selector">
            <select 
              className="module-dropdown"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
            >
              <option value="">Pumili ng Aralin</option>
              <option value="1">Aralin 1: PAGBASA SA IBA’T IBANG DISCIPLINA</option>
              <option value="2">Aralin 2: PAGSULAT SA IBA’T IBANG DISCIPLINA</option>
              <option value="3">Talasanggunian / Mga Sanggunian sa Internet</option>
            </select>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
    <Footer /> {/* Make sure this is inside the Fragment */}
    </>
  );
}

export default Pagbasa; 