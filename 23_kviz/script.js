let pitanje1 = {
    tekst: "Ko je najbolji strelac Lige Šampiona ikada?",
    odgovori: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronalod", "Karim Benzema"],
    iko: 2
}

let pitanje2 = {
    tekst: "Ko je najbolji strelac svih UEFA takmičenja ikada?",
    odgovori: ["Karim Benzema", "Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo"],
    iko: 3
}

let pitanje3 = {
    tekst: "Ko ima najviše odigranih utakmica na svim UEFA takmičenjima?",
    odgovori: ["Cristiano Ronaldo", "Paolo Maldini", "Pepe Reina", "Iker Casillas"],
    iko: 0
}

let pitanje4 = {
    tekst: "Koji od ovih igrača je osvojio ligu šampiona čak 5 puta?", 
    odgovori: ["Kylian Mbappe", "Neymar", "Cristiano Ronaldo", "fLionel Messi"],
    iko: 2
}

let pitanje5 = {
    tekst: "Ko je od ovih igrača dao golove na 3 finala Lige šampiona",
    odgovori: ["Cristiano Ronaldo", "Lionel Messi", "Samuel Eto'o", "Maradona"],
    iko: 0
}

let pitanje6 = {
    tekst: "Ko od ovih igrača je čak 17 puta uvršten u najbolji UEFA tim godine po fanovima?",
    odgovori: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Samuel Eto'o"],
    iko: 1
}

let pitanje7 = {
    tekst: "Koji igrač ima najviše utakmica na evropskom prvenstvu uključujući kvalifikacije (60)?",
    odgovori: ["Gianluigi Buffon", "Zlatan Ibrahimović", "Michel Platini", "Cristiano Ronaldo"],
    iko: 3
}

let pitanje8 = {
    tekst: "Koji igrač je igrano najviše puta na Evropskom Prvenstvu u fudbalu, čak 5 puta?",
    odgovori: ["Lothar Matthaus", "Alessandro Del Piero", "Michel Platini", "Cristiano Ronaldo"],
    iko: 3
}
let pitanje9 = {
    tekst: "Koji igrač ima najviše utakmica na evropskom prvenstvu (bez kvalifikacija)?",
    odgovori: ["Gianluigi Buffon", "Zlatan Ibrahimović", "Bastian Schweinsteiger", "Cristiano Ronaldo"],
    iko: 3
}
let pitanje10 = {
    tekst: "Koji igrač je dao najviše golova za nacionalni tim?",
    odgovori: ["Pele", "Cristiano Ronaldo", "Robert Lewandowski", "Lionel Messi"],
    iko: 1
}

let pitanje11 = {
    tekst: "Koji igrač je postigao golove na najviše svetskih prvenstava, čak 5?",
    odgovori: ["Cristiano Ronaldo", "Lionel Messi", "Maradona", "Pele"],
    iko: 0
}

let pitanje12 = {
    tekst: "Koji igrač je dao golove na čak 11 uzastopinih utakmica u Ligi Šampiona?",
    odgovori: ["Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema", "Lionel Messi"],
    iko: 1
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12];

// Funkcija koja mesa sve clanove niza 
function shuffleArray(niz) {
    for (let i = niz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [niz[i], niz[j]] = [niz[j], niz[i]];
    }
}
shuffleArray(pitanja);

let questions = document.querySelectorAll(".pitanja");
//funkcija koja ispisuje pitanja i odgovore u HTML-u.
let ispisPiO = (pitanja) => {
    for(i=0; i<5; i++){
        questions[i].childNodes[1].innerHTML = `${i+1}. ${pitanja[i].tekst}`;
        for(j=0; j<4; j++){
            questions[i].children[j+1].children[1].innerHTML = `${pitanja[i].odgovori[j]}`;
        }
    }
}
ispisPiO(pitanja);

let btnPosalji = document.getElementById("posalji");
let btnNova = document.getElementById("nova");
let tacno = document.getElementById("tacno");

var vrednost;
btnPosalji.addEventListener( "click", () => {
    for(i=0; i<5; i++){
        for(j=0; j<4; j++){
            if(questions[i].children[j+1].children[0].checked){
               vrednost = questions[i].children[j+1].children[0].value;
            }
            questions[i].children[j+1].children[0].disabled = true; //zabranjuje da se ponovo klikne na neki drugi odgovor
        }
        if(vrednost == pitanja[i].iko){ //Ispis da li je tacan odgovor ili ne
            tacno.children[i].innerHTML = `Tačno ste odgovorili na ${i+1}. pitanje`;
            tacno.children[i].style.color = "green";
        }
        else {
            tacno.children[i].innerHTML = `Netačno ste odgovorili na ${i+1}. pitanje`;
            tacno.children[i].style.color = "red";
        }
    }
});

btnNova.addEventListener( "click", ()=> {
    for(i=0; i<5; i++){
        tacno.children[i].innerHTML = "";
        for(j=0; j<4; j++){
            questions[i].children[j+1].children[0].disabled = false;     
        }
        questions[i].children[1].children[0].checked = true;
    }
    shuffleArray(pitanja);
    ispisPiO(pitanja);
});