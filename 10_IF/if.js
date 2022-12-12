let x, y;
x = 3;
y = 3;
console.log(x == y);


if(x == y)
{
    console.log("Vrednosi promenljivih x i y su jednake");
    console.log("Još jedna poruka");
    console.log("Vrednosti " + x + " i " + y + " su jednake");
    console.log(`Vrednosti ${x} i ${y} su jednake`);
}

console.log("Komanda posle if grananja");

x = 5;
x = 4.5;
x = '4';
y = "4";
if(x === y) 
{
    console.log(`Vrednosti x i y su jednake po tipu i po vrednosti`);
}

x = '14'
y = "4"
if(x !== y)
{
    console.log(`Vrednosti x i y su različite po tipu ili po vrednosti`);
}

