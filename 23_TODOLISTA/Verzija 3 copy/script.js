let inputObaveza = document.querySelector('#inputdodaj');
let ulTasks = document.querySelector('ul');
let inputRadio = document.getElementsByName("dodajte");

// U "ul" element koji je prazan, dodajemo li elemente iz local storage-a
let fromBaze = JSON.parse(localStorage.getItem("niz"));
fromBaze.forEach( i => {
    ulTasks.innerHTML += i;
})

let liTasks;
let arrTasks;

//Dodajemo elemente na enter
inputObaveza.addEventListener("keyup", (e) => {
    console.log(e.key, e.keyCode);
    if(e.keyCode == 13){
        if(inputObaveza.value.length > 0){
            let li = document.createElement('li');
            li.textContent = inputObaveza.value;
            let radioAdd = document.querySelector("input[name=dodajte]:checked");
            if(radioAdd.value == "gore"){
                ulTasks.prepend(li);
            } else {
                ulTasks.append(li);
            }
            inputObaveza.value = "";
            liTasks = document.querySelectorAll("li");
            arrTasks = [];
            //Posle svakog dodatog elementa prolazimo kroz sve li elemente i pravimo novi niz svih elemenata
            liTasks.forEach( li => {
                liVrednost = `<li>${li.textContent}</li>`;
                arrTasks.push(liVrednost);
            })
            // Vrsimo update vrednosti za key "niz";
            let myJSON = JSON.stringify(arrTasks);
            localStorage.setItem("niz",myJSON);
        }
    }

});

// Brisanje elemenata
ulTasks.addEventListener("click", e => {
    if(e.target.tagName == "LI"){
        e.target.remove();
        liTasks = document.querySelectorAll("li");
        arrTasks = [];
        //Posle svakog izbrisanog elementa prolazimo kroz sve li elemente i pravimo novi niz svih elemenata
        liTasks.forEach( li => {
            liVrednost = `<li>${li.textContent}</li>`;
            arrTasks.push(liVrednost);
        })
        // Vrsimo update vrednosti za key "niz";
        let myJSON = JSON.stringify(arrTasks);
        localStorage.setItem("niz",myJSON);
    }
});


