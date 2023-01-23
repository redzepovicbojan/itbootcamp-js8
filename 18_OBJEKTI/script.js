let blog1 = {
    title:'HTML',
    content: 'Ovo je blog o osnovnim HTML tagovima',
    author: 'Bojan',

};
// ispis celog objekta
console.log(blog1);
console.log(typeof blog1);
// ispis jednog propertija
console.log(blog1.title);
console.log(blog1['title']);


//izmena propertija 
blog1.content = "Osnove HTML-a";
console.log(blog1);
blog1['author'] = "Stefan";
console.log(blog1);

/////////////////////////

let user = {
    username: "JM",
    age: 28,
    blogs:["If Naredba Grananja", "For petlja", "While petlja"],
    login: function(){
        console.log("Ulogovani ste");
    },
    logout: function(){
        console.log("Izlogovani ste");
    },
    logBlogs: function(){
        this.blogs.forEach(b=>{
            console.log(b);
        })
    }
};

user.login();
user.logout();
user.logBlogs();
user.blogs.forEach(b => {
    document.write(`<p>${b}</p>`);
})

/////////////////////////////////
// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).
let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15],
    // 1.1.
    prosecna:function(){
        let suma = 0;
        this.temperature.forEach(t => {
            suma+=t;
        });
        return suma/this.temperature.length;
    },
    // 1.2. 
    brNatprosecnih: function(){
        let br=0;
        let prosek = this.prosecna();
        this.temperature.forEach(t => {
            if(t>prosek){
                br++;
            }
        });
        return br;
    },
    // 1.5.
    toplo: function(){
        if(this.brNatprosecnih() > this.temperature.length/2){
            return true;
        } else {
            return false;
        }
    },
    toplo2: function(){
        return (this.brNatprosecnih() > this.temperature.length/2);
    },
    // 1.6 
    leden: function(){
        for(let i=0; i<this.temperature.length; i++){
            if(this.temperature[i]>0){
                return false;
            }
        }
        return true;
    }
};

console.log(dan.prosecna());
console.log(dan.brNatprosecnih());
console.log(dan.toplo());
console.log(dan.leden());





else {
    for(let i=0; i<plac.lenght/2+1; i++){
        sumaRanije+=plac[i].km;
        brojacRanije++;
    }
    for(let i=plac.length/2+1; i<plac.length; i++){
        sumaSkorije+=plac[i].km;
        brojacSkorije++;
    }
}