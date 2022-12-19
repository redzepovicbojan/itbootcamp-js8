// Zadatak 1.
// ➢ Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
// vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u konzoli.
// Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst „Radno vreme još uvek nije počelo“.
// Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst „Radno vreme je već završeno“.

let vreme = new Date();
let sati = vreme.getHours();
let min = vreme.getMinutes();


if(sati >= 9 && sati < 17){
    console.log(`Cvecarki je ostalo radnog vremena jos: ${16-sati} h i ${60-min}`);
}
else if(sati < 9) {
    console.log(`Radno vreme još uvek nije počelo`);
} 
else{
    console.log(`Radno vreme je već završeno`);
}


console.log(`_______________________________`);
// Zadatak 2.
// ➢ Prilikom transporta buketa cveća u drugi grad, potrebno je platiti poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na cenu izračunate poštarine po sledećoj tarifi:
// ➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na pošiljku preko 2kg pošta daje popust od 10%.
// ➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika je cena poštarine bez popusta i sa popustom.
// Ispis treba da bude u formatu:
// Cena bez popusta je _____ dinara.
// Cena sa popustom je _____ dinara.

let g = 1500;
let cena = g * 5;
let cena_p;

if (g>=1000 && g<=2000){
    cena_p =cena * 0.95;
}
else if ( g>2000) {
    cena_p = cena * 0.9;
} else {
    cena_p = cena;
}

console.log(`Cena bez popusta je ${cena} dinara.`);
console.log(`Cena sa popustom je ${cena_p} dinara.`);
// Za posiljke ispod 1000g, nema popusta, pa ce da ispisuje istu cenu i sa popustom i bez popusta. 



console.log(`_______________________________________`);
// Zadatak 3.
// ➢ Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u radnji.
// ➢ Primer 1:
// ○ Broj ruža u cvećari 101
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po 5 ruža).
// ➢ Primer 2:
// ○ Broj ruža u cvećari 100
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po 4 ruže).

let brRuza = 1;
let brKupaca = 25;
let dokup;

if(brRuza%brKupaca > 0) {
    dokup = brKupaca - (brRuza%brKupaca);
}
else {
    dokup = brRuza%brKupaca;
}

let k = Math.ceil(brRuza/brKupaca);

console.log(`Broj ruža koje treba da dokupi je ${dokup} (kako bi svaki kupac dobio po ${k} ruže)`);


console.log(`_______________________________________`);
// Zadatak 4
// ➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m odredite sami.
// U konzoli ispisati:
// ● U prvom redu ispisati sumu
// ● U drugom redu ispisati broj brojeva
// ● U trećem redu ispisati proizvod sume i broja brojeva

let n = 4;
let m = 35;
let suma = 0;
let brojac = 0;

for(i=n;i<=m;i++){
    if(i%7==0 && i%2!=0){
        brojac++;
        suma+=i;
    }
}

//  U ovom slucaju od 4 do 35 To su brojevi 7, 21 i 35;
console.log(`Suma je: ${suma}`);
console.log(`Broj brojeva je: ${brojac}`);
console.log(`Proizvod sume i broja brojeva je: ${suma*brojac}`);


console.log(`_______________________________________`);
// Zadatak 5
// ➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i m).
// ➢ Rezultat računanja ispisati u konzoli.

n=23;
m=54;
let zbirParnih = 0;
let brojacPC3 = 0;

for(i=n;i<=m;i++){
    if(i%2==0 && i%3==0){
        zbirParnih+=i;
    }
    if(i%10 == 3) {
        brojacPC3++;
    }
}

//u ovom primeru parni i deljivi sa 3 su: 24 30 36 42 48 54
//u ovom primeru brojeva sa poslednjom cifrom 3 su: 23, 33,43,53  ukupno 4.

console.log(`Zbir parnih brojeva od n do m koji su deljivi sa 3 je: ${zbirParnih}`);
console.log(`Broj brojeva od n do m kojima je poslednja cifra 3 je ${brojacPC3} `);
console.log(`Njihova razlika je: ${zbirParnih-brojacPC3}`);