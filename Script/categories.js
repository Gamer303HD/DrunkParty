var list = 0;
var Selectquestion = 1;
var colorswitch = 0;
var textmessage = document.getElementById("text");
var numbers = document.getElementById("numbers");
var maxcolor = 1;
var mincolor = 5;
var maxlist = 1040;
var minlist = 1;
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Press Me To Begin";
    const speed = 50; // Geschwindigkeit der Animation in Millisekunden

    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();
});
document.body.style.backgroundColor = "rgb(100 173 135)";


function triggerAnimation() {
    var element = document.getElementById('text');
    element.classList.remove('animate-slide-in');
    void element.offsetWidth; // Trigger a reflow to reset the animation
    element.classList.add('animate-slide-in');
    // Define the keyframes and animation directly in JavaScript
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes slideInFromTop {
            from {
                opacity: 0;
                transform: translateY(-100px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        #text.animate-slide-in {
            animation: slideInFromTop 0.5s forwards;
        }
    `;
    document.head.appendChild(styleSheet);

    // Add the class that triggers the animation
    element.classList.add('animate-slide-in');
}
function clickwindow(){
    var Selectquestion = Math.round(Math.random() * (maxlist - minlist)) + minlist;
    textmessage.innerHTML = fragen[Selectquestion];

    colorswitch = colorswitch + 1;
    triggerAnimation();
    numbers.innerHTML = (Selectquestion + " | " + list)
    if(colorswitch == 5){
        var colorsrandom = Math.round(Math.random() * (maxcolor - mincolor)) + mincolor;
        if(colorsrandom == 1){
            document.body.style.backgroundColor = "#7f12dd";
        }else if(colorsrandom == 2){
            document.body.style.backgroundColor = "#dd124d";
        }else if(colorsrandom == 3){
            document.body.style.backgroundColor = "#ddc012";
        }else if(colorsrandom == 4){
            document.body.style.backgroundColor = "#12dd5d";
        }else if(colorsrandom == 5){
            document.body.style.backgroundColor = "#1272dd";

        }
        colorswitch = 0;
    }


}

const fragen = [
"tiere","pflanzen","geografie","geschichte","wissenschaft","technologie","gesundheit",
"ernährung","fitness","kunst","musik","literatur","filme","theater","architektur",
"fotografie","mode","schönheit","reisen","kultur","religion","philosophie","psychologie",
"bildung","sprachen","mathematik","physik","chemie","biologie","astronomie","informatik",
"ingenieurwesen","umwelt","klima","politik","wirtschaft","recht","soziologie","anthropologie",
"archäologie","sport","spiele","hobbys","handwerk","heimwerken","gartenarbeit","kochen","backen",
"getränke","wein","bier","spirituosen","kaffee","tee","süßigkeiten","snacks","vegetarisch","vegan",
"fleisch","fisch","meeresfrüchte","käse","brot","gewürze","kräuter","superfoods","fast food","restaurants",
"cafés","bars","modegeschichte","modedesigner","kunstgeschichte","kunstbewegungen","fotografietechniken",
"musikgenres","musiker","bands","musikinstrumente","musikgeschichte","oper","theaterstücke",
"dramatiker","schauspieler","filme nach genre","regisseure","drehbuchautoren","filmgeschichte",
"filmkritiken","literaturgeschichte","schriftsteller","bücher","gedichte","zitate","essays",
"kurzgeschichten","comics","graphic novels","modeaccessoires","schmuck","uhren","taschen","schuhe",
"sportarten","fußball","basketball","tennis","golf","schwimmen","leichtathletik","wintersport",
"extremsport","yoga","pilates","meditation","achtsamkeit","stressbewältigung","schlaf","ernährungstipps",
"diäten","abnehmen","gewichtszunahme","muskelaufbau","ausdauertraining","krafttraining","heimtraining",
"fitnessgeräte","fitnesstracker","gesundheitsmythen","krankheitsprävention","erste hilfe","hausmittel",
"arzneimittel","therapien","psychische gesundheit","depression","angststörungen","stress","burnout","beziehungen",
"familie","freundschaften","liebe","ehe","scheidung","kindererziehung","haustiere","hunde","katzen","vögel",
"reptilien","fische","insekten","wildtiere","zoologie","botanik","bäume","blumen","gemüse","obst","pilze",
"algen","fossilien","evolution","genetik","ökosysteme","naturschutz","nachhaltigkeit","recycling","erneuerbare energien",
"solarenergie","windenergie","wasserkraft","geothermie","kernenergie","elektrizität","magnetismus","licht","akustik",
"optik","mechanik","thermodynamik","quantenphysik","relativitätstheorie","raumfahrt","planeten","sterne","galaxien",
"schwarze löcher","raumstationen","satelliten","teleskope","roboter","künstliche intelligenz","virtual reality",
"augmented reality","social media","cyber-sicherheit","programmieren","betriebssysteme","netzwerke","datenbanken",
"softwareentwicklung","webentwicklung","mobile apps","spieleentwicklung","cloud computing","big data","maschinelles lernen",
"data science","blockchain","cybersicherheit","internet der dinge","3d-druck","drohnen","automatisierung","smart homes",
"wearables","quantencomputer","biotechnologie","genomik","telemedizin","gesundheitsinformatik","e-learning",
"online-kurse","moocs","lernplattformen","bildungstechnologie","klassenzimmermanagement","pädagogik",
"bildungspsychologie","schulverwaltung","hochschulbildung","berufsbildung","weiterbildung","sprachkurse",
"übersetzungen","dolmetschen","linguistik","phonetik","semantik","syntax","pragmatik","soziolinguistik",
"psycholinguistik","neurolinguistik","korpuslinguistik","literaturwissenschaft","sprachwissenschaft",
"grammatik","rechtschreibung","zeichensetzung","stilistik","rhetorik","literaturkritik","erzähltheorie",
"poesieanalyse","theaterwissenschaft","filmwissenschaft","medienwissenschaft","kommunikationswissenschaft",
"journalismus","publizistik","public relations","werbung","marketing","marktforschung","konsumentenverhalten",
"produktentwicklung","vertrieb","einzelhandel","e-commerce","logistik","supply chain management","unternehmensführung",
"unternehmensstrategie","innovationsmanagement","change management","projektmanagement","risikomanagement",
"qualitätsmanagement","finanzmanagement","rechnungswesen","buchhaltung","steuern","wirtschaftsprüfung",
"controlling","investitionen","aktienmarkt","anleihen","derivate","immobilien","versicherungen",
"pensionsfonds","vermögensverwaltung","banken","kreditwesen","zahlungsverkehr","fintech","mikrofinanzierung",
"entwicklungspolitik","internationale wirtschaft","handel","globalisierung","wirtschaftspolitik","arbeitsmarkt",
"sozialpolitik","umweltpolitik","energiepolitik","verkehrspolitik","bildungspolitik","gesundheitspolitik",
"sicherheitspolitik","außenpolitik","verteidigung","diplomatie","internationale beziehungen","menschenrechte",
"entwicklungshilfe","flüchtlinge","migration","integration","demografie","familienpolitik","gleichstellung",
"jugendpolitik","seniorenpolitik","wohnungsbau","städtische entwicklung","regionalentwicklung","ländliche entwicklung",
"landwirtschaft","ernährungssicherheit","forstwirtschaft","fischerei","tourismus","kulturpolitik","sportpolitik",
"medienpolitik","urheberrecht","patentrecht","wettbewerbsrecht","handelsrecht","arbeitsrecht","sozialrecht",
"zivilrecht","strafrecht","verfassungsrecht","verwaltungsrecht","völkerrecht","europarecht","rechtstheorie",
"rechtsgeschichte","rechtssoziologie","kriminologie","strafvollzug","polizeiwesen","sicherheitsdienste",
"feuerwehr","katastrophenschutz","zivilschutz","rettungsdienste","gesundheitssystem","krankenhäuser",
"arztpraxen","pflegeheime","altenpflege","kinderbetreuung","sozialarbeit","psychotherapie","psychiatrie",
"ergotherapie","logopädie","physiotherapie","geburtshilfe","hebammen","ernährungsberatung","gesundheitsförderung",
"krankenkassen","gesundheitspolitik","arzneimittelversorgung","medizintechnik","gesundheitsforschung",
"epidemiologie","public health","biostatistik","gesundheitskommunikation","gesundheitspsychologie",
"gesundheitsökonomie","medizinethik","palliativmedizin","onkologie","kardiologie","neurologie","pädiatrie",
"gynäkologie","dermatologie","orthopädie","urologie","ophthalmologie","zahnmedizin","kieferorthopädie",
"hals-nasen-ohren-heilkunde","anästhesiologie","chirurgie","intensivmedizin","notfallmedizin","innere medizin",
"allgemeinmedizin","sportmedizin","rehabilitation","präventivmedizin","tropenmedizin","infektiologie","immunologie",
"genetik","molekularbiologie","zellbiologie","entwicklungsbiologie","mikrobiologie","virologie","parasitologie","botanik",
"zoologie","ökologie","evolutionsbiologie","verhaltensbiologie","neurobiologie","physiologie","biochemie","biophysik","bioinformatik",
"systembiologie","synthetische biologie","biotechnologie","gentechnik","umweltwissenschaften","geowissenschaften",
"klimawissenschaften","ozeanographie","hydrologie","geologie","mineralogie","petrologie","vulkanologie","seismologie",
"paläontologie","geochemie","geophysik","umweltchemie","umweltbiologie","ökotoxikologie","naturschutzbiologie",
"landschaftsökologie","bodenkunde","forstwissenschaften","agrarwissenschaften","fischereiwissenschaften",
"ernährungswissenschaften","lebensmitteltechnologie","lebensmittelchemie","lebensmittelmikrobiologie","lebensmittelhygiene",
"lebensmittelrecht","lebensmittelwirtschaft","ernährungsökonomie","diätetik","haushaltswissenschaften","konsumforschung",
"konsumentenpolitik","verbraucherbildung","verbraucherberatung","verbraucherschutz","konsumsoziologie","konsumpsychologie",
"konsumethik","konsumgeschichte","konsumkultur","konsumästhetik","konsumkritik","nachhaltiger konsum","kreislaufwirtschaft",
"ressourceneffizienz","abfallwirtschaft","abfallvermeidung","abfallverwertung","abfallentsorgung","wassermanagement",
"abwassermanagement","luftreinhaltung","bodenschutz","naturschutz","artenschutz","biotopschutz","landschaftsschutz",
"klimaschutz","klimaanpassung","energieeffizienz","erneuerbare energien","energieversorgung","energieverbrauch","energiepolitik",
"energiewirtschaft","energierecht","energietechnik","energieforschung","kernenergie","fossile energien","kohlenstoffmanagement",
"emissionshandel","umweltpolitik","umweltrecht","umweltethik","umweltkommunikation","Tiere", "Pflanzen", "Geografie", "Geschichte",
 "Wissenschaft", "Technologie", "Gesundheit", "Ernährung", "Fitness", "Kunst", "Musik", "Literatur", "Filme", "Theater", "Architektur"
 , "Fotografie", "Mode", "Schönheit", "Reisen", "Kultur", "Religion", "Philosophie", "Psychologie", "Bildung", "Sprachen", "Mathematik",
  "Physik", "Chemie", "Biologie", "Astronomie", "Informatik", "Ingenieurwesen", "Umwelt", "Klima", "Politik", "Wirtschaft", "Recht", 
  "Soziologie", "Anthropologie", "Archäologie", "Sport", "Spiele", "Hobbys", "Handwerk", "Heimwerken", "Gartenarbeit", "Kochen", "Backen",
   "Getränke", "Wein", "Bier", "Spirituosen", "Kaffee", "Tee", "Süßigkeiten", "Snacks", "Vegetarisch", "Vegan", "Fleisch", "Fisch", 
   "Meeresfrüchte", "Käse", "Brot", "Gewürze", "Kräuter", "Superfoods", "Fast Food", "Restaurants", "Cafés", "Bars", "Modegeschichte"
   , "Modedesigner", "Kunstgeschichte", "Kunstbewegungen", "Fotografietechniken", "Musikgenres", "Musiker", "Bands", "Musikinstrumente",
    "Musikgeschichte", "Oper", "Theaterstücke", "Dramatiker", "Schauspieler", "Filme nach Genre", "Regisseure", "Drehbuchautoren",
     "Filmgeschichte", "Filmkritiken", "Literaturgeschichte", "Schriftsteller", "Bücher", "Gedichte", "Zitate", "Essays", "Kurzgeschichten"
     , "Comics", "Graphic Novels", "Modeaccessoires", "Schmuck", "Uhren", "Taschen", "Schuhe", "Sportarten", "Fußball", "Basketball",
      "Tennis", "Golf", "Schwimmen", "Leichtathletik", "Wintersport", "Extremsport", "Yoga", "Pilates", "Meditation", "Achtsamkeit",
       "Stressbewältigung", "Schlaf", "Ernährungstipps", "Diäten", "Abnehmen", "Gewichtszunahme", "Muskelaufbau", "Ausdauertraining", 
       "Krafttraining", "Heimtraining", "Fitnessgeräte", "Fitnesstracker", "Gesundheitsmythen", "Krankheitsprävention", "Erste Hilfe",
        "Hausmittel", "Arzneimittel", "Therapien", "Psychische Gesundheit", "Depression", "Angststörungen", "Stress", "Burnout",
         "Beziehungen", "Familie", "Freundschaften", "Liebe", "Ehe", "Scheidung", "Kindererziehung", "Haustiere", "Hunde",
          "Katzen", "Vögel", "Reptilien", "Fische", "Insekten", "Wildtiere", "Zoologie", "Botanik", "Bäume", "Blumen", 
          "Gemüse", "Obst", "Pilze", "Algen", "Fossilien", "Evolution", "Genetik", "Ökosysteme", "Naturschutz", "Nachhaltigkeit",
           "Recycling", "Erneuerbare Energien", "Solarenergie", "Windenergie", "Wasserkraft", "Geothermie", "Kernenergie", 
           "Elektrizität", "Magnetismus", "Licht", "Akustik", "Optik", "Mechanik", "Thermodynamik", "Quantenphysik", 
           "Relativitätstheorie", "Raumfahrt", "Planeten", "Sterne", "Galaxien", "Schwarze Löcher", "Raumstationen",
            "Satelliten", "Teleskope", "Roboter", "Künstliche Intelligenz", "Virtual Reality", "Augmented Reality", 
            "Social Media", "Cyber-Sicherheit", "Programmieren", "Betriebssysteme", "Netzwerke", "Datenbanken", 
            "Softwareentwicklung", "Webentwicklung", "Mobile Apps", "Spieleentwicklung", "Cloud Computing", 
"Big Data", "Maschinelles Lernen", "Data Science", "Blockchain", "Cybersicherheit", "Internet der Dinge",
"3D-Druck", "Drohnen", "Automatisierung", "Smart Homes", "Wearables", "Quantencomputer", "Biotechnologie",
"Genomik", "Telemedizin", "Gesundheitsinformatik", "E-Learning", "Online-Kurse", "MOOCs", "Lernplattformen",
 "Bildungstechnologie", "Klassenzimmermanagement", "Pädagogik", "Bildungspsychologie", "Schulverwaltung",
  "Hochschulbildung", "Berufsbildung", "Weiterbildung", "Sprachkurse", "Übersetzungen", "Dolmetschen",
   "Linguistik", "Phonetik", "Semantik", "Syntax", "Pragmatik", "Soziolinguistik", "Psycholinguistik",
    "Neurolinguistik", "Korpuslinguistik", "Literaturwissenschaft", "Sprachwissenschaft", "Grammatik",
     "Rechtschreibung", "Zeichensetzung", "Stilistik", "Rhetorik", "Literaturkritik", "Erzähltheorie",
      "Poesieanalyse", "Theaterwissenschaft", "Filmwissenschaft", "Medienwissenschaft", "Kommunikationswissenschaft",
       "Journalismus", "Publizistik", "Public Relations", "Werbung", "Marketing", "Marktforschung", "Konsumentenverhalten",
        "Produktentwicklung", "Vertrieb", "Einzelhandel", "E-Commerce", "Logistik", "Supply Chain Management",
         "Unternehmensführung", "Unternehmensstrategie", "Innovationsmanagement", "Change Management", "Projektmanagement",
          "Risikomanagement", "Qualitätsmanagement", "Finanzmanagement", "Rechnungswesen", "Buchhaltung", "Steuern",
           "Wirtschaftsprüfung", "Controlling", "Investitionen", "Aktienmarkt", "Anleihen", "Derivate", "Immobilien",
            "Versicherungen", "Pensionsfonds", "Vermögensverwaltung", "Banken", "Kreditwesen", "Zahlungsverkehr",
             "Fintech", "Mikrofinanzierung", "Entwicklungsökonomie", "Internationale Wirtschaft", "Handel",
              "Globalisierung", "Wirtschaftspolitik", "Arbeitsmarkt", "Sozialpolitik", "Umweltpolitik",
               "Energiepolitik", "Verkehrspolitik", "Bildungspolitik", "Gesundheitspolitik", "Sicherheitspolitik",
                "Außenpolitik", "Verteidigung", "Diplomatie", "Internationale Beziehungen", "Menschenrechte",
                 "Entwicklungshilfe", "Flüchtlinge", "Migration", "Integration", "Demografie", "Familienpolitik",
                  "Gleichstellung", "Jugendpolitik", "Seniorenpolitik", "Wohnungsbau", "Städtebau", "Regionalentwicklung",
                   "Ländliche Entwicklung", "Landwirtschaft", "Ernährungssicherheit", "Forstwirtschaft", "Fischerei", "Tourismus",
                    "Kulturpolitik", "Sportpolitik", "Medienpolitik", "Urheberrecht", "Patentrecht", "Wettbewerbsrecht", "Handelsrecht",
                     "Arbeitsrecht", "Sozialrecht", "Zivilrecht", "Strafrecht", "Verfassungsrecht", "Verwaltungsrecht", "Völkerrecht", "Europarecht",
                      "Rechtstheorie", "Rechtsgeschichte", "Rechtssoziologie", "Kriminologie", "Strafvollzug", "Polizeiwesen", "Sicherheitsdienste", "Feuerwehr",
                       "Katastrophenschutz", "Zivilschutz", "Rettungsdienste", "Gesundheitssystem", "Krankenhäuser", "Arztpraxen", "Pflegeheime", "Altenpflege",
                        "Kinderbetreuung", "Sozialarbeit", "Psychotherapie", "Psychiatrie", "Ergotherapie", "Logopädie", "Physiotherapie", "Geburtshilfe", "Hebammen",
                         "Ernährungsberatung", "Gesundheitsförderung", "Krankenkassen", "Gesundheitspolitik", "Arzneimittelversorgung", "Medizintechnik", "Gesundheitsforschung",
                          "Epidemiologie", "Public Health", "Biostatistik", "Gesundheitskommunikation", "Gesundheitspsychologie", "Gesundheitsökonomie", "Medizinethik",
                           "Palliativmedizin", "Onkologie", "Kardiologie", "Neurologie", "Pädiatrie", "Gynäkologie", "Dermatologie", "Orthopädie", "Urologie",
                            "Ophthalmologie", "Zahnmedizin", "Kieferorthopädie", "Hals-Nasen-Ohren-Heilkunde", "Anästhesiologie", "Chirurgie", "Intensivmedizin",
                             "Notfallmedizin", "Innere Medizin", "Allgemeinmedizin", "Sportmedizin", "Rehabilitation", "Präventivmedizin", "Tropenmedizin", "Infektiologie",
                              "Immunologie", "Genetik", "Molekularbiologie", "Zellbiologie", "Entwicklungsbiologie", "Mikrobiologie", "Virologie", "Parasitologie", "Botanik"
                              , "Zoologie", "Ökologie", "Evolutionsbiologie", "Verhaltensbiologie", "Neurobiologie", "Physiologie", "Biochemie", "Biophysik", "Bioinformatik",
                               "Systembiologie", "Synthetische Biologie", "Biotechnologie", "Gentechnik", "Umweltwissenschaften", "Geowissenschaften", "Klimawissenschaften", 
                               "Ozeanographie", "Hydrologie", "Geologie", "Mineralogie", "Petrologie", "Vulkanologie", "Seismologie", "Paläontologie", "Geochemie", "Geophysik",
                                "Umweltchemie", "Umweltbiologie", "Ökotoxikologie", "Naturschutzbiologie", "Landschaftsökologie", "Bodenkunde", "Forstwissenschaften", 
                                "Agrarwissenschaften", "Fischereiwissenschaften", "Ernährungswissenschaften", "Lebensmitteltechnologie", "Lebensmittelchemie", 
                                "Lebensmittelmikrobiologie", "Lebensmittelhygiene", "Lebensmittelrecht", "Lebensmittelwirtschaft", "Ernährungsökonomie", 
                                "Diätetik", "Haushaltswissenschaften", "Konsumforschung", "Konsumentenpolitik", "Verbraucherbildung", "Verbraucherberatung", 
                                "Verbraucherschutz", "Konsumsoziologie", "Konsumpsychologie", "Konsumethik", "Konsumgeschichte", "Konsumkultur", "Konsumästhetik",
                                 "Konsumkritik", "Nachhaltiger Konsum", "Kreislaufwirtschaft", "Ressourceneffizienz", "Abfallwirtschaft", "Abfallvermeidung", 
                                 "Abfallverwertung", "Abfallentsorgung", "Wassermanagement", "Abwassermanagement", "Luftreinhaltung", "Bodenschutz", "Naturschutz",
                                  "Artenschutz", "Biotopschutz", "Landschaftsschutz", "Klimaschutz", "Klimaanpassung", "Energieeffizienz", "Erneuerbare Energien",
                                   "Energieversorgung", "Energieverbrauch", "Energiepolitik", "Energiewirtschaft", "Energierecht", "Energietechnik", "Energieforschung",
                                    "Kernenergie", "Fossile Energien", "Kohlenstoffmanagement", "Emissionshandel", "Umweltpolitik", "Umweltrecht", "Umweltethik",
                                     "Umweltkommunikation", "Umweltbildung", "Umweltbewusstsein", "Umweltverhalten", "Umweltpsychologie", "Umweltssoziologie", "Umweltgeschichte",
                                      "Umweltliteratur", "Umwelttheater", "Umweltkunst", "Umweltmusik", "Umweltfilm", "Umweltfotografie"
];


for (let i = 0; i < fragen.length; i++) {
    console.log(fragen[i]);
    list = list + 1;
}
