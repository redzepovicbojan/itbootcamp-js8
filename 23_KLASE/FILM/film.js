class Film { 
    constructor(n, r, g, o){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    stampaNaslova(){
        console.log(`Naslov filma je ${this._naslov}`);
    }

    // Seteri

    set naslov (n) {
        if(n.length > 0) {
            this._naslov = n;
        } else {
            this._naslov = "Film";
        }
    }

    set reziser (r) {
        if(r.length > 0) {
            this._reziser = r;
        } else {
            this._reziser = "John Doe";
        }
    }

    set godinaIzdanja (g) {
        if(g <= 1800) {
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = g;
        }
    }

    set ocene (o) {
        if(Array.isArray(o)){
            this._ocene = o;
        } else {
            this._ocene = [];
        }
        
    }
    // Geteri

    get naslov () {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    get ocene(){
        return this._ocene;
    }
    // Obicna metoda

    stampaj() {
        console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
    }

    prosek() {
        let suma = 0;
        this.ocene.forEach(ocena => {
            suma += ocena;
        });
        return suma / this.ocene.length;
    }
    
}


export default Film;