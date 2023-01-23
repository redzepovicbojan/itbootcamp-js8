let btnDodaj = document.getElementById("dodaj");
let inputObaveza = document.querySelector('#inputdodaj');
let ulTasks = document.querySelector('ul');


let inputRadio = document.getElementsByName("dodajte");
// Add elements on click
btnDodaj.addEventListener( "click", () => {

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
    }
});
