// 1. Ispisati brojeve od 1 do 20
let w = 1;
while(w <= 20){
    console.log(w);
    w++;
}

for(i=1; i<=20; i++){
    console.log(i);
}

// 2. Ispisati brojeve od 20 do 1
for(i=20; i>=1; i--){
    console.log(i);
}

// 3. Ispisati parne brojeve od 1 do 20 
// 1. nacin
for(i=2; i<=20; i+=2){
    console.log(i);
}
// 2. nacin
for(i=1; i<=20; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15
for(i=5; i<=15; i+=5){
    console.log(i*2);
}

// 5. Odrediti sumu brojeva od 1 do n
let n=10;
let suma = 0;
for(i=1;i<=n;i++){
    suma+=i; 
}
console.log(`Suma je ${suma}`);

// 7. Odrediti proizvod brojeva od n do m

n = 2;
let m = 5;
let proizvod = 1;
for(i=n; i<=m; i++){
    proizvod*=i;
}
console.log(`Proizvod svih brojeva od ${n} do ${m} je ${proizvod}`);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

for(i=1;i<=3;i++){
    document.write(`<img src="slike/${i}.jpg">`);
}

// 8. Odrediti sumu kvadrata brojeva od n do m *

n = 3;
m = 6;
let sumaKvadrata = 0;
for(i=n; i<=m; i++){
    sumaKvadrata+=i*i;
}
console.log(`Suma kvadrata svih brojeva od ${n} do ${m} je ${sumaKvadrata}`);

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100

for(i=20;i<=100;i++){

}

// Ispisati prvih n parnih brojeva od 1 do 100;
n = 3;
i = 2;
br_parnih = 0;
while(br_parnih < n) {
    if(i%2==0){
        br_parnih++;
        console.log(`${br_parnih}. od ${n} je broj ${i}`); 
    }
    i++;
}


// Koliko neparnih brojeva ucestvuje u sumiranju dok su suma ne predje br. k

let k = 30;
suma = 0;
let br_brojeva = 0; // Pitam se, pitam 
let ii=1;

while (suma < k ) {
    if(ii%2!=0){
        suma+=ii;
        br_brojeva++;
    }
    ii++;
}

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv13 = 0;
for(i=5;i<150;i++){
    if(i % 13 == 0){
        deljiv13++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${deljiv13} brojeva koji su deljivi brojem 13`);
//13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 10;
m = 14;
let zbir = 0;
br_brojeva = 0;
for(i=n;i<=m;i++){
    zbir+=i;
    br_brojeva++;
}
console.log(`Aritmeticka sredina je: ${zbir/br_brojeva}`);
// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno


// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. 

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 23;
m = 53;
let counter=0;
suma = 0;
for(i=n;i<=m;i++){
    if(i % 10 == 4){
        counter++;
        suma+=i;
    }
}
console.log(`Ima ${counter} brojeva kojima je poslednja cifra 4`);
console.log(`Suma brojeva od ${n} do ${m} kojima je poslednja cifra 4 je ${suma}`);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 21;
m = 34;
let a = 3;
suma = 0;

for(i=n;i<=m;i++){
    if(i%a!=0){
        suma+=i;
    }
}
console.log(`Suma brojeva izmedju ${n} i ${m} koji nisu daljivi sa ${a} je ${suma}`);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k

k = 12;
brojac = 0;
for(i=1;i<=k;i++){
    if(k%i==0){
        brojac++;
    }
}
console.log(brojac);

// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let str = `<table border="1">`;
for(i=1; i<=6; i++){
    if(i%2 == 0){
    str +=
    `
        <tr class="roze">
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
    `;
    } 
    else{
    str +=
    `
        <tr>
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
    `;
    }
} 
str += `</table>`;

document.body.innerHTML += str;

// 21. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let lista = `<ul>`;
for(i=1;i<=10;i++){
    if(i%3==0){
        lista += `
        <li>
            <ul>
                <li>Element ${i}</li>
            </ul>
        </li>
        `;
    } else {
    lista += `<li>Element ${i}</li>`;
}
}
lista += `</ul>`;
document.write(lista);
/*
<ul>
    <li>Element 2</li>
    <li>Element 2</li>
    <li>
        <ul>
            <li>Element 3</li>
        </ul>
    </li>
</ul>
*/



// Domaci zadatak

// 1. Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.

for(i=1;i<=64;i++){
    if(Math.ceil(i/8)%2 == 0){
        if (i%8 == 0) {
            document.write(`<span class="white">${i}</span><br>`); //Ako ovde dodamo jos jedan <br> tag onda ce biti razmak izmedju redova, kao u slici na domacem zadatku.
        }
        else if(i%2 == 0) {
            document.write(`<span class="white">${i}</span>`);
        }
        else {
            document.write(`<span class="black">${i}</span>`);
        }
    }
    else {
        if (i%8 == 0) {
            document.write(`<span class="black">${i}</span><br>`); // Ako ovde dodamo jos jedan <br> tag onda ce biti razmak izmedju redova, kao u slici na domacem zadatku.
        }
        else if(i%2 == 0) {
            document.write(`<span class="black">${i}</span>`);
        }
        else {
            document.write(`<span class="white">${i}</span>`);
        }
    }
}

