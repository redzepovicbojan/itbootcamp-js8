const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//     // console.log(request.readyState);
//     if(request.readyState === 4) {
//         console.log(request.responseText);
//     }
// });

// request.addEventListener("readystatechange", function() {
//     // console.log(request.readyState);
//     if(this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });


request.addEventListener("readystatechange", () => {
    // console.log(request.readyState);
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
    } else if(request.readyState === 4) {
        console.log("Desila se greska");
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();



// Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
// Ispisati u konzoli one korisnike čiji website ima domen „.com“.
const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", () => {
    if(request1.readyState === 4 && request1.status === 200) {
        let data = JSON.parse(request1.responseText);
        data.forEach( user => {
            if(user.website.includes(".com")){
                console.log(user);
            }
        });
    } else if(request1.readyState === 4) {
        console.log("Desila se greska");
    }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();

// Ispisati korisnike čije ime sadrži reč „Clementin“.
const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", () => {
    if(request2.readyState === 4 && request2.status === 200) {
        let data = JSON.parse(request2.responseText);
        data.forEach( user => {
            if(user.name.includes("Clementin")){
                console.log(user);
            }  
        });
    } else if(request2.readyState === 4) {
        console.log("Desila se greska");
    }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

// Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", () => {
    if(request3.readyState === 4 && request3.status === 200) {
        let data = JSON.parse(request2.responseText);
        data.forEach( user => {
            if(user.company.name.includes("Group") || user.company.name.includes("LLC")){
                console.log(user);
            }
        });
    } else if(request3.readyState === 4) {
        console.log("Desila se greska");
    }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.
const request4 = new XMLHttpRequest();
request4.addEventListener("readystatechange", () => {
    if(request4.readyState === 4 && request4.status === 200) {
        let data = JSON.parse(request4.responseText);
        let cities = [];
        console.log("User cities:");
        data.forEach( user => {
            if(cities.includes(user.address.city) == false){
                cities.push(user.address.city);
                console.log(user.address.city);
            }
        });
    } else if(request4.readyState === 4) {
        console.log("Desila se greska");
    }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
const request5 = new XMLHttpRequest();
request5.addEventListener("readystatechange", () => {
    if(request5.readyState === 4 && request5.status === 200) {
        let data = JSON.parse(request5.responseText);
        let counter = 0;
        data.forEach( user => {
            if(Number(user.address.geo.lat) < 0 && Number(user.address.geo.lng < 0)){
                counter++;
            }
        });
        console.log(counter);
    } else if(request5.readyState === 4) {
        console.log("Desila se greska");
    }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();


// Zadaci sa slajda broj 16 

let getUsers = (resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState === 4) {
            reject("Desila se greska");
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}

let ispisKonzola = poruka => {
    document.body.innerHTML += poruka;
}

// Zadatak 2 
let websiteCom = niz => {
    niz.forEach(user => {
        if(user.website.includes(".com")){
            console.log(user.website);
        }
    })
}
getUsers(websiteCom, ispisKonzola);

// Zadatak 3
let imeClementin = niz => {
    niz.forEach(user => {
        if(user.name.includes("Clementin")){
            console.log(user.name);
        }
    });
}
getUsers(imeClementin, ispisKonzola);