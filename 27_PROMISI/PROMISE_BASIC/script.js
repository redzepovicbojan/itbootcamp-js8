let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("Nesto resolve"); // Ako je sve prošlo Ok onda je resolve
        reject("Nesto reject"); // Ako nešto nije prošlo Ok onda je reject
    });
    return obj; // Vraca objekat promise
}

// Ako je promise vratio resolve, realizuje se .then() grana
// Ako je promise vratio reject, realizuje se .catch() grana
getSomething().then( a => {
    console.log(`Aktivirana je .then grana ${a}`);
}).catch( b => {
    console.log(`Aktivirana je .catch grana ${b}`);
});
