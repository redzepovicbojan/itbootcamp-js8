let automobil1 = {
    marka: "Citroen",
    km: 197000,
    godiste: 2009,
    vlasnici: ["Pera", "Mika", "Laza"]
};

let automobil2 = {
    marka: "Peugeot",
    km: 50500,
    godiste: 2017,
    vlasnici: ["Bora", "Maki"]
};

let automobil3 = {
    marka: "Opel",
    km: 31000,
    godiste: 2019,
    vlasnici: ["Zika", "Cale"]
}

let automobil4 = {
    marka: "BMW",
    km:53000,
    godiste: 2005,
    vlasnici: ["Stefan", "Jovan", "Pera"]
}

let automobil5 = {
    marka: "Citroen",
    km:80000,
    godiste: 2010,
    vlasnici: ["Nemanja", "Mile", "Pera"]
}

let automobil6 = {
    marka: "BMW",
    km:53000,
    godiste: 2012,
    vlasnici: ["Rista"]
}

let automobil7 = {
    marka: "Opel",
    km:380000,
    godiste: 1980,
    vlasnici: ["Aleksa", "Mica", "Boris"]
}

// Kreirati niz od najmanje tri objekta (najmanje tri automobila koji se nalaze na placu). 
let plac = [automobil1, automobil2, automobil3, automobil4, automobil5, automobil6, automobil7];

//Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja vraća prosečno godište proizvodnje automobila. Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo deo.

let prosecnoGodiste = plac => {
    let suma = 0;
    plac.forEach( automobil => {
        suma+=automobil.godiste;
    });
    return Math.floor(suma/plac.length);
};

console.log(prosecnoGodiste(plac));

// Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je prešao najmanje kilometara.
// Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
// Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
// Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara, ratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih automobila, vratiti bilo koji od njih.

let markaNajmanjeKm = (plac, marka) => {
    let min = 1000000000;
    let nizIstihAuta = [];
    plac.forEach( automobil => {
        if(marka == automobil.marka && automobil.km<min){
            min = automobil.km;
        }
    });
    plac.forEach( automobil => {
        if(marka == automobil.marka && automobil.km == min)
        nizIstihAuta.push(automobil);
    });

    let minGod = 0;
    let autoMin;
    nizIstihAuta.forEach( automobil => {
        if(automobil.godiste > minGod){
            minGod = automobil.godiste;
            autoMin = automobil;
        }
    });
    return autoMin;
}
console.log(markaNajmanjeKm(plac,"BMW"));

// Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina.
// Pozvati funkciju i rezultat ispisati u konzoli.

let prosekKm10 = plac => {
    let vreme = new Date();
    let godinaSad = vreme.getFullYear();
    let suma = 0;
    let brojac = 0;
    plac.forEach( automobil => {
        if(godinaSad - automobil.godiste <= 10){
            brojac++;
            suma+=automobil.km;
        }
    }); 

    console.log(suma/brojac);
};

prosekKm10(plac); //Nije trazeno da se zaokruzi na ceo broj.


// Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
// Pozvati funkciju i rezultat ispisati u konzoli.

let rokfeler = (plac, ime) => {
    let brojac = 0;
    plac.forEach( automobil => {
        automobil.vlasnici.forEach(vlasnik =>{
            if(ime == vlasnik){
                brojac++
            }
        });
    });
    if(brojac>2){
        return true;
    } else {
        return false;
    }
}

console.log(rokfeler(plac,"Pera"));

// Pretpostavimo da su u niz objekata automobili dodavani po redosledu dolaska na auto plac. Drugim rečima, na početku niza nalaze se automobili koji su ranije došli na plac, dok se na kraju niza nalaze automobili koji su skorije došli na plac.
// Što je veći indeks automobila u nizu, to je skorije došao na plac.
// Podelimo niz automobila na dva dela - jedan deo čine polovinu automobila koji su od ranije na placu, a drugu polovinu čine automobili koji su skorije došli na plac.
// Ukoliko u nizu ima neparan broj elemenata, tada prvi deo ima jedan više
// automobil od drugog dela.
// Napisati funkciju skorije koja vraća true ukoliko je polovina automobila koja je skorije došla na plac u proseku mlađa (po godini proizvodnje) od polovine automobila koja je ranije došla na plac.
// Pozvati funkciju i rezultat ispisati u konzoli.

let skorijeRanije = plac => {
    let sumaSkorije = 0;
    let brojacSkorije = 0;
    let sumaRanije = 0;
    let brojacRanije = 0;
    if(plac.length%2 == 0) {
        for(let i=0; i<plac.length/2; i++){
            sumaRanije+=plac[i].godiste;
            brojacRanije++;
        }
        for(let i=plac.length/2; i<plac.length; i++){
            sumaSkorije+=plac[i].godiste;
            brojacSkorije++;
        }
    } 
    else {
        for(let i=0; i<Math.round(plac.length/2); i++){
            sumaRanije+=plac[i].godiste;
            brojacRanije++;
        }
        for(let i=Math.round(plac.length/2); i<plac.length; i++){
            sumaSkorije+=plac[i].godiste;
            brojacSkorije++;
        }
    }

    let prosekRanije = sumaRanije/brojacRanije;
    let prosekSkorije = sumaSkorije/brojacSkorije;

    if(prosekRanije<prosekSkorije){
        return true;
    } else {
        return false;
    }
};
console.log(skorijeRanije(plac));