import Film from "./film.js";

let f1 = new Film("The Intouchebles", "Olivier Nakache", 2011, [7, 6, 8]);
let f2 = new Film("The Shawshank Redemption", "Frank Darabont", 1994, [9,8,8,9,8])
let f3 = new Film("Harry Poter", "J. K. Rowling", 5, [8, 8, 9, 2, 8])
let f4 = new Film("Life Is Beautiful", "Roberto Benigni", 1997,[10, 8, 8, 9]);

let filmovi = [f1, f2, f3, f4];

// f1.stampaj();
// f2.stampaj();
// f3.stampaj();

// f1.stampaNaslova();

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmovi i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    niz.forEach(film => {
        if(film.godinaIzdanja > (vek-1)*100 && film.godinaIzdanja <= vek*100){
            film.stampaj();
        }
    });
}
vekFilmova(filmovi, 20);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = films => {
    let suma = 0;
    let brojac = 0;
    films.forEach(film =>{
        film.ocene.forEach( ocena => {
            suma+=ocena;
            brojac++;
        });
    });
    return suma/brojac;
}
console.log(`Prosecna ocena filmova je: ${prosecnaOcena(filmovi)}`);

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = filmovi => {
    let najOcenjen = filmovi[0];
    filmovi.forEach( film =>{
        if(film.prosek() > najOcenjen.prosek()){
            najOcenjen = film;
        }
    });
    return najOcenjen;
}

console.log(`Najbolje ocenjeni film je: ${najboljeOcenjeni(filmovi).naslov}`);;

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = filmovi => {
    let avgSvihFilmova = prosecnaOcena(filmovi);
    //Math.abs()
    let minRastojanje = Math.abs(avgSvihFilmova - filmovi[0].prosek());
    let minFilm = filmovi[0];

    filmovi.forEach( film => {
        console.log(film.prosek());
        if(minRastojanje > Math.abs(avgSvihFilmova - film.prosek())) {
            minRastojanje = Math.abs(avgSvihFilmova - film.prosek());
            minFilm = film;
        }
    });
    return minFilm;
}
console.log(osrednjiFilm(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najFilm = najboljeOcenjeni(niz);
    let najslabijaOcena = najFilm.ocene[0];
    najFilm.ocene.forEach(o => {
        if(o < najslabijaOcena){
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena); 
}
najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let najmanja = niz[0].ocene[0];
    niz.forEach( film => {
        film.ocene.forEach( ocena => {
            if(ocena < najmanja){
                najmanja = ocena;
            }
        });
    });
    return najmanja;
}
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
let najcescaOcena = niz => {
    let brojacOcena = [0,0,0,0,0,0,0,0,0,0];
    for(let i=1; i<=10; i++){
        niz.forEach( film => {
            film.ocene.forEach( ocena => {
                if(i == ocena){
                    brojacOcena[i-1]++;
                }
            });
        })
    }  
    let max = brojacOcena[0];
    let najcOcenaa;
    for(let i=0; i<10; i++){
        if(brojacOcena[i]>max){
            max = brojacOcena[i];
            najcOcenaa = i+1;
        }
    }
    return najcOcenaa;
}
console.log(najcescaOcena(filmovi));
//////////////////////////////////////////////////////////////////
let sveOcene = niz => {
    let arrSveOcene = [];
    niz.forEach(film => {
        // arrSveOcene.push(film.ocene);
        arrSveOcene = arrSveOcene.concat(film.ocene); //Nema podnizova
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

let najcescaOcena2 = nizOcena => {
    let pretpostavkaNajucestalijiElem = nizOcena[0];
    let brPojavljivanjaPretpostavke = 1; // sigurno se jednom pojavila
    for(let i=0; i< nizOcena.length; i++) {
        let tekuci = nizOcena[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;

        for(let j=0; j<nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                tekuciBrPojavljivanja++;//nasli smo isti element i treba povecati broj pojavljivane tekuceg
            }
        }

        if(tekuciBrPojavljivanja > brPojavljivanjaPretpostavke) {
            brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
            pretpostavkaNajucestalijiElem = tekuci;
        }
    }
    return pretpostavkaNajucestalijiElem;
}
let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena2(nizSvihOcena));
// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (ocena, filmovi) => {
    let nizFilmova = [];
    filmovi.forEach(film => {
        if(film.prosek()> ocena){
            nizFilmova.push(film);
        }
    });
    return nizFilmova;
}
console.log(f1.prosek(), f2.prosek(), f3.prosek(), f4.prosek());
console.log(iznadOcene(7.6, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, filmovi) => {
    let nizFilmova = iznadOcene(ocena, filmovi);
    let noviji = nizFilmova[0];
    nizFilmova.forEach( film => {
        if(film.godinaIzdanja > noviji.godinaIzdanja){
            noviji = film;
        }
    });
    console.log(noviji);
    noviji.stampaj();
}
iznadOceneNoviji(8, filmovi);