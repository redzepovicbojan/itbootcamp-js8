// 1.  Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu


let i = 1;

while (i<=20)
{
    console.log(i);
    i++;
}

i = 1;
let poruka = "";
while (i<=20)
{
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);



/*

#    |    poruka    |     i
----------------------------
0    |     ""       |     1
1    |    "1 "      |     2
2    |    "1 2 "    |     3
...  |     ...      |    ...

*/


// 2. Ispisati brojeve od 20 do 1.
 i = 20;

while (i>=1)
{
    console.log(i);
    i--;
}

// drugi nacin
i=1;
while (i <= 20)
{
    console.log(21 - i);
    i++;
}

// 3.Ispisati parne brojeve od 1 do 20.

 i = 2;

while(i<=20)
{
    console.log(i);
    i += 2;
}

// 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n = 8;

i = 1;

while(i <= n)
{
    if(i%3 == 0) {
        document.write("<p style='color:red;'> Lorem ipsum </p>");
    }
    else if (i%3 == 1) {
        document.write("<p style='color:blue;'> Lorem ipsum </p>");
    }
    else {
        document.write("<p style='color:green;'> Lorem ipsum </p>");
    }
    i++;
}


i = 1;

while(i <= n)
{
    if(i%3 == 0) {
        document.body.innerHTML += "<p class='crvena'> Neki tekst </p>";
    }
    else if (i%3 == 1) {
        document.body.innerHTML += "<p class='plava'> Neki tekst </p>";
    }
    else {
        document.body.innerHTML += "<p class='zelena'> Neki tekst </p>";
    }
    i++;
}





// 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira


n = 6;
i = 1;
while (i<=n){
    if( i%2 == 0) {
        document.write("<img src='slika.jpg' width='100px' style='border: 3px solid black'/>");
    } else {
        document.write("<img src='slika.jpg' width='100px' style='border: 3px dotted green'/>");
    }
    i++;
}

// 6. Odrediti sumu brojeva od 1 do 100

i=1;
let suma=0;
while (i <= 100)
{
    suma += i; // suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

// 7. Odrediti sumu brojeva od 1 do n

i=1;
suma=0;
n=35
while (i <= n)
{
    suma += i; // suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);


// 8. Odrediti sumu brojeva od n do m


suma=0;
n=23;
let l=n;
let m=54;
while (n <= m)
{
    suma += n; // suma = suma + n;
    n++;
}
console.log(`Suma brojeva od ${l} do ${m} jednaka je ${suma}`);


// 9. Odrediti proizvod brojeva od n do m


let proizvod = 1;
n=3;
i=n;
m=6;
while (i <= m)
{
    proizvod *= i; // suma = suma + i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednaka je ${proizvod}`);


// 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

let suma_p = 0;
let suma_n = 0;

n=3;
m=6;

i=n;

while (i <= m)
{
    if(i % 2 == 0){
        suma_p += i**2;
    } else (
        suma_n += i**3
    )
    i++;
}

console.log(`Suma kvadrada parnih brojeva od ${n} do ${m} je ${suma_p}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} je ${suma_n}`);


// 11. Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 12;
i=1;
let brojDelioca = 0;
while( i <= k)
{
    if(k % i == 0)
    {
        brojDelioca++;
    }
    i++;
}

console.log(`Broj delioca broja ${k} jednak je ${brojDelioca}`);


// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.


n=11;
i=2;
let broj;
while(i<n/2){
    if(n%i == 0){
        broj = "nijeProst";
        break;
    }
    i++;
}

if(broj == "nijeProst") {
    console.log(`Broj ${n} nije prost broj`);
}
else {
    console.log(`Broj ${n} je prost broj`);
}