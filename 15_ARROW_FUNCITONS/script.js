//Imenovane funkcije: (function), ime, {param}, {return}
function sum(a, b) 
{
    return a + b;
}

// Anonimne funkcije
let suma = function(a,b)    //Anonimne f-je: (function), {param} {return}
{
    return a + b;
}

let rez = suma(1,2);
console.log(rez);

// Arrow funkcije
let suma2 = (a,b) => {
    return a + b;
}

let rez2 = suma2(6,5);
console.log(rez2);


let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

let echo = (s1, s2) => {
    let rezultat = s1 + ", " + s2;
    console.log(rezultat);
}

echo("Bojan", "Redzepovic");

// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 

let ispisHTML = (ime, prezime, godine) => {
    if (godine>=18){
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    } else {
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}

document.body.innerHTML += ispisHTML("Bojan", "Redzepovic", 30);
document.body.innerHTML += ispisHTML("Jelena", "Redzepovic", 23);
document.body.innerHTML += ispisHTML("Nikolaj", "Redzepovic", 1);


// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
    if(n % 2 != 0){
        return true;
    }
    else {
        return false;
    }
 }

 console.log(neparan(3));
 console.log(neparan(6)); 

 // Varijanta 5 = isto kao prethodna samo skraceno
 let neparan5 = (n) => {
    return (n % 2 == 1);
 }

console.log(neparan5(9));
console.log(neparan5(2));




// Varijanta 6 = isto kao 5 samo koristeci sojstva arrow funkcija
// 1. ako arrow f-ji prosledjujemo TACNO JEDAN parametar, onda ()  nisu potrebne
// 2. Ako se telo arrow f-je sastoji samo od return napredbe, ona nije obavezna

let neparan6 = n => (n%2==1);


console.log(neparan6(9));
console.log(neparan6(2));

 //let - unutar bloka
 //var - unutar funkcije

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a,b) => {
    if(a>b){
        return a;
    } else {
        return b;
    }
}
// Varijanta 2 Arrow f-je, ali sa skracenim zapisom:
let max2 = (a,b) => (a > b) ? a : b;


// Maksimum 4 broja
let maks4 = (br1,br2,br3,br4) => maks2(maks2(br1,br2),maks2(br3,br4));
let maks4a = (a,b,c,d) => maks2(maks2(maks2(a,b),c),d);

console.log(maks4(4,7,5,6));
console.log(maks4a(4,7,5,6));






//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = link => {
   document.write(`<img src="${link}">`);
}


// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let boja = color => {
    document.write(`<p style="color:${color}">Ovo je neki obojen tekst</p>`);
}





// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?


let sedmiDan = n => {
    if (n==1) {
        dan = "Ponedeljak";   
    } else if (n==2) {
        dan = "Utorak";
    } else if (n==3) {
        dan = "Sreda";
    } else if (n==4) {
        dan = "Cetvrtak";
    } else if (n==5) {
        dan = "Petak";
    } else if (n==6) {
        dan = "Subota";
    } else if (n==7 || n==0) {
        dan = "Nedelja";
    }
    console.log(dan);
}

sedmiDan(5);


let sedmiDan2 = n => n==1 ? "Ponedeljak" : n==2 ? "Utorak" : n==3 ? "Sreda" : n==4 ? "Cetvrtak" : n==5 ? "Petak" : n==6 ? "Subota" : n==7 ? "Nedelja" : n==0 ? "Nedelja" : "Unet pogresni broj"

console.log(sedmiDan2(3));
// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivTri = (n,m) => {
    let brojac = 0;
    let ispis = " ";
    for(i=n;i<=m;i++){
        if(i%3==0) {
            ispis = ispis + ", " + i;
            brojac++;
        }
    }
    console.log(`Svi brojevi od ${n} do ${m} koji su deljivi sa 3 su:${ispis}. To je ukupno ${brojac} brojeva.`);
}
deljivTri(3,52)


// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
    let sumiraj = (n,m) => {
        let suma = 0;
        for(i=n;i<=m;i++){
            suma+=i;
        }
        return suma;
    }

    console.log(sumiraj(1,10));

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let mnozi = (n,m) => {
    let proizvod = 1;
    for(i=n;i<=m;i++){
        proizvod*=i;
    }
    return proizvod;
}

console.log(mnozi(1,10));


// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let sredina = (n,m) => {
    let suma = 0;
    let brojac = 0;
    for(i=n;i<=m;i++){
        suma+=i;
        brojac++;
    }
    return(suma/brojac);
}

console.log(sredina(10,100));


// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.


let sredinaPC3 = (n,m) => {
    let suma = 0;
    let brojac = 0;
    for(i=n;i<=m;i++){
        if(i%10==3){
        suma+=i;
        brojac++;
        }
    }
    return(suma/brojac);
}

console.log(sredina(10,102));



//  Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let plata = (n,a,d) => {
    let ukupno = a;
    for(i=2;i<=n;i++){
        ukupno += (a+d*(i-1));
    }
    return ukupno;
}

console.log(plata(5,10000,5000));


function binary(decimal) {
	return decimal.toString(2);
}

console.log(binary(13));



var x =  3 % 4;
console.log(x);