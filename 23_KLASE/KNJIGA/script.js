import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga ("Mali princ", "Antoan de Sent Egziperi", 2016, 112, 499);

let k2 = new Knjiga ("Čovek po imenu Uve", "Fredrik Bakman", 2017, 360, 1099);

let k3 = new Knjiga ("Forest Gamp", "Vinston Grum", 1970, 1240, 8799);

let k4 = new Knjiga ("Životinjska farma", "Džordž Orvel", 1945, 160, 599);

// Napraviti niz od barem tri knjige
let knjige = [k1, k2, k3, k4];

// Ispisati sve autore kojima je ime dugačko.
knjige.forEach( knjiga => {
    if(knjiga.dugackoIme()){
        knjiga.stampaj();
    }
});

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
knjige.forEach( knjiga => {
    if(knjiga.obimna() && knjiga.skupa()){
        knjiga.stampaj();
    }
})

// Napraviti sledeće funkicje kojima se prosleđuje niz knjiga:
// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga
let ukupnaCena = knjige => {
    let suma = 0;
    knjige.forEach( knjiga => {
        suma+=knjiga.cena;
    });
    return suma;
}
console.log(ukupnaCena(knjige));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige
let prosecnaCena = knjige => {
    return ukupnaCena(knjige)/knjige.length;
}
console.log(prosecnaCena(knjige));

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige 
let prosecnaStranica = knjige => {
    let ukBrStrana = 0;
    knjige.forEach( knjiga => {
        ukBrStrana += knjiga.brojStrana;
    });
    return ukupnaCena(knjige)/ukBrStrana;
}
console.log(prosecnaStranica(knjige));