let x = 5;
let y = 7;

if(x==y) 
{
    console.log("Jednake vrednosti");
}
else
{
    console.log("Različite vrednosti");
}
// Isto kao prethodni samo kontra pitanje.

if(x != y)
{
    console.log("Različite vrednosti");
}
else
{
    console.log("Jednake vrednosti");
}
// 1. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.
let proizvod = 105;

if(proizvod > 100)
{
    document.write("<p>Throw away</p>");
}
else
{
    document.write("<p>Pack up</p>");
}

// 2. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.
let temp = -5;
if(temp >= 0) {
    document.write("<p style='color: red;'>Temperatura u plusu</p>");  
}
else {
    document.write("<p style='color: blue;'>Temperatura je u minusu</p>");
}

// 3. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 
let pol = 'n';
if(pol == 'm') {
    document.write("<img src='https://cdn-icons-png.flaticon.com/512/0/93.png' width='50px'>");
}
else {
    document.write("<img src='https://cdn-icons-png.flaticon.com/512/65/65581.png' width='50px'>");
}

// 4. U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne. Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

let vreme = new Date();
let sati = vreme.getHours();
if(sati > 12){
    document.write("<p>Trenutno je podne</p>");
}
else{
    document.write("<p>Trenutno je jutro</p>");
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.
let godina = vreme.getFullYear();
let rodjenje = 2004;
if(godina - rodjenje >= 18){
    document.write("<p>Osoba je punoletna</p>");
}
else {
    document.write("<p>Osoba je maloletna</p>");
}

// 6. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let b1 = 121;
let b2 = -234;
let b3 = 133;

let maks = b1;
if(maks < b2) {
    maks = b2;
}
if(maks < b3) {
    maks = b3;
}
document.write(`<p>Maksimum je ${maks}</p>`);

// Sa minimuom
let mini = b1;
if(mini > b2){
    mini = b2;
} 
if(mini > b3){
    mini = b3;
}
document.write(`<p>Minimum je ${mini}</p>`);

