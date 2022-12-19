//let, var i const
// scope - Oblast vazenja promenljive 

let a = 5;
var b = 10;

console.log(a,b);

a++;
b++;

console.log(a,b);

a = 5;
var b = 10;

console.log(a,b);

///////////////////////

let x = 10;
var y = 20;

if(true) {
    let x = 15;
    console.log(x,y);
}

console.log(x,y)