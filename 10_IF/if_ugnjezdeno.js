let a = 160;
let b = 15;
let c = 130;

if(a > b) {
    if (a > c) {
        console.log(`Najveci broj je ${a}`);
        if(a > c) {
            console.log(`Srednji broj je ${b}`);
            console.log(`Najmanji broj je ${c}`);
        }
        else {
            console.log(`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${b}`);
        }
    }
    else {
        console.log(`Najveci broj je ${c}`);
        console.log(`Srednji broj je ${a}`);
        console.log(`Najmanji broj je ${b}`);
    }
}
else {
    if(b>c) {
        console.log(`Najveci broj je ${b}`);
        if(b > c) {
            console.log(`Srednji broj je ${a}`);
            console.log(`Najmanji broj je ${c}`);
        }
        else {
            console.log(`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${a}`);
        }
    }
    else {
        console.log(`Najveci broj je ${c}`);
        console.log(`Srednji broj je ${b}`);
        console.log(`Najmanji broj je ${a}`);
    }
}


// 19. Učitati dva cela broja i ispitati da li je veći od njih paran. 

let x = 234;
let y = 352;

if (x > y) {
    if(x % 2 == 0){
        console.log(`Broj ${x} je veci i paran je`);
    } else {
        console.log(`Broj ${x} je veci i nije paran`);
    }
}
else {
    if(y % 2 == 0){
        console.log(`Broj ${y} je veci i paran je`);
    } else {
        console.log(`Broj ${y} je veci i nije paran`);
    }
}



// 20. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.


let d1 = 3;
let m1 = 12;
let g1 = 2023;

let d2 = 3;
let m2 = 10;
let g2 = 2023;


if (g1 ==  g2) {
    if (m1 == m2) {
        if(d1 == d2) {
            console.log(`Datumi su isti`);
        } else if (d1 < d2) {
            console.log(`Datum 1 je raniji`); 
        } else {
            console.log(`Datum 2 je raniji`);
        }
    } else if ( m1 < m2) {
        console.log(`Datum 1 je raniji`);
    } else {
        console.log(`Datum 2 je raniji`);
    }
    
} else if (g1 < g2) {
    console.log(`Datum 1 je raniji`);
} else {
    console.log(`Datum 2 je raniji`);
}