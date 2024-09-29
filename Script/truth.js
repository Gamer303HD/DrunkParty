var list = 0;
var Selectquestion = 1;
var colorswitch = 0;
var textmessage = document.getElementById("text");
var numbers = document.getElementById("numbers");
var maxcolor = 1;
var mincolor = 5;

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Press Me To Begin";
    const speed = 100; // Geschwindigkeit der Animation in Millisekunden

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
    console.log("was geht");
    textmessage.innerHTML = fragen[Selectquestion];
    Selectquestion++;
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
    "Wenn du etwas bestimmtes von jemandem anderen aus der Gruppe haben könntest – was würdest du dir nehmen wollen?",
    "Würdest du jemandem aus der Gruppe für 100 € eine runter hauen?",
    "Hast du schon mal was kaputt gemacht und es vertuscht? Was?",
    "Hast du schon mal die Zahnbürste eines anderen Menschen benutzt?",
    "Hat jemand aus der Gruppe schon mal dein Vertrauen missbraucht?",
    "Hast du schon mal das Vertrauen einer Person aus dieser Gruppe missbraucht?",
    "Hast du mal einen Verweis bekommen und warum?",
    "Welches Kompliment bekommst du besonders häufig?",
    "Was ist das Peinlichste, was dir in der Öffentlichkeit passiert ist?",
    "Was ist das Gemeinste, was du zu jemandem gesagt hast?",
    "Welche Person hast du als letztes geküsst?",
    "Hast du schon mal jemanden aus dieser Gruppe geküsst?",
    "Welche Person bereust du geküsst zu haben?",
    "Welches Vorurteil haben andere über dich?",
    "Was glauben andere würdest du nie machen – aber du hast es dennoch getan?",
    "Warum ist deine letzte Beziehung zerbrochen?",
    "Hast du schon mal jemanden aus dieser Gruppe ausspioniert (real life oder im Internet)?",
    "Was war die dümmste Ausrede, die du mal benutzt hast?",
    "Hast du dir deine BFF oder besten Kumpel schon mal in Unterwäsche vorgestellt?",
    "Wer im Raum glaubst du hat am längsten nicht geduscht?",
    "Was ist das lustigste Gerücht was du je über dich selbst gehört hast?",
    "Mit wem im Raum lästerst du am häufigsten über andere Personen im Raum?",
    "Mit wem im Raum triffst du dich nur, weil er*sie zur Gruppe dazu gehört?",
    "Wer im Raum hat in deinen Augen den schlechtesten Style?",
    "Wer im Raum hat in deinen Augen den besten Style?",
    "Was war die letzte Lüge, die du erzählt hast?",
    "Mit welcher Person aus dieser Runde könntest du ab sofort und für immer aufhören zu reden und es würde dir nicht viel ausmachen?",
    "Welches Gesetz sollte es deiner Meinung nach geben?",
    "Was an dir findest du selbst eklig?",
    "Wer hat dir zuletzt einen Korb gegeben?",
    "Wem aus dieser Runde stehst du besonders nahe?",
    "Wen aus dieser Runde würdest du gern besser kennen (lernen)?",
    "Mit wem aus dieser Runde würdest du verreisen?",
    "Schummelst du bei deiner Größe?",
    "Hast du schon mal Kondome größer gekauft, als du brauchst?",
    "Wie oft wäscht du deinen BH?",
    "Was findest du lustig obwohl es total geschmacklos ist?",
    "Wurdest du schon mal von jemandem betrogen?",
    "Flext du, wenn du vor dem Spiegel stehst?",
    "Hattest du schon mal ein übersinnliches Erlebnis?",
    "Welche alte Person findest du hot?",
    "Musstest du schon mal in der Schule kotzen?",
    "In welchem Alter hast du das erste Mal Alkohol getrunken?",
    "Welche Geschichte/Lüge hast du mal erzählt nur um cooler zu wirken?",
    "An welchem Körperteil / welcher Stelle wirst du besonders gern geküsst?",
    "An welchem Ort in der Schule hast du schon mal rumgemacht?",
    "Wen aus der Runde würdest du NIEMALS daten wollen?",
    "Welches Gerücht über dich stimmt?",
    "Warst du schon mal schockverliebt und in wem?",
    "Stehst du heimlich auf jemanden in dieser Runde?",
    "Bewerte alle in der Runde auf einer Skala von 1 bis 10.",
    "Was hast du als Letztes deiner Mutter geschrieben?",
    "Wen aus der Runde hast du schon mal angelogen?",
    "Was ist die Lieblingsfigur deiner Kindheit?",
    "Wie nennen dich deine Eltern/ Was ist dein Spitzname zuhause?",
    "Wie viele Menschen haben dich schon nackt gesehen? Familie zählt nicht.",
    "Was machst du, wenn du sexy wirken willst – vormachen, bitte!",
    "Mach ein Ranking der 10 (deiner Meinung nach) hottesten Jungs/Mädchen der Schule.",
    "Hast du schon mal was geklaut?",
    "Wen hast du schon mal vorgegeben zu mögen – obwohl du ihn/sie total doof findest?",
    "Würdest du dein Handy (ohne Lock und es zu löschen) für 20.000 Euro hergeben?",
    "Welchen (dummen) Trend hast du mitgemacht – obwohl du es selbst gar nicht so geil fandest?",
    "Was glaubst du: Welchem Tier siehst du ähnlich?",
    "Für welches Produkt würdest du dich 1 Stunde in eine Warteschlange stellen?",
    "Welchen Vornamen hättest du gern?",
    "Wenn du einen Tag lang eine andere (echte Person oder fiktive Figur) sein könntest – wen würdest du wählen?",
    "Wem aus der Runde schickst du die meisten Nachrichten?",
    "Wer aus der Runde kennt dich am besten?",
    "Was ist das Ekligste, was du je gegessen hast?",
    "Hast du schon mal versucht abzunehmen?",
    "Welche (peinliche) Aktion hast du schon mal gebracht, um jemanden auf dich aufmerksam zu machen?",
    "Was ist das Mutigste, was du bisher im Leben getan hast?",
    "Welcher berühmten Persönlichkeit würdest du a) ein Kompliment machen oder b) gern die Meinung sagen?",
    "Was machst du ständig – obwohl du es NULL kannst?",
    "Was ist das schlimmste Gerücht, das du über dich selbst gehört hast?",
    "Was ist das Peinlichste, das du mal gemacht hast, um jemanden zu beeindrucken?",
    "An welchen Körperstellen bist du kitzelig?",
    "Wie jung oder maximal wie alt dürfte jemand sein, damit du ihn/sie datest?",
    "Hast du schon mal bezüglich deines Alters gelogen und warum?",
    "Welchen Star finden alle anderen toll – du aber nicht?",
    "Was du schon mal in deine*n Lehrer*in oder Chef*in verliebt?",
    "Hast du noch Gefühle für dein*n Ex?",
    "Was ist das schlimmste Foto/Video, das von dir existiert?",
    "Wie viele Fotobearbeitungs-Apps hast du auf deinem Telefon?",
    "Bei welcher TikTok Challenge hast du schon mal mitgemacht?",
    "Wenn du eine Sache in deinem Leben ändern könntest – was wäre das?",
    "Was war der bisher schönste Tag deines Lebens?",
    "Wie viele Menschen hast du schon geknutscht?",
    "Was kannst du bei einem Date gar nicht ab?",
    "Wen aus der Runde würdest du nach einem Unfall als erstes anrufen?",
    "Worüber lügst du deine Eltern ständig an?",
    "Wen aus der Runde würdest du heiraten?",
    "Welchen Song magst du – obwohl du die Band/Sängerin bzw. den Sänger voll doof findest?",
    "Würdest du dich trauen in den „Squid Games“ mitzumachen?",
    "Was würdest du nicht mal für 1 Million Euro machen?",
    "Was war das letzte YouTube Video, das du angeguckt hast?",
    "Hast du jemanden aus der Gruppe schon mal eine Nachricht geschickt, während du auf dem Klo gesessen hast?",
    "Welches Körperteil magst du gar nicht an dir?",
    "Was ist deine peinlichste Kindheits-Erinnerung?",
    "Glaubst du an Himmel und Hölle?",
    "Welchen schlimmen Ratschlag hast du jemand anderem schon mal gegeben?",
    "Welchen ungewöhnlichen oder ekligen Geruch findest du heimlich gut?",
    "Hast du schon mal über eine Beauty-OP nachgedacht?",
    "Pinkelst du unter der Dusche?",
    "Was denken andere von dir, das aber gar nicht stimmt?",
    "Mit wem hattest du den (bis jetzt) besten Kuss deines Lebens?",
    "Glaubst du an Aliens?",
    "Glaubst du an Geister?",
    "Für was fühlst du dich schuldig?",
    "Was ist das Peinlichste, das du mal zu einem/einer Fremden gesagt hast?",
    "Welche drei Wünsche würdest du dir gern erfüllen?",
    "Wenn du wählen könntest: Wer sollte Bundeskanzler*in sein? Jede Person ist erlaubt – auch fiktive Figuren aus Filmen und Serien.",
    "Wenn du plötzlich eine Million Euro hättest – wie würdest du sie ausgeben?",
    "Was würdest du (illegales) machen, wenn du wüsstest, dass du dafür nicht bestraft wirst?",
    "Welchen Star hättest du gern als beste*n Freund*in?",
    "Findest du, dass Partner*innen die betrügen eine zweite Chance verdient haben?",
    "Wurdest du schon mal irgendwo rausgeworfen & wo?",
    "Hast du schon mal gepupst und es auf jemand anderen geschoben?",
    "Hattest du schon mal ein übersinnliches Erlebnis & was?",
    "Mit welchem Menschen (real oder fiktional) würdest du gern für einen Tag das Leben tauschen?",
    "Wenn du dir deinen Namen selbst aussuchen könntest, wie würdest du heißen?",
    "Auf welchen Menschen in deinem Leben bist du neidisch?",
    "Welchen Menschen magst du nicht, aber du tust so, als ob ihr Freunde wärt?",
    "Erzähle genau, wie dein erster Kuss ablief.",
    "Was soll mal auf deinem Grabstein stehen?",
    "Welches Geheimnis hattest du als Kind vor deinen Eltern?",
    "Was war der Grund für den bisher größten Streit mit deinen Eltern?",
    "Was ist das Ekligste, was du jemals gegessen hast?",
    "Hast du schon mal die Arbeit von jemand anderen sabotiert?",
    "Was ist das Peinlichste, was dir in der Öffentlichkeit passiert ist?",
    "Hast du Fake Accounts auf den sozialen Medien, um unbemerkt andere auszuspionieren?",
    "Hast du schon mal jemand anderen bei der Polizei verpfiffen oder angezeigt?",
    "Musste schon mal der Notarzt wegen dir kommen?",
    "Hast du schon mal was richtig Teures kaputt gemacht & was?",
    "Was ist das Gemeinste, was du mal zu jemand anderem gesagt hast?",
    "Was ist das Gemeinste, was du jemals über jemand anderen erzählt hast?",
    "Was machst du total gern, aber du würdest es nie vor jemanden machen, auf den du stehst?",
    "Wer/Wie alt ist die älteste Person, mit der du ein Date hattest?",
    "Mit wem hattest du den (bisher) schlechtesten Kuss deines Lebens?",
    "Welchen Film magst du – aber andere finden ihn doof?",
    "Welche Verschwörungstheorie stimmt deiner Meinung nach?",
    "Wann und wofür hast du dich zuletzt entschuldigen müssen?",
    "Hast du schon mal in einer Beziehung betrogen?",
    "Auf welche App/Website verbringst (zu) viel Zeit?",
    "Wie jung dürfte ein Date von dir sein?",
    "Wer ist dein Lieblings-Familien-Mitglied?",
    "Wovor hast du in einer Beziehung am meisten Angst?",
    "Was nervt dich am meisten an der Person links von dir?",
    "Hast du schon mal was aus der Schule/von der Arbeit geklaut?",
    "Was bereust du im Leben am meisten?",
    "Wen würdest du NIEMALS nackt sehen wollen?",
    "Wen würdest du unbedingt gern mal nackt sehen?",
    "Hast du schon mal ein Geschenk weiter geschenkt?",
    "Was ist deine größte Unsicherheit?",
    "Hast du auch Fake-Marken-Klamotten oder Handtaschen?",
    "Für welchen Gegenstand hast du Gefühle?",
    "Wen in diesem Zimmer würdest du bei einer Zombie-Apokalypse zuerst retten?",
    "Welchen Job könntest du für kein Gehalt auf der Welt machen?",
    "Welches Körperteil/welche Körperregion findest du an dir gar nicht schön?",
    "Welches Körperteil/welche Körperregion findest du an dir total schön?",
    "Wann und wem hast du zuletzt einen Korb gegeben?",
    "Hast du schon mal zwei Leute gleichzeitig gedatet?",
    "Was ist dein peinlichstes Kleidungsstück?",
    "Was wäre ein absolutes No-Go bei einem Date?",
    "Wer war deine Kindheits-Liebe?",
    "Würdest du deine Kindheits-Liebe heute auch noch daten wollen?",
    "Hattest du schon mal einen One-Night-Stand?",
    "Wen aus dieser Runde würdest du als erstes anrufen, wenn du verhaftet worden wärst?",
    "Dank welcher Lüge hast du schon mal ein bestimmtes Ziel erreicht?",
    "Hast du schon mal so getan, eine Nachricht NICHT erhalten zu haben, um einem Problem aus dem Weg zu gehen?",
    "Hast du schon mal bei jemand anderem zu Hause in Schränken und Schubladen herumspioniert?",
    "Was denkst du über die Eltern deines Schatzes?",
    "Welche Eigenschaft findest du an deinem Schatz besonders toll – welche nicht?",
    "Was hat dich zuletzt so richtig wütend gemacht?",
    "Was ist deine schlimmste Schul-Erinnerung/Erfahrung?",
    "Wenn dein Zuhause brennen würde, welche 3 Dinge würdest du retten? (alle Lebewesen im Haus sind schon in Sicherheit)",
    "Welchen Anmachspruch hast du schon benutzt?",
    "Hast du schon mal „Ich liebe dich“ gesagt – und es gar nicht ernst gemeint?",
    "Mit wem aus der Runde würdest du deine Zahnbürste teilen?",
    "Welchen furchtbaren oder geschmacklosen Witz findest du total lustig?",
    "An welchem ungewöhnlichen Ort musstest du mal pinkeln?",
    "Wer ist deiner Meinung nach die Diva eurer Gruppe?",
    "Bei welcher Lüge wurdest du zuletzt erwischt?",
    "Welche Person hast du zuletzt auf Insta & Co. ausspioniert?",
    "Wie viele Tage hintereinander hast du schon mal nicht geduscht?",
    "Welches Gerücht hast du weitererzählt?",
    "Welchen Star findest du doof und warum?",
    "Was ist das Dümmste, für das du jemals Geld ausgegeben hast?",
    "Bei welchem Film hast du zuletzt geheult?",
    "Was ist das Letzte, wonach du gegoogelt hast?",
    "Hast du schon mal etwas weiter gegessen, das dir auf den Boden gefallen ist?",
    "Wie hast du für deinen ersten Kuss geübt?",
    "Schläfst du noch mit Kuscheltieren?",
    "Wer aus dieser Runde ist deiner Meinung nach besonders schlecht angezogen?",
    "Worüber denkst du nach, wenn du auf der Toilette sitzt?",
    "Welche Nachricht hast du zuletzt geschrieben – und an wen?",
    "Was ist das Dümmste, was du je getan hast?",
    "Was versteckst du in deinem Zimmer, von dem deine Eltern niemals erfahren dürfen?",
    "Hast du schon mal einen Liebesbrief an jemanden geschrieben? Wenn ja, an wen?",
    "Wenn du einen Song für den Rest deines Lebens hören müsstest, welcher Track wäre das?",
    "Was machst du heimlich vor dem Spiegel, wenn keiner zuschaut?",
    "Hast du schon mal jemanden anderen für etwas beschuldigt, obwohl DU schuld warst?",
    "Mit wem aus dieser Runde würdest du gern mal das Leben tauschen und warum?",
    "Welchen Spitznamen hattest du von deinen Eltern oder Großeltern als Kind?",
    "Wie viele Selfies nimmst du auf, bevor dir endlich mal eins gefällt?",
    "Was würdest du eher trinken: Urin, der nach Orangensaft schmeckt, oder Orangensaft, der nach Urin schmeckt?",
    "Von wie vielen Jungs/Mädchen hast du schon einen Korb gekriegt?",
    "Hast du schon mal etwas bescheuertes gemacht oder ausprobiert, nur um cooler zu wirken? Was?",
    "Was ist dein peinlichster Lieblings-Song?",
    "Wer hat dir den schlimmsten Liebeskummer bereitet?",
    "Guckst du in die Kloschüssel, bevor du spülst?",
    "Hast du schon mal Chat-Verläufe mit einer Person in diesem Raum gescreenshottet und an jemand anderen weitergeschickt?",
    "Wie viele Tage hast du schon mal nicht geduscht?",
    "Hast du Bilder von einer Person in diesem Raum auf deinem Handy, ohne dass er/sie davon weiß?",
    "Hast du schon mal eine Nachricht von jemanden aus dieser Runde absichtlich ignoriert?",
    "Sage jedem in dieser Runde eine Sache, die er*sie an sich unbedingt ändern muss!",
    "Wann warst du das letzte Mal neidisch und warum?",
    "Würdest du jemanden daten, der fünf Jahre älter ist als du?",
    "Würdest du mit jemandem rummachen, den du gerade erst kennengelernt hast?",
    "Würdest du jemanden daten, der drei Köpfe kleiner ist als du?",
    "Worauf guckst du zuerst, wenn du jemanden kennenlernst?",
    "Hast du schon mal ein sexy Bild von dir verschickt?",
    "Was war dein schönstes Date?",
    "Was ist das Peinlichste, das dir jemals vor deinen Eltern passiert ist?",
    "Du bist aktuell verliebt? Ist er*sie anwesend?",
    "Was war das Mutigste, das du jemals gemacht hast?",
    "Welche nervige Angewohnheit bekommst du nicht los?",
    "Was würdest du gerne ausprobieren, traust dich aber nicht?"
];

for (let i = 0; i < fragen.length; i++) {
    console.log(fragen[i]);
    list = list + 1;
}
