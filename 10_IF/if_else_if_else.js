let br = "k";

if (br < 0) {
    console.log("Broj je manji od nule");
}
else if (br == 0) {
    console.log("Broj je jednak nuli");
}
else if(br > 0) {
    console.log("Broj je veci od nule");
}
else {
    console.log("Ovo nije broj");
}

console.log("Kraj grananja");

// Ako nešto može da pripada na dva mesta, onda će ići IF - IF - iF
// Ako nešto pripada samo jednom, onda će ići IF - ELSE IF - ELSE


// 7. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let time = new Date();
let dan = time.getDay();

if( dan == 6) {
    console.log("Danas je vikend")
}
else if(dan == 0){
    console.log("Danas je vikend")
}
else {
    console.log("Danas je radni dan")
}

// 8. Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 90;
if(poeni > 90){
    document.write("<p>Ucenik je dobio ocenu 10<p/>");
}
else if(poeni> 80){
    document.write("<p>Ucenik je dobio ocenu 9<p/>");
}
else if(poeni> 70){
    document.write("<p>Ucenik je dobio ocenu 8<p/>");
}
else if(poeni> 60){
    document.write("<p>Ucenik je dobio ocenu 7<p/>");
}
else if(poeni> 50){
    document.write("<p>Ucenik je dobio ocenu 6<p/>");
}
else {
    document.write("<p>Ucenik nije polozio<p/>");
}

// 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati,u ostalim slučajevima ispisati dobro veče.

let sati = time.getHours();

if ( sati < 12) {
    document.write("<p>Dobro jutro<p/>");
}
else if (sati < 18) {
    document.write("<p>Dobar dan<p/>");
}
else {
    document.write("<p>Dobro vece<p/>")
}



// 10. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

if ( sati < 9) {
    document.write("<p>Firma ne radi<p/>");
}
else if (sati >= 17) {
    document.write("<p>Firma ne radi<p/>");
}
else {
    document.write("<p>Firma radi, dobro dosli!<p/>")
}


// 11. Za unet sat početka i sat kraja radnog vremena dva lekara, ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.

let l1_od = 8;
let l1_do = 15;
let l2_od = 15;
let l2_do = 20;

let poklapa;

if (l2_od >  l1_do){
    document.write("<p>Ne, radno vreme se ne poklapa!<p/>");
}
else if(l1_od > l2_do){
    document.write("<p>Ne, radno vreme se ne poklapa!<p/>")
}
else {
    document.write("<p>Da, radno vreme se poklapa!<p/>");
}

// 12. Za uneti broj ispitati da li je paran ili nije.

br = 13;

let ost = br % 2;

if (ost== 0 ){
    console.log("Paran broj");
}
else{
    console.log("Neparan broj");
}

// 13. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

br = 18;

let ostatak = br % 3;

if (ostatak== 0 ){
    console.log("Deljiv sa 3");
}
else{
    console.log("Nije deljiv sa 3");
}

// 14. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let n1 = 3;
let n2 = 3;
let razlika;

if (n1 < n2){
    razlika = n2 - n1;
    document.write(razlika);
} else if (n2 < n1) {
    razlika = n1 - n2;
    document.write(razlika);
}
else {
    document.write("Ovo su isti brojevi");
}

// 15. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.




//16



//17 

let nr = 10;
if(Number.isInteger(nr)) {
    console.log("Ceo broj");
}
else {
    console.log("decimilan broj");
}