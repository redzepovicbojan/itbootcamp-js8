polaznik1 = {
    ime: "Bojan",
    prezime: "Redzepovic",
    ocena: 99
};

polaznik2 = {
    ime: "Jelena",
    prezime: "Redzepovic",
    ocena: 88
};

polaznik3 = {
    ime: "Nemanja",
    prezime: "Saric",
    ocena: 75
}

polaznik4 = {
    ime: "Nemanja",
    prezime: "Tomic",
    ocena: 75
};

polaznik5 = {
    ime: "Sale",
    prezime: "Digic",
    ocena: 75
};

polaznik6 = {
    ime: "Zdravko",
    prezime: "Veljovic",
    ocena: 75
};

///////// Objekti kurseva

kurs1 = {
    naziv: "Razvoj veb stranica: JS",
    grad: "Nis",
    polaznici: [polaznik1, polaznik2]
};

kurs2 = {
    naziv: "Razvoj veb stranica: PHP",
    grad: "Beograd",
    polaznici: [polaznik2, polaznik3]
};

kurs3 = {
    naziv: "Testiranje softvera: QA",
    grad: "Nis",
    polaznici: [polaznik4, polaznik5]
};

kurs4 = {
    naziv: "Osnove programiranja: Java",
    grad: "Kosovska Mitrovica",
    polaznici: [polaznik1, polaznik6]
};

kurs5 = {
    naziv: "Osnove programiranja: Java",
    grad: "Nis",
    polaznici: [polaznik1, polaznik6, polaznik3]
};

kursevi = [kurs1, kurs2, kurs3, kurs4, kurs5];

// Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let kursUGradu = (kursevi, grad) => {
    let counter = 0;
    kursevi.forEach( kurs => {
        if(grad == kurs.grad){
            counter++
        }
    });
    console.log(`Broj kurseva koji se odrzavaju u gradu ${grad} je ${counter}`);
};

kursUGradu(kursevi,"Nis");

// Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
let brNazivaKursa = (kursevi, naziv) => {
    let counter = 0;
    kursevi.forEach( kurs => {
        if(naziv == kurs.naziv){
            counter++;
        }
    });
    console.log(`Broj kurseva koji imaju naziv ${naziv} je: ${counter}`);
};
brNazivaKursa(kursevi, "Osnove programiranja: Java");
// Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
let najvisePolaznika = kursevi => {
    let max = 0;
    let k;
    kursevi.forEach( kurs => {
        if(kurs.polaznici.length > max){
            max = kurs.polaznici.length;
            k = kurs;
        }
    });
    console.log(`Kurs sa najvise polaznika je ${k.naziv} a odrzava se u grad: ${k.grad}`);
};
najvisePolaznika(kursevi);

// Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let sviKursPrezime = (kursevi, prezime) => {
    kursevi.forEach( kurs => {
        kurs.polaznici.forEach( polaznik => {
            if(polaznik.prezime == prezime){
                console.log(`${polaznik.ime} ${polaznik.prezime} ${kurs.naziv} ${kurs.grad}`);
            }
        });
    });
};
sviKursPrezime(kursevi, "Redzepovic");
// Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.

// Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
// Grad “kida” ukoliko je svaki kurs koji se održava u tom gradu uspešan. Funkciji se prosleđuje niz kurseva i grad, a vraća da li dati grad kida (funkcija vraća true ili false).
// Polaznici na nekom kursu su “pokidali” na završnom testu ako nijedan polaznik nije osvojio manje od 80% na završnom testu. Funkciji se prosleđuje niz kurseva i naziv nekog kursa, a ona ispituje da li su polaznici pokidali na tom kursu (funkcija vraća true ili false).
