import {Auto} from "./auto.js"; 

let a1 = new Auto("Audi", "bela", true);
console.log(a1);
console.log(a1._marka); // "Audi"
console.log(a1.marka); // undefined

let a2 = new Auto("Opel", "crvena", false);
console.log(a2);

// Klasa - sablon, korisnicki tip
// Objekat - instanca (realizacija) klase = promenljiva neke klase


a1.sviraj();
a2.sviraj();

a1._marka = "Škoda";
console.log(a1);

a1._marka = "";
console.log(a1);

a1.marka = "Peugeot"; // U pozadini, ovde se poziva
console.log(a1);

a1.marka = "";
a1.color = "zuta";
a1.haveRoof = false;
console.log(a1);
console.log(a1.marka + " " + a1.boja + " " + a1.imaKrov);
