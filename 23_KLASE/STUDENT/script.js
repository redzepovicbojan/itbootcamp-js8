import { Student } from "./student.js";

let stud1 = new Student ("1112990780036", "Bojan", "Redzepovic", [9, 10, 10, 9, 10, 8, 9]);
let stud2 = new Student ("2609993781037", "Jelena", "Lukic", [9, 9, 9, 8, 9]);
let stud3 = new Student("3003000123456", "Jovan", "Lukic", [7,7,8,9,7,7]);
let stud4 = new Student("2207993123123", "Stefan", "Digic", [10, 10, 10, 10, 10, 10, 9]);

let studenti = [stud1, stud2, stud3, stud4];
console.log(stud1.nizOcena);
console.log(stud1.prosecnaOcena());
stud1.ispis();

// Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom
let imePrezime = (ime, prezime) => {
    let counter = 0;
    studenti.forEach( student => {
        if(ime == student.ime && prezime == student.prezime){
            counter++
        }
    });
    return counter;
}
console.log(imePrezime("Bojan", "Redzepovic"));

// Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.
let srednjaOcena = studenti => {
    let counter = 0;
    studenti.forEach( student => {
        counter += student.prosecnaOcena();
    });
    return counter / studenti.length; 
}
console.log(srednjaOcena(studenti));

// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.
let osrednji = students => {
    let minStud = students[0];
    let min = Math.abs(students[0].prosecnaOcena() - srednjaOcena(students));
    students.forEach( student => {
        if( Math.abs(student.prosecnaOcena()-srednjaOcena(students)) < min){
            min = student.prosecnaOcena()-srednjaOcena(students);
            minStud = student;
        }
    });
    return minStud;
}
console.log(osrednji(studenti));

// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = students => {
    let najbolji = students[0];
    let prosekNaj = students[0].prosecnaOcena();
    students.forEach( student => {
        if(student.prosecnaOcena()>prosekNaj){
            prosekNaj = student.prosecnaOcena();
            najbolji = student;
        }
    });
    let minOcena = najbolji.nizOcena[0];  
    najbolji.nizOcena.forEach( ocena => {
        if(ocena < minOcena){
            minOcena = ocena;
        }
    });
    return minOcena;
}
console.log(najmanjaOcenaNajboljeg(studenti));

// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.
let najmanjaOcena = students => {
    let najmanjaO = students[0].nizOcena[0];
    students.forEach( student => {
        student.nizOcena.forEach( ocena => {
            if(ocena < najmanjaO){
                najmanjaO = ocena;
            }
        });
    });
    return najmanjaO;
};
console.log(najmanjaOcena(studenti));

// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali. 

let najcescaOcena = studenti => {
    let najcesca;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let c9 = 0;
    let c10 = 0;
    studenti.forEach( student => {
        student.nizOcena.forEach( ocena => {
            if (ocena == 10) {
                c10++;
            } else if( ocena == 9) {
                c9++;
            } else if( ocena == 8) {
                c8++;
            } else if( ocena == 7) {
                c7++;
            } else {
                c6++;
            }
        });
    });
    let najcesceO = [c6, c7, c8, c9, c10];
    let ocena = 6;
    najcesca = najcesceO[0];
    for(let i=1; i<5; i++){
        if (najcesceO[i] > najcesca) {
            najcesca = najcesceO[i];
            ocena = i+6;
        }
    };
    return ocena;
};
console.log(`Najčešća ocena je: ${najcescaOcena(studenti)}`);

// Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.

let rodjeniGodine = godina => {
    studenti.forEach( student => {
        let godRodj = "1" + student.jmbg.slice(4,7);
        if(godina == godRodj){
            student.ispis();
        }
    });
}
rodjeniGodine(1993);


