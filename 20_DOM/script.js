console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag)

let el1 = document.getElementById("p2");
console.log(el1); //objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); //HTML Collection objkata iz DOM stabla

let el3 = document.getElementsByTagName('p');
console.log(el3); //HTML Collection objekata is DOM stabla

let el4 = document.getElementsByTagName("a");
console.log(el4); //

let el5 = document.getElementsByName("p");
console.log(el5);


//Pristup elementima HTML Collection
for(let i=0; i<el2.length; i++){
    console.log(el2[i]); //el2[i] je element (objkeat, koji HTML tag) iz HTML kolekcije el2
}

/*Ovako ne moze jer HTML Collection ne poseduje forEach petlju
el2.forEach( e=>{
    console.log(e);
})
*/

let elems = Array.from(el2);
elems.forEach(e => {
    console.log(e);
});

// Pristup elementima NodeList - moze i preko for i preko forEach
el5.forEach(e=>{
    console.log(e);
});

// Primena metoda querySelector
let t1 = document.querySelector("#p2"); //kao parametar ide css selektor
console.log(t1); //objekat

let t2 = document.querySelector(".par");
console.log(t2); // objekat - PRVI objekat obuhvacen proseldjenim CSS selektorom

t3 = document.querySelectorAll(".par");
console.log(t3);


t1.innerHTML += "Novi tekst paragrafa sa id-jem <span class='bold'>p2</span>";

for(let i=0; i<t3.length; i++){
    t3[i].innerHTML = "Promena teksa u elementu sa klaasom <span class='bold'>par</span>"
}


let link = document.querySelector("a");

link.href = "https://www.google.com";
link.target = "_blank";
link.id = "link";

link.style.color = "red";
link.style.border = "1px solid blue";
link.style.fontSize = "24px";

// link.style ="color: red; border: 1px solid blue; font-size: 24px";

let table = document.querySelector("table");
console.log(table);
console.log(table.parentNode);
console.log(table.childNodes[1]); //toby
console.log(table.childNodes[1].childNodes[0]); //tr
for( let i=0; i<document.body.childNodes.length; i++) {
    let element = document.body.childNodes[i];
    console.log(element);
}