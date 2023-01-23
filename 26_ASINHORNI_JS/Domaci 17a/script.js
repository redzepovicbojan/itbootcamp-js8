console.log("CALLBACK");

let getResponse = resource => {
    let request = new XMLHttpRequest();
    request.open("GET",resource);
    request.send();
    return new Promise((resolve, reject) => {
        request.addEventListener( "readystatechange", ()=>{
            if(request.readyState == 4 && request.status == 200){
                resolve(request.responseText);
            }
            else if (request.readyState == 4){
                reject("Nije moguce dohvatiti podatke.");
            }
        });
    });
}

getResponse("./sportisti.json").then(sadrzaj => {
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
