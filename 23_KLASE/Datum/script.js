import Datum from "./datum.js";

let datum1 = new Datum (11, 12, 1990);
let datum2 = new Datum (26, 9, 1993);
let datum3 = new Datum (26, 9, 1993);
let datum4 = new Datum (30, 5, 2021);

let datumi = [datum1, datum2, datum3, datum4];

// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.
let ranijiDatum = (d1, d2) => {
    let raniji;
    let ispis;
    if(d1.godina < d2.godina){
        raniji = d1;
    } else if(d1.godina > d2.godina){
        raniji = d2;
    } else {
        if(d1.mesec < d2.mesec){
            raniji = d1;
        } else if (d1.mesec > d2.mesec){
            raniji = d2;
        } else {
            if(d1.dan < d2.dan) {
                raniji = d1;
            } else if(d1.dan > d2.dan){
                raniji = d2;
            } else {
                raniji = 0;
            }
        }
    }
    if (raniji == 0){
        ispis = `Datumi su jednaki`;
    } else {
        ispis = `Raniji datum je: ${raniji.dan}-${raniji.mesec}-${raniji.godina}`;
    }
    document.body.innerHTML = ispis;
}

ranijiDatum(datum3, datum2);