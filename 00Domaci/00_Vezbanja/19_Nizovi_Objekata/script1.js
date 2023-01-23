let dan1 = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15, 21, 23, 21, 12],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach( t => {
            sum+=t;
        });
        return sum/this.temperature.length;
    }
};

let dan2 = {
    datum: "2022/12/10",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 1, 3, 4, 6, 7, 5, 10, 15],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach( t => {
            sum+=t;
        });
        return sum/this.temperature.length;
    }
};

let dan3 = {
    datum: "2020/03/11",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15, 25, 15],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach( t => {
            sum+=t;
        });
        return sum/this.temperature.length;
    }
};

let dan4 = {
    datum: "1990/05/22",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15, 4, 5, 6, 7, 7],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach( t => {
            sum+=t;
        });
        return sum/this.temperature.length;
    }
};

let dan5 = {
    datum: "2022/09/13",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [5, 11, 11, 14, 12],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach( t => {
            sum+=t;
        });
        return sum/this.temperature.length;
    }
};


let dani = [dan1, dan2, dan3, dan4, dan5];

//Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih



let najviseMerenja = niz =>{
    let max1=0;
    let date1;
    let max2=0;
    let date2;
    niz.forEach( dan =>{
        if(dan.temperature.length > max1){
            max1 = dan.temperature.length;
            date1 = dan.datum;
        }
        if(dan.temperature.length >= max2){
            max2 = dan.temperature.length;
            date2 = dan.datum;
        }
    });
    if(date1 == date2){
        console.log(`Datum sa najviše merenja je: ${date1}`)
    } else {
    console.log(`Ima više datuma sa jednakim brojem merenja i to su: ${date1} i ${date2}`);
    }
}

najviseMerenja(dani);


// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let kisnihDana = niz => {
    let brKisa = 0;
    let brSunce = 0;
    let brOblacno = 0;
    niz.forEach(dan =>{
        if(dan.kisa == true){
            brKisa++;
        }
        if(dan.sunce == true){
            brSunce++;
        }
        if(dan.oblacno == true){
            brOblacno++;
        }
    });
    console.log(`Kisnih dana je bilo: ${brKisa}`);
    console.log(`Sunčanih dana je bilo ${brSunce}`);
    console.log(`Oblačnih dana je bilo ${brOblacno}`);
}

kisnihDana(dani);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let prosecniDani = niz => {
    let suma = 0;
    niz.forEach( dan =>{
        suma+=dan.prosecna();
    });
    return Math.round(suma/niz.length);
}
let brNatprosecnihDana = niz => {
    let avg = prosecniDani(dani);
    let br = 0;
    niz.forEach( dan => {
        if(dan.prosecna() > avg){
            br++;
        }
    });
    return br;
}



console.log(prosecniDani(dani));
console.log(`Broj nadprosečnih dana je bio ${brNatprosecnihDana(dani)}`);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

let student1 = {
    ime: "Bojan",
    prezime: "Redzepovic",
    godStudija: 4,
    polozIspiti: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
};
let student2 = {
    ime: "Zdravko",
    prezime: "Veljovic",
    godStudija: 3,
    polozIspiti: [6, 7, 6, 7, 7, 8, 6, 6, 7, 6]
};
let student3 = {
    ime: "Dejan",
    prezime: "Pavlovic",
    godStudija: 3,
    polozIspiti: [10, 7, 6, 6, 7, 6, 6]
};
let student4 = {
    ime: "Milos",
    prezime: "Milicevic",
    godStudija: 2,
    polozIspiti: [10, 6, 7, 6]
};
let student5 = {
    ime: "Nemanja",
    prezime: "Saric",
    godStudija: 5,
    polozIspiti: [8, 7, 7, 9, 8, 7]
};
let student6 = {
    ime: "Stefan",
    prezime: "Digic",
    godStudija: 3,
    polozIspiti: [10, 10, 10, 9, 10, 10, 10, 9]
};
let student7 = {
    ime: "Jelena",
    prezime: "Redzepovic",
    godStudija: 1,
    polozIspiti: [9, 9, 8, 9, 9]
}

let studenti = [student1, student2, student3, student4, student5, student6, student7];
// Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.

let stampaPrezima = (niz, slovo) => {
    niz.forEach( student => {
        if(student.prezime.charAt(0) == slovo){
            console.log(student.ime, student.prezime);
        }
    })
}

stampaPrezima(studenti, "R");

// Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
let stampaDvaSlova = (niz, slovo1, slovo2) => {
    niz.forEach( student => {
        if(student.ime.includes(slovo1) && student.prezime.includes(slovo2)){
            console.log(student.ime, student.prezime);
        }
    })
}

stampaDvaSlova(studenti, "n", "v");

// Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
let stampGodinaStudija = (niz, godina) => {
    let br = 0;
    niz.forEach( student => {
        if(godina == student.godStudija) {
           br++ 
        }
    });
    return br;
}
console.log(stampGodinaStudija(studenti, 3));

// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.

