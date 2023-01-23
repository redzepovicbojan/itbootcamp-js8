let inputObaveza = document.querySelector('#inputdodaj');
let ulTasks = document.querySelector('ul');
let inputRadio = document.getElementsByName("dodajte");

let liTasks;
let arrTasks = [];

// Add elements on click
inputObaveza.addEventListener("keyup", (e) => {
    console.log(e.key, e.keyCode);
    if(e.keyCode == 13){
        if(inputObaveza.value.length > 0){
            let li = document.createElement('li');
            li.textContent = inputObaveza.value;
            let radioAdd = document.querySelector("input[name=dodajte]:checked");
            // console.log(radioAdd);
            if(radioAdd.value == "gore"){
                ulTasks.prepend(li);
            } else {
                ulTasks.append(li);
            }
            // ulTasks.append(li);
            inputObaveza.value = "";
            liTasks = document.querySelectorAll("li");
            
            // console.log(liTasks[0]);
            // let myJSON = JSON.stringify(liTasks);
            // localStorage.setItem("niz",myJSON);
            
            // liTasks.forEach( li => {
                
            // console.log(li);
            // });
            // console.log(JSON.stringify(liTasks[0]));
            
        }
    }

});

ulTasks.addEventListener("click", e => {
    // console.log("Kliknuto na UL");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName)
    if(e.target.tagName == "LI"){
        // console.log("kliknuto na LI");
        // e.target.classList.toggle("precrtaj")
        e.target.remove();
        arrTasks = document.querySelector("ul");
        console.log(arrTasks.children[0]);
        
    }
});

///////////////////////////////
//LOCAL STORAGE////////////////
///////////////////////////////
// Smestanje u lokalnu memoriju
localStorage.setItem("username","Jelena");
localStorage.setItem("city","Nis");
// localStorage.setItem("name","Bojan")
// Update u lokalnoj memoriji
localStorage.setItem("username","Stefan");
//Ukoliko key postoji vel u laocak storage onda vrsi uptdate vrednosti za taj key
//Ukoliko key ne postoji u lcoal storage, onda vrsi dodavanje(novi unos) u local storage
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("name"))
let u = localStorage.getItem("username")
console.log(u);

localStorage.setItem("year",26);
let god = localStorage.getItem("year");
god++;
console.log(god);

//////////////////////////////////////////////////////

