// Funkcije
console.log(`Funkcije`);
function zdravo(){
    console.log(`Zdravo!!!`);
}
zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i=1;i<=5;i++){
    zdravo(); //Poziva funkciju onoliko puta koliko se izvrsi for petlja
}

/////////////////////////////////////////////////////

function hello(name){
    console.log(`Hello ${name}`);
}

hello("Jelena");
hello("Stefan");
hello("Bojan");

let ime = "Zlatko";
hello(ime);


//////////////////////////////////
function hello_full_name(ime, prezime){
    console.log(`Hello ${ime} ${prezime}`);
}
hello_full_name("Bojan", "Redzepovic");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im,pr);

//////////////////////////////////

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boji_paragraf(boja){
    document.write(`<p style="color:${boja}">Obojeni tekst</p>`)
}

boji_paragraf("pink");
boji_paragraf("orange");

//////////////////////////////////

// 2. Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(x,y){
    console.log(x+y);
}

zbir(4,5);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(link){
    document.write(`<img src="${link}">`);
}

slika("https://itbootcamp.rs/wp-content/uploads/2018/03/logo_itbootcamp_300x140.png");



// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function font(h){
    document.write(`<p style="font-size:${h}px">velicine fontova</p>`);
}
font(45);

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function recenice(velicina){
    for (i=velicina;i<=velicina+4;i++){
        document.write(`<p style="font-size:${i}px">Razlicite velicine fontova</p>`);
    }
}
recenice(10);



// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
 function neparan(n) {
    if(n%2 != 0){
        return "neparan broj";
    }
    else {
        return "paran broj";
    }
 }

 let tekst = neparan(11);
 console.log(tekst);
 document.write(tekst);

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
    if(br1>br2){
        return br1;
    } else {
        return br2;
    }
}

let m1 = maks2(3, 6);
console.log(`Veci je broj ${m1}`);

//////////////////////////////////

function maks4(br1,br2,br3,br4){
    if(br1>=br2 && br1>=br3 && br1>=br4) {
        return br1;
    } else if(br2>=br3 && br2>=br4){
        return br2;
    } else if(br3>=br4) {
        return br3;
    } else {
        return br4;
    }
}

let m2 = maks4(37,28,37,9);
console.log(`Najveci je broj ${m2}`);

function max4(br1, br2, br3, br4){
    let veci1 = maks2(br1,br2);
    let veci2 = maks2(br3,br4);
    let najveci = maks2(veci1,veci2);
    return najveci;
}

let naj = max4(12,34,56,75);
console.log(naj);


// 12.
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

function cekanje(t,p,n){
    if(t<p || t>(p+n)){
        return 0;
    }
    else{
        return((p+n)-t);
    }
}
console.log(cekanje(15,10,12));
console.log(cekanje(15,20,25));
console.log(cekanje(25,20,5));


// Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

let duzNogeStola = (a,b,c) => {
    if(d1-d2 == d2-d3) {
        return d3-(d2-d3);
    }
    else if(d1-d2 > d2-d3){
        return d1-(d2-d3);
    }
    else if(d1-d2 < d2-d3){
        return d2-(d1-d2);
    }
   
}

console.log(duzNogeStola(150,140,120));


brojevi = [-1,-4,0,3,7,7,7,3,5]
let znakNepar = arr => {
    for(let i = 0; i < arr.length; i++){
        if(i%2 == 0 && arr[i] % 2 != 0){
            arr[i] = arr[i] * (-1);
        }
    }
    return arr;
}

console.log(znakNepar(brojevi));


//Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
    let dobreJabuke = jabuke - Math.round(jabuke*0.2);
    let i = 0;
    while(dobreJabuke >= 2 && banane >= 3){
        dobreJabuke -= 2;
        banane -= 3;
        i++;
    }
    return i;
}
console.log(jaban(35,135));


let jaban2 = (jabuke, banane) => {
    let dobreJabuke = Math.round(jabuke*0.8);
    if(banane>=dobreJabuke*1.5){
        return Math.floor(dobreJabuke/2);
    }
    else{
        return Math.floor(banane/3);
    }
}

console.log(jaban2(35,135));