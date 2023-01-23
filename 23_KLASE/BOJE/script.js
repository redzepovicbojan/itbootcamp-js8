import { Boje } from "./boje.js";

let boja1 = new Boje (400, 59, 68);
let boja2 = new Boje (540, 90, 95);
let boja3 = new Boje (570, 86, 95);
let boja4 = new Boje (400, 59, 68);

let boje = [boja1, boja2, boja3, boja4];

// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
let ispitajSlicnost = (b1, b2) => {
    return b1.talasnaDuzina == b2.talasnaDuzina && b1.zasicenje == b2.zasicenje && b1.intenzitet == b2.intenzitet;
};
console.log(ispitajSlicnost(boja1, boja2));
console.log(ispitajSlicnost(boja1, boja4));

// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
function srednjaTalasnaDuzina(boje) {
    let suma = 0;
    boje.forEach(element => {
        suma+=element.talasnaDuzina;
    });
    return suma / boje.length;
}

console.log(srednjaTalasnaDuzina(boje));