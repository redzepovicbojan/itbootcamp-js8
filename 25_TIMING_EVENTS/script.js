console.log(1);
console.log(2);
window.setTimeout(() => {
    console.log("Poruka isipsana nakon 5 sekundi");
}, 1000*4);
console.log(3);
console.log(4);

let i=5;
setInterval(()=> {
    console.log(i);
    i++;
}, 1000)

let btn1 = document.getElementById("click1");
let btn2 = document.getElementById("click2");
let btn3 = document.getElementById("click3");
let btn4 = document.querySelector("#click4");
let ispis = document.getElementById("ispis");
let ispisSata = document.querySelector("#ispisSata");

let ososba = {
    ime: "Bojan",
    prezime: "Redzepovic",
    ispis: function(){
        console.log(this.ime + " " + this.prezime);
        // u arrow f-ji: this is window objekat
        // u anonomnoj f-ji: this je objekat
    }
}
ososba.ispis();

let v = 1000 * 3;
let tajmer = null;

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let vreme = new Date();
    let h = vreme.getHours();
    let m = vreme.getMinutes();
    let s = vreme.getSeconds();
    if(tajmer === null){
        tajmer = setTimeout(function() {
            ispis.innerHTML += `${h}:${m}:${s}<br>`;
            tajmer = null;
        }, v)
    }
});

btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearTimeout(tajmer);
    tajmer = null;
});

let vr = 0;
let clock = null;

btn3.addEventListener("click", (e) => {
    preventDefault(e);
    if(clock === null)  {
        clock = setInterval( () => {
            // let datum = new Date();
            // let h = datum.getHours();
            // let m = datum.getMinutes();
            // let s = datum.getSeconds();
            // ispisSata.innerHTML = `${h}:${m}:${s}<br>`;
            vr++;
            ispisSata.innerHTML = vr;
        }, 1000);
    }
});

btn4.addEventListener("click", () => {
    clearInterval(clock);
    clock = null;
});


let btn5 = document.getElementById("klik1");
let btn6 = document.getElementById("klik2");
let brojanje = document.getElementById("brojanje");


let sat = null;

btn5.addEventListener("click", () => {
    let br = 0;
    if(sat === null){
        sat = setInterval( () => {
            br++;
            brojanje.value = br;
        }, 1000);
    }
});

btn6.addEventListener("click", () => {
    clearInterval(sat);
    sat = null;
    brojanje.value = "";
});