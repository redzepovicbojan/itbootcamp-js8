// Prioritet u logickim operatorima 
// 1. !
// 2. &&
// 3. ||

// and - &&
// let a = 5;
// let b = -6;

// if (a==5 && b==6) {
//     console.log("Hello");
// }

// or - ||
// Ne daje true iskljucivo ako su oba izraza netacna
// tj. daje true ukoliko je makar jedan izraz tacan

// if(a==5 || b==6) {
//     console.log("world");
// }

// let c = 7;
// if(a==5 && b==6 && c==7){
//     console.log(`Sva tri su tacna`);
// } else {
//     console.log(`Neki od uslova nije tačan`);
// }

// if(a==5 || b==6 || c==7) {
//     console.log('Makar jedan od uslova je tacan');
// } else {
//     console.log('Ni jedan od uslova nije tacan tj svi uslovi su netacni')
// }

// if(c!=7) {
//     console.log('c je  razlicito od 7')
// }

// if( !(c==7) ) {
//     console.log('c je razlicito od 7')
// }


// 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.
let a = 43;
let b = 64;
let c = 52;

if (a>b && a>c){
    console.log(`najveci broj je ${a}`);
} else if (b>a && b>c){
    console.log(`najveci broj je ${b}`);
} else {
    console.log(`najveci broj je ${c}`);
}


// 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
let t = -25;

if(t<-15 || t>40){
    console.log(`Ekstremna temperatura`);
}


// 23. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let vreme = new Date();
let g = vreme.getFullYear();

if ( (g%4 == 0 && !(g%100 == 0)) || g%400 == 0){
    console.log(`Godina${g} je prestupna`);
}
else {
    console.log(`Godina ${g} nije prestupna`);
}


// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
// U suprotnom ispisati “zatvoreno”.

// Ko bude imao vremena: 
// Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.

let dan = 0;
let sat = 17;

if(dan == 0 || dan == 6) {
   // vikend
    if(sat>=10 && sat<18) {
        console.log(`Radni dand je i butik je trenutno otvoren`);
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg"></img>`)
    }
    else {
        console.log(`Vikend je i butik je trenutno zatvoren`);
        document.write(`<img src="https://img.freepik.com/free-vector/sorry-we-re-closed-sign_23-2148832148.jpg"></img>`)
    }
}
else {
    // radni dan
    if(sat>=9 && sat<20) {
        console.log(`Radni dand je i butik je trenutno otvoren`);
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg"></img>`)
       }
    else{
        console.log(`Radni dan je i butik je trenutno zatvoren`);
        document.write(`<img src="https://img.freepik.com/free-vector/sorry-we-re-closed-sign_23-2148832148.jpg"></img>`);
    }
}