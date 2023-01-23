// Kreirati fajl sportisti.json, koji sadrži niz objekata, pri čemu svaki objekat sadrži sledeće atribute: imePrezime (string), visina (broj), timovi (niz stringova).
// Uspostaviti konekciju ka fajlu sportisti.json.
// Ispisati prosečnu visinu svih sportista.

const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", () => {
    if(request1.readyState === 4 && request1.status === 200) {
        let data = JSON.parse(request1.responseText);
        let sum = 0;
        data.forEach( user => {
            sum += Number(user.visina);
        });
        console.log(`Prosečna visina svih sportista je: ${sum/data.length} cm`);
    } else if(request1.readyState === 4) {
        console.log("Desila se greska");
    }
});
request1.open("GET", "./sportisti.json");
request1.send();

// Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).

const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", () => {
    if(request2.readyState === 4 && request2.status === 200) {
        let data = JSON.parse(request2.responseText);
        let min = data[0];
        data.forEach( user => {
            if(user.timovi.length < min.timovi.length){
                min = user;
            }
        });
        console.log(`Najmanje transfera je imao: ${min.imePrezime}`);
    } else if(request2.readyState === 4) {
        console.log("Desila se greska");
    }
});
request2.open("GET", "./sportisti.json");
request2.send();

// Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.

const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", () => {
    if(request3.readyState === 4 && request3.status === 200) {
        let data = JSON.parse(request3.responseText);
        console.log("Za LA Lakers su igrali:")
        data.forEach( user => {
            if(user.timovi.includes("LA Lakers")){
                console.log(user.imePrezime);
            }
        });
    } else if(request3.readyState === 4) {
        console.log("Desila se greska");
    }
});
request3.open("GET", "./sportisti.json");
request3.send();