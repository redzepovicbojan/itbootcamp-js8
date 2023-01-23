// DOMACI ZADATAK BR. 12
// Za objekat dan kreirati sledeće metode:

// Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
// Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.


let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [25, 26, 24, 25, 37, 26],
    tropski: function(){
        for(let i=0; i<this.temperature.length; i++){
            if(this.temperature[i]<24){
                return false;
            }
        }
        return true;
    },
    nepovoljan: function(){
        for(let i=0; i<this.temperature.length-1; i++){
             if(this.temperature[i]-this.temperature[i+1] > 8 || this.temperature[i]-this.temperature[i+1] < -8){
                return true;
             }
        }
        return false;
    },
    neuobicajan: function(){
        let minimal = this.temperature[0];
        let maximal = this.temperature[0];
        this.temperature.forEach( e => {
            if(e < minimal){
                minimal = e;
            }
            if(e > maximal){
                maximal = e;
            }
        });
        return ((minimal < -5 && this.kisa) || (maximal > 25 && this.oblacno) || (this.kisa && this.oblacno && this.sunce));

    },
};

console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajan());

// Mnoziti clanove niza sve dok je proizvod manji od 541



niz=[3,4,6,4,3,5,6,5,4,3,4,5,4,3,23,5,3,3,];
let pr=1;

for(let i=0; i<niz.length; i++){
    pr*=niz[i];
    if(pr>541){
        pr/=niz[i];
        break;
    }
}
console.log(`a proizvod je ${pr}`);




let nizDo541 = [2, 5, 6, 12, 11];
let proizvodNiza = 1;
let proizvodNIzaDo541 = (niz, limit) => {
  for (e of niz) {
    if (e * proizvodNiza > limit) {
      break;
    }
    proizvodNiza *= e;
  }
  return proizvodNiza;
};
console.log(proizvodNIzaDo541(nizDo541, 541));