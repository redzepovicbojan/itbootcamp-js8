// 1. Zadatak
// Napisati funkciju koja vraća aritmetičku sredinu brojeva koji nisu deljivi sa 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function prosek(n,m){
    let suma=0;
    let counter=0;
    for(i=n; i<=m; i++) {
        if(i%3!=0){
            suma+=i;
            counter++;
        }
    }
return suma/counter;
}

console.log(prosek(3,10));

let prosek2 = (n,m) => {
    let suma=0;
    let counter=0;
    for(i=n; i<=m; i++) {
        if(i%3!=0){
            suma+=i;
            counter++;
        }
    }
return suma/counter;
}

console.log(prosek(10,21));

// 2. Zadatak
// Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.

function ispis (broj, tekst){
    document.write(`<p style="font-size:${broj}px;">${tekst}</p>`);
}

ispis(20,"Funckija radi!");

let ispis2 = (broj, tekst) => document.write(`<p style="font-size:${broj}px;">${tekst}</p>`);

ispis2(10,"Jos jedna funkcija radi");

