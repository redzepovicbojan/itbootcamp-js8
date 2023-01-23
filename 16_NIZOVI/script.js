let cars = ["Volvo","BMW","Toyota"];
console.log(cars[0]); // 
console.log(cars[1]); // BMW
console.log(cars[2]); // undefined

cars[0]="Peugeot";
cars[1]="Citroen";
cars[1]+="C5";

console.log(cars);

// Ispis elemenata niza cars
for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

let razno = [15,-3.5,"Hello", true,[1,2,3]];

// Prikaz elemenata niza razno
for(let i=0; i< razno.length;i++){
    console.log(razno[i]);
}

for(i=0;i<razno[4].length;i++){
    console.log(razno[4][i]);
}

// Uvecanje vrednosti unutrasnjeg niza za po 10%
for(let i=0 ;i<razno[4].length; i++){
    razno[4][i]*=1.1;
}

for(i=0; i<razno[4].length; i++){
    console.log(razno[4][i]);
}


// Odrediti zbir elemenata celobrojnog niza

let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];

let sumaElem = niz => {
    let zbir = 0;
    for(let i=0; i<niz.length; i++){
        zbir += niz[i];
    }
    return zbir;
}


// Zadatak 3 
let proizvodElem = niz => {
    let proizvod = 1;
    for(let i=0; i<niz.length;i++){
        proizvod*=niz[i];
    }
    return proizvod;
}



// 4. Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = niz => {
    let suma = 0;
    for(let i=0; i<niz.length; i++){
        suma+=niz[i];
    }
    return suma/niz.length;
}

// druga varijanta 
let srednjaVrednost2 = niz => sumaElem(niz)/niz.length;

// 

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednost = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}

let br = [8, 11, 10, 11, 4];
console.log(maxVrednost(br));
// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednost = niz => {
    let min = niz[0];
    for(let i=1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza. 

let maxVrednostIndex = niz => {
    let max = niz[0];
    let maxIndex = 0;
    for (let i=1; i<niz.length; i++){
        if (niz[i]>max){
            max = niz[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
// druga verzija - bolja
let indMaxNiza = niz => {
    let max = maxVrednost(niz);
    let index;
    for(let i=0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
        }
    }
    return index;
}
let elementi = [15, 13, 15, 10, 15, 12];
console.log(indMaxNiza(elementi));

// treca verzija 
let indMaxNiza2 = niz => {
    let max = maxVrednost(niz);
    let index;
    for(let i=0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
            break;
        }
    }
    return index;
}
console.log(indMaxNiza2(elementi));




// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

let minVrednostIndex = niz => {
    let min = niz[0];
    let minIndex = 0;
    for (let i=0; i<niz.length; i++){
        if (niz[i]<min){
            min = niz[i];
            minIndex = i;
        }
    }
    return minIndex;
}


// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brElemVeciOdSrednjeVr = niz => {
    let srVred = srednjaVrednost(niz);
    let brElem = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i]>srVred){
            brElem++;
        }
    }
    return brElem; 
}

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozitivnih = niz => {
    let zbir = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i]>0){
            zbir+=niz[i];
        }
    }
    return zbir;
}


// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnihElem = niz => {
    let brojac = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i]%2==0){
            brojac++;
        }
    }
    return brojac;
}

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let brParnihElNeparInd = niz => {
    let brojac = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i]%2==0 && i%2!=0){
            brojac++;
        }
    }
    return brojac;
}


console.log(brParnihElNeparInd(elementi));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.

let sumElemParnInd = niz => {
    let sum = 0;
    for(let i=0; i<niz.length; i++){
        if(i%2==0){
            sum+=niz[i];
        }
    }
    return sum;
}

console.log(sumElemParnInd(elementi));
// 14. Promeniti znak svakom elementu celobrojnog niza.
let promZnaka = niz => {
    for(i=0;i<niz.length;i++){
        niz[i]*=-1;
    }
    return niz;
}
console.log(promZnaka(elementi));

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promZnakNepar = niz => {
    for(i=0;i<niz.length;i+=2){
        if(niz[i]%2!=0){
            niz[i]*=-1;
        }
    }
    return niz;
}
let nekiNiz = [3, 4, 23, -5, -8, 30, 13, 4];
console.log(promZnakNepar(nekiNiz));

// let promZnakNepar2 = niz => {
//     niz.forEach((el,i) => {
//         if (el % 2 != 0 && i % 2 == 0))
//     });
// }

// let ZnakNeparniElemParniInd = (niz) => {
//     let noviNiz = [];
//     niz.forEach((el, i) => {
//       if (el % 2 != 0 && i % 2 == 0) {
//         noviNiz.push(el * -1);
//       }
//     });
//     return noviNiz;
//   };
// b = [1, 3, 6, -8, 6, 6, 4];
// let znak1 = (niz) => {
//     niz.forEach((el, i, array) => {
//       if (array[i] % 2 != 0 && i % 2 == 0) {
//         array[i] = array[i] * -1;
//       }
//     });
//     console.log(niz);
// };
// znak1(b);

let b = [1, 3, 5, -9, 7, 6, 4];
let znak1 = niz => {
  niz.forEach( e => {
    if (e % 2 != 0) {
        e=e*(-1);
      }
      console.log(e);
  });
  console.log(niz);
};

