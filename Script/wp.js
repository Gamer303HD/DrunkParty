var list = 0;
var Selectquestion = 1;
var colorswitch = 0;
var textmessage = document.getElementById("text");
var numbers = document.getElementById("numbers");
var maxcolor = 1;
var mincolor = 5;
var select = 1;
var maxwahrheit = 1;
var minwahrheit = 100;
var maxpflicht = 1;
var minpflicht = 100;


function buttonpflicht(){
    select = 2;
    clickwindow();
}
function buttonwahrheit(){
    select = 1;
    clickwindow();
}

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

    if(select == 1){
        var randomnumberwahrheit = Math.round(Math.random() * (maxwahrheit - minwahrheit)) + minwahrheit;
        textmessage.innerHTML = wahrheit[randomnumberwahrheit];
        colorswitch = colorswitch + 1;
        triggerAnimation()
    }else if(select == 2){
        var randomnumberpflicht = Math.round(Math.random() * (maxpflicht - minpflicht)) + minpflicht;
        textmessage.innerHTML = pflicht[randomnumberpflicht];
        colorswitch = colorswitch + 1;
        triggerAnimation()
    }
    
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

const wahrheit = [
    "Was ist das Peinlichste, was dir je passiert ist?",
    "Wie viele Jungen / Mädchen hast du schon geküsst?",
    "Hast du schon einmal eine Person des gleichen Geschlechts geküsst?",
    "In wen bist du verliebt?",
    "Welches Tier passt am besten zu dir und warum?",
    "Welchen Star findest du heiß?",
    "Wann hattest du das letzte Mal Sex?",
    "Was ist deine schlimmste Macke?",
    "Hast du schon mal etwas geklaut?",
    "Wann hast du das letzte Mal gelogen?",
    "Wann hast du das letzte Mal geweint?",
    "Was ist deine größte Angst?",
    "Was ist deine geheimste Fantasie?",
    "Was war der größte Fehler deines Lebens?",
    "Was war dein schlimmstes Date?",
    "Was ist deine geheimste, dunkle Fantasie?",
    "Mit welcher berühmten Person würdest du gerne einmal eine Nacht verbringen?",
    "Wohin würdest du dich jetzt am liebsten beamen?",
    "Wer aus der Runde, glaubst du, hat den größten Brustumfang?",
    "Du musst einen Star heiraten, wen?",
    "Was hältst du von offenen Beziehungen?",
    "Wen aus der Runde würdest du auf eine einsame Insel mitnehmen?",
    "Welche Straftat hast du schon mal begangen?",
    "Wo & mit wem war dein erster Kuss?",
    "Würdest du jemanden in diesem Raum gerne küssen?",
    "Was ist das Schlimmste, was dir jemals angetan wurde?",
    "Was war das schlechteste Date, auf dem du mal warst?",
    "Was bereust du in deinem Leben am meisten?",
    "Hast du jemals geflunkert, um aus einem schlechten Date zu entkommen?",
    "Hast du schon einmal Drogen genommen? (außer Alkohol und Tabak)",
    "Wer aus der Runde sollte am dringendsten zum Friseur?",
    "Was würdest du tun, wenn du für einen Monat ein Mann/eine Frau wärst?",
    "Was wissen deine Eltern nicht über dich?",
    "Hast du verborgene Talente?",
    "Was ist das Peinlichste in deinem Kleiderschrank?",
    "Was war der verrückteste Traum, den du je hattest?",
    "Wie oft wechselt du deine Bettwäsche?",
    "Warst du schon einmal nackt in der Öffentlichkeit?",
    "Hast du schon einmal jemanden geghostet?",
    "Was war der größte Fehler, den du in deinem Leben begangen hast?",
    "Was war das Ekligste, was du jemals getan/gegessen hast?",
    "In welchen Star warst du das erste Mal verknallt?",
    "Welches wirklich kindische Verhalten hast du immer noch?",
    "Hast du schon einmal jemanden für etwas beschuldigt, an dem du Schuld warst? Und was war es?",
    "Mit welcher Person im Raum würdest du am ehesten knutschen?",
    "Welches ist der merkwürdigste Ort, an dem du gepinkelt hast?",
    "Wer in dieser Runde kennt dich am besten?",
    "Was ist dein größter Traum?",
    "Was war das Gemeinste, was du jemandem je angetan hast?",
    "Was war dein peinlichster Kino-Moment?",
    "Was ist dein schlimmster Alptraum?",
    "Welches Geheimnis hat niemand in dieser Runde über dich?",
    "Mit welcher Person aus der Runde könntest du dir eine Beziehung vorstellen?",
    "Was war die lustigste Begegnung, die du jemals mit einem Fremden hattest?",
    "Was war das teuerste Geschenk, das du jemals gekauft hast?",
    "Was ist dein schlimmstes Schul-Erlebnis?",
    "Welches Lied kannst du auswendig?",
    "Was ist das Verrückteste, was du jemals für Liebe getan hast?",
    "Welches Geheimnis bewahrst du vor deinen Eltern?",
    "Was ist dein Lieblingsschulfach und warum?",
    "Was ist das Mutigste, was du je getan hast?",
    "Was war der größte Misserfolg in deinem Leben?",
    "Was ist das Ekligste, das du jemals in den Mund genommen hast?",
    "Wenn du einen Tag lang unsichtbar sein könntest, was würdest du tun?",
    "Was ist dein ungewöhnlichstes Haustier gewesen?",
    "Wenn du einen Tag lang jemand anderes sein könntest, wer wäre das?",
    "Was ist die lustigste Entschuldigung, die du je benutzt hast, um nicht zur Schule oder zur Arbeit zu gehen?",
    "Wer war deine erste große Liebe?",
    "Was ist dein Lieblingsfilm und warum?",
    "Was war das Beste, das du je gekocht oder gebacken hast?",
    "Wenn du mit einer Person aus der Runde auf eine einsame Insel gehen müsstest, wer wäre das und warum?",
    "Welche berühmte Person würdest du gerne mal treffen und warum?",
    "Was ist deine größte Schwäche?",
    "Was war dein peinlichstes Erlebnis beim Arzt?",
    "Was ist das Verrückteste, das du jemals getan hast, um Aufmerksamkeit zu bekommen?",
    "Was war die lustigste Begegnung mit einem Polizisten, die du je hattest?",
    "Was ist der ungewöhnlichste Ort, an dem du jemals geschlafen hast?",
    "Was ist das Peinlichste, das du jemals für Geld getan hast?",
    "Was war der ungewöhnlichste Traum, den du je hattest?",
    "Welche Person, die du persönlich kennst, bewunderst du am meisten und warum?",
    "Was ist die gefährlichste Sache, die du jemals gemacht hast?",
    "Was war die schlimmste Lüge, die du je erzählt hast, ohne erwischt zu werden?",
    "Was ist die gemeinste Sache, die du je über jemanden gesagt oder gedacht hast?",
    "Wann hast du das letzte Mal so richtig gelacht und warum?",
    "Was war der beste Tag deines Lebens?",
    "Welchen Beruf hättest du gerne und warum?",
    "Was ist dein Lieblingsbuch und warum?",
    "Welche Superkraft hättest du gerne?",
    "Was ist das Mutigste, was du je getan hast?",
    "Wer in dieser Runde ist dir am ähnlichsten und warum?",
    "Was ist das Peinlichste, was du jemals getrunken hast?",
    "Was war die lustigste Begegnung, die du je mit einem Tier hattest?",
    "Was war die beste Party, die du je besucht hast?",
    "Was ist das Peinlichste, was dir je in der Schule passiert ist?",
    "Hast du jemals einen Streich gespielt und wenn ja, welchen?",
    "Was ist das Verrückteste, was du jemals im Urlaub gemacht hast?",
    "Welche berühmte Person würdest du gerne mal küssen?",
    "Was war dein peinlichstes Erlebnis in einem Restaurant?",
    "Was ist die lustigste Begegnung, die du je mit einem Verkäufer hattest?",
    "Was ist das Schlimmste, was du jemals getan hast, um Aufmerksamkeit zu bekommen?",
    "Was war das Dümmste, was du jemals getan hast, weil du zu viel getrunken hast?"
];

