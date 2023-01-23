console.log("Events");

// 1. Dohvati element na koji zelio da postavimo osluskivac
let bthHello = document.getElementById("hello");

// 2. Postavljamo oslusškivač na element koji smo dohvatili

bthHello.addEventListener("click", () => {
    console.log('Hello');
});

////////////////////////////////////////////

let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
    console.log("Hello hello!");
});
/////////////////////////////////////

let btnEvents = document.getElementById("hello3");

btnEvents.addEventListener("click", () => {
    console.log("Event click");
});
btnEvents.addEventListener("dblclick", () =>{
    console.log("Event dblclick");
});
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById("brojac");
let brojac = 1;
btnBrojac.addEventListener("click", () => {
    console.log(`Brojac je ${brojac}`);
    brojac++;
    let ispisParagrafa = document.getElementById("par");
    ispisParagrafa.innerHTML = brojac;
});

// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.



// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spnRez = document.getElementById("rezultat");
let br=0;

btnMinus.addEventListener("click", ()=> {
    br--;
    if(br < 0){
        br = 0;
    }
    spnRez.innerHTML = br;
    if(br>10){
    spnRez.style.color = "red";
} else {
    spnRez.style.color = "green";
}
});

btnPlus.addEventListener("click", () => {
    br++;
    spnRez.innerHTML = br;
    if(br>=10){
        spnRez.style.color = "red";
    } else {
        spnRez.style.color = "green";
    }
})

// 5. Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spnIspis = document.getElementById("prikaz");
//let inputPol = document.querySelectorAll("input[name='pol]");

btnPrikazi.addEventListener("click", () => {
    value = inputUnos.value;
    spnIspis.innerHTML = `Hello ${value}`;
    inputUnos.value = "";
});


// Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). 
// Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.

btnPrikazi.addEventListener("dblclick", () => {
    // Jedan radio button koji je cekiran 
    let checkedPol = document.querySelector("input[name='pol']:checked");
    let valueCheckedPol = checkedPol.value; // Daje vrednost (value) iz slektovanog HTML taga
    console.log(valueCheckedPol);

    //////// Selektovanje svih radio buttons prema radio atributu /////
    let inputRadios = document.getElementsByName("pol");
    console.log(inputRadios);
    inputRadios.forEach( input => {
        if(input.checked) {
            console.log(input.value);
        }
    });

    // Isto postizemo i ukoliko koristimo querySelectorAll ////

    let inputRadiosQuery = document.querySelectorAll('input[name="pol"]');
    inputRadiosQuery.forEach( input => {
        if(input.checked){
            console.log(input.value);
        }
    });
});


// Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
let btnIzracunaj1 = document.getElementById("izracunaj1");
let inputKvadrad = document.getElementById("kvadrat");
let ispisKvadrat = document.getElementById("prikazKvadrat");

btnIzracunaj1.addEventListener("click", () => {
    let value = inputKvadrad.value;
    let rez = value * value;
    ispisKvadrat.innerHTML = rez;
    inputKvadrad.value = '';
});

let btnIzracunaj2 = document.getElementById("izracunaj2");
let inputPolovina = document.getElementById("polovina");
let ispisPolovina = document.getElementById("prikazPolovina");

btnIzracunaj2.addEventListener("click", () => {
    let value = inputPolovina.value;
    let rez = value / 2;
    ispisPolovina.innerHTML = rez;
    inputPolovina.value = "";
});

let btnIzracunaj3 = document.getElementById("izracunaj3");
let inputPovrsina = document.getElementById("povrsina");
let ispisPovrsina = document.getElementById("prikazPovrsine");

btnIzracunaj3.addEventListener("click", () => {
    let r = inputPovrsina.value;
    let rez = r**2*Math.PI;
    ispisPovrsina.innerHTML = rez;
    ispisPovrsina.style.backgroundColor = 'yellow';
    ispisPovrsina.style.width= '100px';
    ispisPovrsina.style.height= '100px';
    ispisPovrsina.style.border = 'solid black 1px';
    inputPovrsina.value = "";
    
});