znak1(b);

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let lista = niz => {
    let lista = "<ul>"
    for(i=0;i<niz.length;i++){
        lista = lista + `<li>${niz[i]}</li>`;
    }
    lista += "</li>";
    return lista;
}

let kupovina = ["mleko","jogurt","hleb","nutela","sok"];
document.write(lista(kupovina));


// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

// Pozivi funkcija
let brojevi3 = [5, 1, 2];
console.log(sumaElem(brojevi));
console.log(sumaElem(brojevi2));

console.log(proizvodElem(brojevi));
console.log(proizvodElem(brojevi3));

// 4.zadatak ispis
console.log(srednjaVrednost(brojevi));
console.log(srednjaVrednost(brojevi2));
console.log(srednjaVrednost(brojevi3));

// 5. zadatak ispis
console.log(maxVrednost(brojevi));
console.log(maxVrednost(brojevi2));
console.log(maxVrednost(brojevi3));

// 6. zadatak ispis
console.log(minVrednost(brojevi));
console.log(minVrednost(brojevi2));
console.log(minVrednost(brojevi3));

// 7. zadatak ispis
console.log(maxVrednostIndex(brojevi));
console.log(maxVrednostIndex(brojevi2));
console.log(maxVrednostIndex(brojevi3));

// 8. zadatak ispis
console.log(minVrednostIndex(brojevi));
console.log(minVrednostIndex(brojevi2));
console.log(minVrednostIndex(brojevi3));

// 9. zadatak ispis
console.log(brElemVeciOdSrednjeVr(brojevi));
console.log(brElemVeciOdSrednjeVr(brojevi2));
console.log(brElemVeciOdSrednjeVr(brojevi3));

// 10. zadatak ispis
console.log(zbirPozitivnih(brojevi));
console.log(zbirPozitivnih(brojevi2));
console.log(zbirPozitivnih(brojevi3));

// 11. zadatak ispis
console.log(brParnihElem(brojevi));
console.log(brParnihElem(brojevi2));
console.log(brParnihElem(brojevi3));



// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let kupovina2 = ["mleko","jogurt","hleb","nutela","sok"];

let duzinaElementa = arr => {
    for(i=0; i<arr.length; i++){
        console.log(`Duzina elementa ${i} je ${arr[i].length}`);
    }
}

duzinaElementa(kupovina2);
// 20. Odrediti element u nizu stringova sa najvećom dužinom.

let najveciString = niz => {
    let duzina = 0;
    let element;
    let elementBr;
    for(i=0; i<niz.length; i++){
        if(niz[i].length>duzina) {
          
            duzina = niz[i];
            elementBr = i;
        }
    }
    return elementBr;
}

console.log(`Element sa najvecom duzinom je ${najveciString(kupovina2)}`);

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let prosecnaDuzinaStringa = niz => {
    let duzina = 0;
    for(let i=0; i<niz.length; i++){
        duzina+=niz[i].length;
    }
    return duzina/niz.length;
}

let elemDuziOdProseka = niz => {
    let brojac = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i].length>prosecnaDuzinaStringa(niz)){
            brojac++;
        }
    }
    return brojac; 
}

console.log(elemDuziOdProseka(kupovina2));


// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let elemSaA = niz => {
    let br = 0;
    for(let i=0;i<niz.length; i++){
        if(niz[i].includes('a')){
            br++;
        }
    }
    return br;
}

console.log(elemSaA(kupovina2));

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
let elemPocSaA = niz => {
    let br = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i].charAt(0)=='a'|| niz[i].charAt(0)=="A"){
            br++;
        }
    }
    return br;
}

console.log(elemPocSaA(kupovina2));

// 24. 
let niz1 = [1,3, 5, 7, 9, 11];
let niz2 = [2, 4, 6, 8, 10, 12];

let niz3 =[]; 

let treciNiz = (a,b) => {
    for(let i=0; i<a.length; i++){
        niz3.push(a[i],b[i]);
    }
    return niz3;
}
treciNiz(niz1, niz2);

console.log(niz3);

let c = [];
let treciNiz2 = (a,b) => {
    for(let i=0; i<a.length; i++){
        c[2*i] = a[i];
        c[2*i+1] = a[i];
    }
    return c;
}
treciNiz(niz1, niz2);

console.log(niz3);


//25. 

let niz4 =[];
let proizvodNizova = (k,l)=>{
    for(let i=0; i<k.length; i++){
        niz4.push(k[i]*l[i]);
    }
    return niz4;
} 

proizvodNizova(niz1,niz2);
console.log(niz4);

// 26.
let niz5 = [];
let aritmSredina = a => {
    for(i=0;i<a.length/2; i++){
        niz5.push((a[i]+a[a.length - i - 1])/2);
    }
    return niz5;
}

// (1+11)/2 =6;
aritmSredina(niz1);
console.log(niz5);



// proba neka

let kupovina3 = ["mleko","jogurt","hleb","nutela","sok"];

let maxIndex = niz => {
    let max = niz[0];
    let maxIndex = 0;
    for(let i=1; i<niz.length; i++) {
        if(niz[i]> max) {
            maxIndex = i;
            max = niz[i];
        }
    }
    return maxIndex;
}

console.log(maxIndex(kupovina2));