const pflicht = [
    "Füttere die Person rechts neben dir mit etwas Leckerem.",
    "Trinke ein großes Glas eines Getränks auf Ex.",
    "Mache fünf Liegestütze.",
    "Verbringe eine Runde mit den Füßen nach oben, Kopf nach unten.",
    "Versuch einen Zeh in den Mund zu nehmen.",
    "Mache 50 Kniebeugen.",
    "Mache einen Purzelbaum.",
    "Benimm dich, wie ein Huhn.",
    "Riech am Fuß deines linken Nachbars.",
    "Sprich mit bayrischem/sächsischem/einem anderen Dialekt.",
    "Beende jeden Satz mit „... nicht!“",
    "Stecke dir Eiswürfel in die Hose.",
    "Sprich, ohne deinen Mund zu schließen.",
    "Führe ein drei-minütiges Stand-Up-Comedy-Programm auf.",
    "Erzähle der Person gegenüber, wie toll er/sie ist.",
    "Nenne eine Sache über dich, wegen der du schon Komplimente bekommen hast.",
    "Iss etwas und tue so, als wäre es das leckerste, was du je gegessen hast.",
    "Mache die lustigste Grimasse, die dir einfällt.",
    "Finde heraus, wessen Haare am besten riechen.",
    "Iss eine Banane in einem verführerischen Stil.",
    "Iss etwas, ohne deine Hände zur Hilfe zu nehmen.",
    "Küsse die anders geschlechtliche Person, die als erstes rechts von dir kommt.",
    "Benimm dich zwei Minuten wie ein Huhn.",
    "Schreibe eine versaute Nachricht an deinen letzten WhatsApp-Kontakt.",
    "Mach eine Person in der Gruppe deiner Wahl nach.",
    "Fülle fünf verschiedene Flüssigkeiten in ein Glas und trinke es aus.",
    "Der Spieler rechts von dir darf dir ein Gebräu aus allen möglichen Zutaten mischen und du musst es trinken.",
    "Fluch zehn Sekunden lang wie ein Kesselflicker.",
    "Iss einen Esslöffel Senf.",
    "Ziehe ein Kleidungsstück aus.",
    "Riech an den Achselhöhlen jeder Person im Raum.",
    "Versuche, für 10 Sekunden zu breakdancen.",
    "Die Gruppe darf sich ein Lied aussuchen, du musst dazu tanzen!",
    "Singe ein Lied vor.",
    "Lass dich von der Gruppe in ein Tier verwandeln (mit Make-Up, Kleidung, etc.).",
    "Mache eine Minute lang Hampelmann-Sprünge.",
    "Zähle rückwärts von 100 bis 0.",
    "Springe einbeinig auf einem Bein umher.",
    "Male mit geschlossenen Augen ein Bild.",
    "Lege deinen Kopf für eine Minute auf den Schoß der Person neben dir.",
    "Lass dir von der Person rechts neben dir die Haare kämmen.",
    "Erzähle einen Witz.",
    "Verbinde dir die Augen und errate, wer aus der Gruppe dir ein Getränk gibt.",
    "Erfinde ein Gedicht über die Person gegenüber.",
    "Probiere, deinen Ellbogen zu lecken.",
    "Male jemandem in der Gruppe ein Bild auf die Stirn.",
    "Spiele eine Runde Luftgitarre.",
    "Tu so, als ob du im Ballett wärst.",
    "Erkläre einem Stuhl deine Liebe.",
    "Erfinde eine neue Tanzbewegung.",
    "Laufe einmal um das Haus / den Block.",
    "Stelle eine Yoga-Pose deiner Wahl vor.",
    "Rufe das letzte Restaurant an, in dem du warst, und bedanke dich für das Essen.",
    "Tue so, als wärst du ein Roboter.",
    "Trage einen Turban aus Toilettenpapier.",
    "Laufe auf allen Vieren und belle wie ein Hund.",
    "Rede eine Minute lang ohne Pause.",
    "Lass dich von der Gruppe in ein Monster verwandeln.",
    "Ziehe ein lustiges Gesicht und mache es für 2 Minuten.",
    "Imitiere eine berühmte Person.",
    "Mache einen Handstand.",
    "Lass dir von der Person links von dir die Augenbrauen zupfen.",
    "Lass jemanden einen Löffel Erdnussbutter von deiner Nase lecken.",
    "Singe das ABC rückwärts.",
    "Versuche, den Raum mit verbundenen Augen zu verlassen.",
    "Sprich eine Minute lang nur in Reimen.",
    "Nimm einen Schluck Wasser in den Mund und versuche zu singen.",
    "Mach ein Foto von dir und poste es auf Instagram.",
    "Sag drei Dinge, die du an dir selbst magst.",
    "Sag drei Dinge, die du an dir selbst ändern möchtest.",
    "Tausche die Socken mit der Person rechts neben dir.",
    "Mache einen Ententanz.",
    "Lecke einen Schuh.",
    "Schlage ein Rad.",
    "Ziehe einen BH über dein T-Shirt.",
    "Erzähle der Gruppe ein Geheimnis.",
    "Rufe jemanden an und sag ihm, dass du ihn liebst.",
    "Stell dich tot und bleibe so für die nächsten zwei Runden.",
    "Gib der Person links neben dir eine Kopfmassage.",
    "Mache den Moonwalk.",
    "Tausche die Kleidung mit der Person gegenüber.",
    "Sag jedem in der Runde ein nettes Kompliment.",
    "Versuche zu jonglieren.",
    "Mache 20 Sit-ups.",
    "Mache einen Kopfstand.",
    "Rufe einen Ex-Freund / eine Ex-Freundin an.",
    "Führe ein Lied vor, indem du Lippen-Synchronisierung machst.",
    "Zieh eine Grimasse, während du ein Lied summst.",
    "Lass jemanden im Raum dein Make-up oder deine Haare machen.",
    "Iss einen Löffel Honig oder Nutella ohne deine Hände zu benutzen.",
    "Baue einen Turm aus Gegenständen im Raum und lass ihn nicht umfallen.",
    "Lege dich für 30 Sekunden auf den Boden und tu so, als ob du schwimmst.",
    "Mache 30 Sekunden lang Hampelmann-Übungen.",
    "Erfinde eine neue Tanzbewegung und führe sie vor.",
    "Probiere, für eine Minute lang, auf einem Bein zu stehen, während du die andere Hand auf deinem Kopf hast.",
    "Tausche die Schuhe mit der Person, die dir am nächsten sitzt.",
    "Stelle ein berühmtes Kunstwerk oder eine berühmte Statue nach.",
    "Erzähle einen Witz, den du für lustig hältst.",
    "Schreibe deinen Namen auf ein Blatt Papier, aber benutze dafür deine Füße.",
    "Stelle eine berühmte Filmszene nach.",
    "Versuche, 30 Sekunden lang Hula-Hoop mit einem imaginären Reifen zu machen.",
    "Lass jemanden in der Gruppe dein Handy für eine Minute lang bedienen.",
    "Male ein Bild von einem Gruppenmitglied, ohne hinzuschauen.",
    "Versuche, für eine Minute lang mit der Zunge deinen Ellbogen zu berühren.",
    "Zähle laut bis 50, aber wechsle bei jeder Zahl die Lautstärke.",
    "Mache einen Handstand oder versuche es zumindest.",
    "Versuche, einen Text mit geschlossenen Augen zu tippen.",
    "Laufe rückwärts um den Tisch oder den Raum herum.",
    "Mache ein Selbstporträt, während du die Augen geschlossen hast.",
    "Halte eine Rede über ein zufälliges Thema, das die Gruppe auswählt.",
    "Setze eine Sonnenbrille auf und trage sie für den Rest der Runde.",
    "Versuche, eine Minute lang zu jonglieren.",
    "Verkleide dich mit Kleidungsstücken aus dem Raum, um ein neues Outfit zu kreieren.",
    "Gib der Person links von dir eine Kopfmassage.",
    "Mache eine Runde lang Tiergeräusche, ohne zu sprechen.",
    "Stelle eine Szene aus deiner Lieblingsserie nach.",
    "Versuche, ein Glas Wasser auf dem Kopf balancierend durch den Raum zu tragen.",
    "Führe eine Luftgitarren-Show auf.",
    "Lass jemanden aus der Gruppe einen Schnurrbart auf dein Gesicht malen.",
    "Gib der Person rechts von dir eine Schultermassage.",
    "Singe das Alphabet rückwärts.",
    "Versuche, ein Gedicht über einen Gegenstand im Raum zu schreiben oder zu rezitieren.",
    "Mache 20 Hampelmänner.",
    "Ruf einen Freund oder Familienmitglied an und singe ihnen ein Lied vor.",
    "Erzähle der Gruppe eine lustige Anekdote aus deiner Kindheit.",
    "Mache eine Minute lang einen Moonwalk.",
    "Ziehe ein Paar Socken an deinen Händen und versuche, eine Flasche Wasser zu öffnen.",
    "Rede eine Minute lang mit einem Akzent.",
    "Mache einen Handstand gegen die Wand.",
    "Singe deinen Lieblingssong vor.",
    "Versuche, dich selbst zu kitzeln.",
    "Versuche, ein Glas Wasser zu trinken, während du auf den Händen stehst.",
    "Mache eine Pirouette.",
    "Mache ein Selfie und poste es auf Social Media.",
    "Laufe eine Runde um das Haus/die Wohnung.",
    "Versuche, einen Löffel auf der Nase zu balancieren.",
    "Male einen Regenbogen auf ein Blatt Papier.",
    "Zieh deine Socken mit einer Zange aus.",
    "Stecke deine Zehen für eine Minute in deinen Mund.",
    "Versuche, einen Apfel zu schälen, ohne das Messer abzusetzen.",
    "Mache einen Handstand und trinke dabei ein Glas Wasser.",
    "Zeichne mit verbundenen Augen ein Porträt einer anderen Person.",
    "Versuche, mit den Füßen zu klatschen.",
    "Iss einen Esslöffel Ketchup.",
    "Imitiere eine berühmte Person deiner Wahl.",
    "Versuche, eine Minute lang wie ein Huhn zu laufen.",
    "Mache ein Musikvideo zu einem beliebigen Song.",
    "Schreibe mit deinem Fuß eine Nachricht auf ein Blatt Papier.",
    "Versuche, für eine Minute auf deinen Händen zu laufen.",
    "Trage für 10 Minuten eine Augenbinde.",
    "Mache für eine Minute lang einen Hampelmann.",
    "Mache einen Handstand gegen eine Wand und halte ihn für 30 Sekunden.",
    "Versuche, ohne den Boden zu berühren, von einem Ende des Raumes zum anderen zu kommen.",
    "Mache eine Minute lang einen Bauchtanz.",
    "Versuche, ein Stück Papier mit dem Mund aufzuheben.",
    "Versuche, den Raum mit verbundenen Augen zu durchqueren.",
    "Mache einen Rap über einen Gegenstand im Raum.",
    "Mache einen Hampelmann, während du einen Becher Wasser hältst, ohne etwas zu verschütten.",
    "Stelle eine Statue für eine Minute dar.",
    "Führe eine Szene aus deinem Lieblingsfilm nach.",
    "Male ein Bild von einer Katze auf ein Blatt Papier, ohne hinzuschauen.",
    "Tausche ein Kleidungsstück mit der Person gegenüber von dir.",
    "Versuche, ein Lied zu singen, während du gurgelst.",
    "Baue einen Turm aus 5 oder mehr Gegenständen in dem Raum.",
    "Versuche, einen Apfel nur mit den Zähnen zu schälen.",
    "Mache eine Vorführung deines besten Tanzmoves.",
    "Mache eine Minute lang Seilspringen.",
    "Halte eine Eiswürfel in der Hand, bis er vollständig geschmolzen ist.",
    "Laufe auf den Händen von einem Ende des Raumes zum anderen.",
    "Mache eine Minute lang Liegestütze.",
    "Versuche, mit einem Ball oder einem anderen Gegenstand zu jonglieren.",
    "Singe ein Lied bis zum Ende.",
    "Mache 10 Hampelmänner.",
    "Versuche, den nächsten Song, der abgespielt wird, zu erraten.",
    "Male ein Porträt von jemandem im Raum.",
    "Mach eine Minute lang einen Kopfstand.",
    "Erfinde eine neue Tanzbewegung und führe sie vor.",
    "Mache 10 Kniebeugen.",
    "Imitiere jemanden im Raum und die anderen müssen raten, wer es ist.",
    "Tanze eine Minute lang ohne Musik.",
    "Versuche, mit deinen Füßen zu klatschen.",
    "Mache eine Minute lang einen Hampelmann.",
    "Versuche, ein Stück Brot mit verbundenen Augen zu butteren.",
    "Laufe rückwärts um das Haus/die Wohnung.",
    "Mache einen Tierlaut deiner Wahl und die anderen müssen raten, welches Tier es ist.",
    "Lass dich von der Person rechts von dir schminken.",
    "Baue einen Turm aus allem, was du in der Küche finden kannst.",
    "Mache einen Handstand und zähle bis zehn.",
    "Versuche, ein Ei zu balancieren.",
    "Tanze den Macarena.",
    "Versuche, mit geschlossenen Augen eine Flasche Wasser zu trinken.",
    "Rufe jemanden an und singe ihm ein Lied vor.",
    "Lass jemanden ein „X“ auf deinem Gesicht malen.",
    "Stehe auf einem Bein und hüpfe fünf Mal.",
    "Mache ein Selfie und poste es auf Instagram.",
    "Halte eine kurze Rede über einen Gegenstand im Raum.",
    "Mache einen Stuhltanz.",
    "Lass dich von der Person links von dir füttern.",
    "Probiere, 30 Sekunden lang zu jonglieren.",
    "Führe eine Yoga-Pose deiner Wahl aus.",
    "Mache den Moonwalk.",
    "Versuche, ohne deine Hände zu klatschen.",
    "Schreibe ein kurzes Gedicht über etwas im Raum.",
    "Mache eine Minute lang Seilspringen.",
    "Versuche, mit geschlossenen Augen ein Glas Wasser zu trinken.",
    "Imitiere einen Affen so gut wie möglich.",
    "Lass jemanden ein Bild auf deinem Rücken malen und rate, was es ist.",
    "Versuche, ein Stück Papier zu zerkleinern und in einen Becher zu werfen.",
    "Zeige deinen besten Tanzmove.",
    "Baue aus allem, was du im Raum findest, eine kleine Festung.",
    "Versuche, eine Minute lang auf deinen Händen zu laufen."
];



