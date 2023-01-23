console.log("CALLBACK");

let getResponse = (resource, callback) => {
// 1. Kreiranje XML objekta

    let request = new XMLHttpRequest();
    request.addEventListener( "readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            // Sve Oke
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState == 4){
            // Nesto nije Oke
            // console.log("Nije moguce dohvatiti podatke");
            callback(undefined, "Nije moguce dohvatiti podatke.")
        }
    });
    // 2. Otvaranje kreiranog zahteva
    request.open("GET",resource);
    //
    request.send();
}

getResponse("../JSON/prvi.json", (data, err) => {
    if(data) {
        // Ukoliko je sve OK sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj drugi.json fajl
        console.log(data);
        getResponse("../JSON/drugi.json", (data, err) => {
            if(data){
                // Ukoliko je sve ok sa drugi.json fajlom, ispisi njegove podatke i ucitaj treci.json fajl
                console.log(data);
                getResponse("../JSON/treci.json", (data, err) => {
                    if(data){
                        console.log(data);
                    } else {
                        console.log(err); // Ispisuje gresku ukoliko treci.json nije prosao
                    }
                });
            } else {
                console.log(err); // Ispisuje gresku ukoliko drugi.json nije prosao
            }
        });
    } else {
        console.log(err); // Ispisuje gresku ako prvi.json nije prosao
    }
});

console.log("KRAJ");