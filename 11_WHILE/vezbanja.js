//Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke.

let a = 2;
let b = 4;
let c = 5;
let d = 15;
let d2 = 0;
let d5 = 0;
let d_o = 0;

if(a%2==0){
    d2++;
    if(a%5==0){
        d_o++;
        d5++;
    }
}
 else if(a%5==0) {
    d5++;
 }



 if(b%2==0){
    d2++;
    if(b%5==0){
        d_o++;
        d5++;
    }
}
 else if(b%5==0) {
    d5++;
 }



 if(c%2==0){
    d2++;
    if(c%5==0){
        d_o++;
        d5++;
    }
}
 else if(c%5==0) {
    d5++;
 }



 if(d%2==0){
    d2++;
    if(d%5==0){
        d_o++;
        d5++;
    }
}
else if(d%5==0) {
    d5++;
}

console.log(`Deljivo sa 2 je ${d2} brojeva`);
console.log(`Deljivo sa 5 je ${d5} brojeva`);
console.log(`Deljivo i sa 2 i sa 5 je ${d_o} brojeva`);


//  Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

a = 121;
b = 26;
let razlika;

if (a>b){
    razlika = a - b;
    document.write(`<h1>Razlika brojeva ${a} i ${b} je ${razlika}</h1>`);
} else {
    razlika = b - a;
    document.write(`<h1>Razlika brojeva ${b} i ${a} je ${razlika}</h1>`);
}


// Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let n = 24;

if (n<=0){
    console.log(`Broj ${n} je manji ili jednak nuli, i njegov prethodnik je: ${n-1}`);
} else {
    console.log(`Broj ${n} je veci od nule, i njegov sledbenik je: ${n+1}`);
}

// Napisati program koji za uneta tri realna broja određuje zbir dva najveća.

a = 8;
b = 7;
c = 9;
let zbir;

if(a>b){
    if(b>c){
        zbir = a + b;
    } else {
        zbir = a + c;
    }
} else {
    zbir = b + c;
}

 console.log(`Zbir dva najveca broja je ${zbir}`);

//Napisati program kojim se unose dva pozitivna, cela broja a i b. Napisati program koji izračunava i štampa površinu jednakostraničnog trougla ako su brojevi jednaki (stranica je jednaka datim brojevima), odnosno površinu pravougaonika ako su brojevi različiti (stranice pravougaonika su jednake datim brojevima).

a = 4;
b = 4;
let p;

if (a == b) {
    p = Math.pow(a,2)*Math.sqrt(3)/4;
    console.log(`Povrsina jednakostranicnog trougla sa stranicom ${a} je ${p}`);
} else {
    p = a * b;
    console.log(`Povrsina pravouganika sa stranicama ${a} i ${b} je ${p}`);
}