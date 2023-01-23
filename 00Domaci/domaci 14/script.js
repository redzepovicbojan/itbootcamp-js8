// DOMACI ZADATAK BR 14
// Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
// Naziv knige,
// Autora knjige,
// Putanja do sličice,
// Polje – indikator da li je knjiga pročitana ili ne (true ili false).
// Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
// U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
// Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
// Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.

// Napomena: Sav kod je potrebno uraditi u js fajlu. Takođe, potrebno je kreirati DOM stablo preko ugrađenih metoda (nije dozvoljeno kreirati HTML kod kroz innerHTML svojstvo)!

let knjiga1 = {
    naziv: "Mali Princ",
    autor: "Antoan",
    slika: "images/littleprince.jfif",
    procitana: true
};

let knjiga2 = {
    naziv: "Lolita",
    autor: "Vladimir Nabokov",
    slika: "images/lolita.jpg",
    procitana: false
};

let knjiga3 = {
    naziv: "Hobit",
    autor: "J.R.R. Tolkin",
    slika: "images/hobit.jpg",
    procitana: true
};

let knjiga4 = {
    naziv: "Alhemicar", 
    autor: "Paulo Koeljo",
    slika: "images/alhemicar.jfif",
    procitana: true
};

let knjiga5 = {
    naziv: "Rat i mir",
    autor: "Lav Tolsoj",
    slika: "images/rat i mir.jpg",
    procitana: false
}

let knjiga6 = {
    naziv: "Smrt na nilu", 
    autor: "Agata Kristi", 
    slika: "images/smrt na nilu.jpg",
    procitana: true
}



let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6];

let tabela = document.createElement("table");
document.body.appendChild(tabela);
tabela.style = "border: 1px solid black; border-collapse: collapse;";
////
let trh = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
th1.textContent = `Korica knjige`;
th2.textContent = `Naslov i pisac`;
th1.style = "border: 1px solid black;";
th2.style = "border: 1px solid black;";
trh.appendChild(th1);
trh.append(th2);
tabela.appendChild(trh);

/////
for(i=0; i<knjige.length; i++){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let slika = document.createElement("img");
    slika.src = knjige[i].slika;
    slika.style = "width: 120px; aspect-ratio: 2/3;"
    td1.appendChild(slika);
    td1.style = "border: 1px solid black;";
    let td2 = document.createElement("td");
    
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.textContent = `${knjige[i].naziv}`;
    p2.textContent = `${knjige[i].autor}`;
    p1.style = "text-align: center;";
    p2.style = "text-align: center;";
    td2.appendChild(p1);
    td2.appendChild(p2);
    td2.style = "border: 1px solid black; padding: 0 10px 0 10px;";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabela.append(tr);

    if(knjige[i].procitana){
        td2.style = 'color: blue; border: 1px solid black; padding: 0 10px 0 10px;'
    } else {
        td2.style = 'color: gray; border: 1px solid black; padding: 0 10px 0 10px;'
    }

    if(i%2==0){
        tr.style = `background-color: LightCyan;`;
    } else {
        tr.style = `background-color: LemonChiffon;`;
    }
}

