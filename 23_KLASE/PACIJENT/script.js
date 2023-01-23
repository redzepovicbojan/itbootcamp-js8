import {Pacijent} from "./pacijent.js";

let p1 = new Pacijent("Milica", 1.65, 45);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent("Milen", 1.69, 70);
let p4 = new Pacijent("Ana", 1.73, 70);

let pacijenti = [p1, p2, p3, p4];

// p1.stampaj();
// p2.stampaj();
// p3.stampaj();
// p4.stampaj();

// console.log(p1.bmi());
// console.log(p2.bmi());
// console.log(p3.bmi());

// console.log(p1.kritican());
// console.log(p2.kritican());
// console.log(p3.kritican());

// Ispisati podatke o pacijentu sa najmanjom tezinom.
let btnMinTezina = document.querySelector("#racunajMinTezinu");
btnMinTezina.addEventListener( "click", () => {
    let minTezPac = pacijenti[0];
    pacijenti.forEach( p => {
        if(p.tezina < minTezPac.tezina){
            minTezPac = p;
        }
    });
    minTezPac.stampaj();

    let pMinTezina = document.getElementById("minTezina");
    pMinTezina.innerHTML = minTezPac.stampajListu();
});

let btnNajveciBmi = document.querySelector("#racunajNajveciBmi");
btnNajveciBmi.addEventListener( "click", () =>{
    let najveciBmi = pacijenti[0];
    pacijenti.forEach( p => {
        if(p.bmi() > najveciBmi.bmi()){
            najveciBmi = p;
        }
    });

    najveciBmi.stampaj();
    let pNajveciBmi = document.querySelector("#najveciBmi");
    pNajveciBmi.innerHTML = najveciBmi.stampajListu();
});

let btnPacSLovoA = document.querySelector("#sviPacSlovoA");
let pacSlovoA = document.querySelector("#slovoA");
btnPacSLovoA.addEventListener( "click", () => {
    pacijenti.forEach( p => {
        if(p.ime.toLowerCase().includes("a")){
            pacSlovoA.innerHTML += p.stampajListu();
        }
    });
});



// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let suma = 0;
    let br;
    niz.forEach(p => {
        suma += p.visina;
    });
    return suma / niz.length;
}
console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector("#avgVisina");
divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je ${srednjaVisina(pacijenti)}`;