let prosecnaOcena = niz => {
    let sum = 0;
    niz.forEach( o => {
        sum+= o;
    });
    return sum/ niz.length;
}

let najStudent = studenti => {
    let naj = studenti[0]; // Pretpsotavka da je ovo najbolji student

    studenti.forEach( student => {
        if(prosecnaOcena(naj.polozIspiti) < prosecnaOcena(student.polozIspiti)){
            naj = student;
        }
    });
    return `${naj.ime} ${naj.prezime}`;
}

console.log(najStudent(studenti));



let sviNajStudenti = studenti => {
    let prosek_najboljeg = -1;
    studenti.forEach( student => {
        let zbir = 0;
        student.polozIspiti.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.polozIspiti.length;

        if(prosek > prosek_najboljeg){
            prosek_najboljeg = prosek;
        }
    });

    studenti.forEach( student => {
        if(prosek_najboljeg == prosecnaOcena(student.polozIspiti)) {
            console.log(`${student.ime}  ${student.prezime}`);
        }
    });
}

sviNajStudenti(studenti);


// Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.

let prosecanStudent = studenti => {
    studenti.forEach( student => {
        let sd = 0;
        student.polozIspiti.forEach( o => {
            if(o == 6 || o== 10){
                sd++;
            }
            return sd;
        });
        if(sd == 0){
            console.log(`Student ${student.ime} ${student.prezime} je prosečan! (Nema ocene 6 i 10)`);
        }
    });
}
prosecanStudent(studenti);
// Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.

let extraStudent = studenti =>{
    studenti.forEach( student =>{
        let devetke = 0;
        let desetke = 0;
        let ostalo = 0;
        student.polozIspiti.forEach( o => {
            if(o == 9){
                devetke++;
            }
            else if(o == 10){
                desetke++;
            } 
            else {
                ostalo++;
            }
        });
        if(ostalo == 0 && desetke >= devetke){
            console.log(`${student.ime} ${student.prezime} je ekstra student!`);
        }
    });
}
extraStudent(studenti);
// Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
let kidaStudent = studenti =>{
    studenti.forEach( student =>{
        let desetke = 0;
        let devetke = 0;
        let ostalo = 0;
        student.polozIspiti.forEach( o => {
            if(o == 10){
                desetke++;
            }
            else if (o == 9){
                devetke++;
            } else {
                ostalo++;
            }
        });
        if(ostalo == 0 && devetke < student.godStudija){
            console.log(`Studen kida: ${student.ime} ${student.prezime}`);
        }
    });
}
kidaStudent(studenti);
// Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.

let razbijaStudent = studenti => {
    studenti.forEach( student => {
        let desetke = 0;
        let ostalo = 0;
        student.polozIspiti.forEach( o => {
            if(o == 10){
                desetke++;
            } else {
                ostalo++;
            }
        });
        if(ostalo == 0 && desetke >= 5*(student.godStudija - 1)){
            console.log(`Student koji razbija je: ${student.ime} ${student.prezime}`);
        }
    });
}
razbijaStudent(studenti);
// Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.

let aljkav = studenti => {
    let br = 0;
    studenti.forEach( student => {
        let osamPlus = 0;
        student.polozIspiti.forEach( broj => {
            if(broj > 7){
                osamPlus++;
            }
        });
        if(osamPlus == 0){
            br++;
        }
       
    });
    console.log(`Ima ${br} aljkavih studenata`);
}
aljkav(studenti);

// Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.

let brukaStudent = studenti => {
    let brojac = 0;
    studenti.forEach( student => {
        let osamPlus = 0;
        student.polozIspiti.forEach( o => {
            if(o > 7){
                osamPlus++;
            }
        });
        if(student.godStudija > 1 && student.polozIspiti.length < 3*(student.godStudija-1) && osamPlus == 0){
            brojac++;
        }
    });
    console.log(`Broj bruka studenata je ${brojac}`);
}
brukaStudent(studenti);


// Da li je ok da kod onih studenata, u ispitivanju za one koji se brukaju stavim forEach u else granu?
let bruka = (studenti) => {
    let br = 0;
    studenti.forEach((student) => {
        let bruka = true;
        let brIspita = student.polozIspiti.length;
        if(student.godina == 1 || brIspita > 3*(student.godina-1)) {
            bruka = false;
        }
        else {
            student.polozIspiti.forEach((ocena) => {
                if(ocena > 7) {
                    bruka = false;
                }
            });
        }
        if(bruka) {
            br++;
            console.log(`${student.ime} ${student.prezime}`);
        }
    })
    return br;
}
console.log(`Broj studenata koji se brukaju je ${bruka(studenti)}`);



let bruka1 = studenti => {
    let brg = 0;
    studenti.forEach(e => {
        if(e.godina == 1 && e.polozIspiti.length > 3*(e.godina - 1)){
            brg++;
        }
        let bro = 0;
        e.polozIspiti.forEach(a => {
            if(a > 7) {
                bro++;
            }
        });
       if(brg == 0 && bro == 0) {
            console.log(`${e.ime}`);
       }
    });
};
bruka1(studenti);