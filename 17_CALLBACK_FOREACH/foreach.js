// Zadatak 2 Odrediti zbir elemenata celobrojnog niza.

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma+= el;
    });
    return suma;
}


let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max){
            max = el;
        }
    });
    return max;
}

// Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaxVr = niz => {
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) => {
        if(el > max){
            max = el;
            idx = i;
        }
    });
    return idx;
}

let indexSvihMaxVr2 = niz => {
    let max = maxVr(niz);
    let indices = [];
    niz.forEach((el,i) => {
        if(el == max) {
            indices.push(i);
        }
    });
    return indices;
}

let a=[1, 3, 4, 6];
console.log(sumaElem(a));
console.log(maxVr(a));
console.log(indexMaxVr(a));
// 

let b = [1, 3, 6, -8, 6, 6, 4];
// console.log(indexMaxVr(b));
console.log(indexSvihMaxVr2(b));


// 19. Ispisati dužinu svakog elementa u nizu stringova. 

let c = ["banane", "kupus", "limun", "kivi", "krompir"];
let duzinaElem = niz => {
    niz.forEach(string => {
        console.log(string.length);
    });
}
duzinaElem(c);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.

let najduziElem = niz => {
    let maxd=0;
    let maxStr = undefined;
    niz.forEach( el => {
        if(el.length>maxd){
            maxd = el.length;
            maxStr = el;
        }
    });
    return maxStr;
}

console.log(najduziElem(c));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let prosecnaDuzina = niz => {
    let sum = 0;
    niz.forEach(el =>  {
        sum+=el.length;
    });
    return sum/niz.length;
}

let brojNatprosecnoDugih = niz => {
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(el => {
        if(el.length>duz){
            br++;
        }
    });
    return br;
}
console.log(prosecnaDuzina(c));
console.log(brojNatprosecnoDugih(c));


// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let brojSadrziA = niz => {
    let br=0;
    niz.forEach( el => {
        if(el.includes('a') || el.includes('A')){
            br++;
        }
    });
    return br;
}

console.log(brojSadrziA(c));

// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let brojPocinjeA = niz => {
    let br=0;
    niz.forEach( el => {
        if(el[0] =='a' || el[0] == 'A'){
            br++;
        }
    });
    return br;
}

console.log(brojPocinjeA(c));