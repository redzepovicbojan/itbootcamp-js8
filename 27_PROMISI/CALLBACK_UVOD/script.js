console.log("Primeri callback f-ja");

let myFunc = callback => {
    callback();
};

myFunc(() => {
    console.log("Callback funkcija okinuta");
});
/////////////////////////////////////////////////
// Callback funkcija za sabiranja 2 broja.///////
/////////////////////////////////////////////////

let sum = callback => {
    callback(3, 5);
}

// 1.
// Kreirali smo posebnu funkciju koja nsam sluzi kao realizacija i koju cemo prosledjivati kao parametar.
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); // poziv funkcije koja realizuje callback ide bez zagrada

// 2. 
sum((a, b) => {
    console.log(a + b);
});

//////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    let rez = cb(10, 5);
    console.log(rez);
};

racunaj("oduzimanje", (x, y) =>{
    return x - y;
});

racunaj("deljenje", (x, y) => {
    return x / y;
});

///////////////////////////////

let racunaj2 = (str, br1, br2, funkcija) => {
    console.log(str, funkcija(br1, br2));

}
racunaj2("Mnozenje", 4, 5, (x, y)=> {
    return x * y;
});