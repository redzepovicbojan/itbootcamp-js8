console.log("CALLBACK");

let getResponse = resource => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();
    // 2. Otvaranje kreiranog zahteva
    request.open("GET",resource);
    // 3.
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener( "readystatechange", ()=>{
            if(request.readyState == 4 && request.status == 200){
                resolve(request.responseText); // Sve Oke i koristimo resolve kome prosledjuemo podatke iz JSON fajla
            }
            else if (request.readyState == 4){
                reject("Nije moguce dohvatiti podatke.") // Nesto nije Oke i koristimo reject kome saljemo tekst greske
            }
        });
    });
}

getResponse("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json izvršen", sadrzaj);
    return getResponse("../JSON/drugi.json"); //Vraca Promise, ukoliko je resolved na njega se onodi naredni then
}).then(sadrzajDrugog => {
    console.log("drugi.json resolved", sadrzajDrugog);
    return getResponse("../JSON/treci.json"); //Vraca Promise, ukoliko je resolved na njge se odnosi naredni then
}).then(sadrzajTreceg => {
    console.log("treci.json resolved", sadrzajTreceg);
}).catch(greska => {
    console.log("Promise reject", greska);
});


console.log("KRAJ");