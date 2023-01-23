export class Knjiga {
    constructor(n, a, gI, bS, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = gI;
        this.brojStrana = bS;
        this.cena = c;
    }

    set naslov (n){
        if(n.length > 0){
            this._naslov = n;
        } else {
            this._naslov = "";
        }
    }
    get naslov (){
        return this._naslov;
    }

    set autor(a){
        if(a.length > 0){
            this._autor = a;
        } else {
            this._autor = ""
        }
    }
    get autor(){
        return this._autor;
    }

    set godIzdanja(gI){
        if(gI > 1500){
            this._godIzdanja = gI;
        } else {
            this._godIzdanja = 1500;
        }
    }
    get godIzdanja() {
        return this._godIzdanja;
    }

    set brojStrana(bS){
        this._brojstrana = bS;
    }
    get brojStrana(){
        return this._brojstrana;
    }

    set cena(c){
        this._cena = c;
    }
    get cena(){
        return this._cena
    }

    stampaj (){
        document.body.innerHTML += `
        <div>
            <p>Naslov: ${this.naslov}</p>
            <p>Autor: ${this.autor}</p>
            <p>God. izdanja: ${this.godIzdanja}</p>
            <p>Br. strana: ${this.brojStrana}</p>
            <p>Cena: ${this.cena}</p>
        </div>`;
    }

    obimna(){
        return this.brojStrana > 600;
    }

    skupa(){
        return this.cena > 8000;
    }

    dugackoIme(){
        return this.autor.length > 18;
    }
}