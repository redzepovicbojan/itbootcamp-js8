
//  1. Zadatak 
 let sati = 19;
 let minuti = 16;

 let odPonoci = sati * 60 + minuti;
 console.log("Od ponoci je proslo " + sati + " sati i " + minuti + " minuta. ")
 console.log("Od ponoci je proslo " + odPonoci + " minuta");

 console.log("_____________________________________________________________________");
// 2. Zadatak

let min_od_ponoci = 125;
let sati2 = Math.floor(min_od_ponoci / 60);   //moze se koristiti i opcija: Math.floor(min_od_ponoci / 60);
let min2 = min_od_ponoci % 60;

console.log("Od ponoci je proslo " + min_od_ponoci + " minuta");
console.log("Od ponoci je proslo " + sati2 + " sati i " + min2 + " minuta.");

console.log("_____________________________________________________________________");

// 3. Zadatak
let cena = 1399;
let novcanica = 2000;

let kusur= novcanica - cena;


console.log("Cena robe je ukupno: " + cena);
console.log("Kurus koji treba da vratite kupcu je: " + kusur + " dinara.");

console.log("_____________________________________________________________________");

//  4.zadatak
var trenutno = new Date();   //Datum je objket koji sadrzi podatke o trenutom datumu i vremenu.
var mm = trenutno.getMinutes();
var hh = trenutno.getHours();

var minutes = hh * 60 + mm;

console.log("Od ponoci je proslo " + hh + " sati i " + mm + " minuta. Sto je ukupno " + minutes +" minuta." );

// 5. zadatak 

var dd = trenutno.getDate();
var mm = trenutno.getMonth() + 1;
var yyyy = trenutno.getFullYear();

console.log(dd+ "." + mm + "."  + yyyy);
console.log(yyyy+ "/" + mm + "/"  + dd);

document.getElementById("naslov").innerHTML = "Moja prva JS vezba " + dd + "." + mm + "."  + yyyy;

// 6. zadatak
 var unoseur = 150;
 var kurs = 117.2986;

 var din = unoseur * kurs;
 console.log("Po kursu Narodne banke Srbije za " + unoseur + " eura cete dobiti " + din + " dinara.");

 var unosDin = 13000;

 var eur = unosDin / kurs;
 console.log("Po kursu Narodne banke Srbije za " + unosDin + " dinara cete dobiti " + eur + " eura.");

 console.log("_____________________________________________________________________");
 //7. zadatak


 var posedEur = 12000;
 var kursEur = 117.2986;
 var kursDol = 110.8869;

 var eur_in_dol = posedEur * kursEur / kursDol;

 console.log("Kada hocemo da zamenimo " + posedEur + " eura, dobijamo " + eur_in_dol + " dolara.");

 // 8. zadatak 

var celzijus = 0;
var cel_u_far = celzijus * 1.8 + 32;
console.log(celzijus + " celzijusa je: " + cel_u_far + " forenhajta");

var cel_u_kel = celzijus + 273.15;
console.log(celzijus + " celzijusa je: " + cel_u_kel + " kelvina");

var farenhajt = 32;

var far_u_cel = (farenhajt - 32) / 1.8;
console.log(farenhajt + " farenhajta je: " + far_u_cel + " celzijusa");

var kelvin = 100;

var kel_u_cel = kelvin - 273.15;
console.log(kelvin + " kelvina je: " + kel_u_cel + " celzijusa");