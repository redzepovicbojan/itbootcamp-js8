let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");

let inputCheckbox = document.getElementsByName("dodPokl");
let inputNacinPlacanja = document.getElementsByName("placanje");

let ispisRuze = document.getElementById("prikazRuze");
let ispisLjiljani = document.getElementById("prikazLjiljani");
let ispisGerberi = document.getElementById("prikazGerberi");
let ispisDodatno = document.getElementById("prikazDodatno");
let ispisRacuna = document.getElementById("prikazCene");



let btnIzracunaj = document.getElementById("izracunaj");
let btnResetuj = document.getElementById("reset")

btnIzracunaj.addEventListener("click", () => {
    let vredRuze = inputRuze.value;
    let vredLjiljani = inputLjiljani.value;
    let vredGerberi = inputGerberi.value;
    ispisRuze.innerHTML = '';
    for(i=0; i<vredRuze; i++){
        ispisRuze.innerHTML += `<img src="slike/ruze.jpg" width="50" height="50">`;
    }
    ispisLjiljani.innerHTML = '';
    for(i=0; i<vredLjiljani; i++){
        ispisLjiljani.innerHTML += `<img src="slike/ljiljani.jpg" width="50" height="50">`;
    }
    ispisGerberi.innerHTML = '';
    for(i=0; i<vredGerberi; i++){
        ispisGerberi.innerHTML += `<img src="slike/gerberi.jpg" width="50" height="50">`;
    }

    ispisDodatno.innerHTML = '';

    let zbirCvece = vredRuze*150+vredLjiljani*120+vredGerberi*70;
    let zbirDP = 0;
    inputCheckbox.forEach( input => {
        if(input.checked){
            ispisDodatno.innerHTML += `<p>+ ${input.value}</p>`;
            zbirDP += 500;
        }
    });
    let racun = zbirCvece + zbirDP;

    let nacinPlacanja;
    inputNacinPlacanja.forEach( input => {
        if(input.checked){
            nacinPlacanja = input.value;
        }
    });

    if (nacinPlacanja == "kartica" && racun > 2000){
        ispisRacuna.innerHTML = `<p>Cena bez popusta je: ${racun} dinara.</p>`;
        ispisRacuna.innerHTML += `<p style="font-size: 35px">Cena sa popustom je: ${racun*0.9} dinara.`;
    } else {
        ispisRacuna.innerHTML = `<p style="font-size: 35px">Cena je ${racun} dinara.</p>`;
    } 
 
});

btnResetuj.addEventListener( "click", () => {
    inputLjiljani.value = "";
    inputGerberi.value = "";
    inputRuze.value = "";

    ispisRuze.innerHTML = "";
    ispisGerberi.innerHTML = "";
    ispisLjiljani.innerHTML = "";
    ispisDodatno.innerHTML = "";
    ispisRacuna.innerHTML = "";

    document.getElementById("bomb").checked = false;
    document.getElementById("coko").checked = false;
    document.getElementById("samp").checked = false;

    document.getElementById("kes").checked = true;
});