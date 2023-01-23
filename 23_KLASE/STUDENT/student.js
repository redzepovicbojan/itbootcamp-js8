export class Student {
    constructor(j, i, p, nO){
        this.jmbg = j;
        this.ime = i;
        this.prezime = p;
        this.nizOcena = nO;
        this.prosecnaOcena = function () {
            let suma = 0;
            this.nizOcena.forEach(ocena => {
                suma+=ocena;
            });
            return suma / this.nizOcena.length;
        }
    }

    set jmbg (j) {
        if(typeof j == "string" && j.length == 13){
            this._jmbg = j;
        } else {
            this._jmbg = "1234567891234";
        }
    }
    get jmbg () {
        return this._jmbg;
    }

    set ime (i) {
        if( i.length > 0) {
            this._ime = i;
        } else {
            this._ime = "Nema imena";
        }
    }
    get ime () {
        return this._ime;
    }

    set prezime (p) {
        if( p.length > 0) {
            this._prezime = p;
        } else {
            this._prezime = "Nema prezimena";
        }
    }
    get prezime () {
        return this._prezime;
    }

    set nizOcena (nO) {
        if(Array.isArray(nO)){
            for (let i = 0; i < nO.length; i++){
                if(nO[i] < 6 || nO[i] > 10) {
                    nO[i] = 6;
                }
            }
            this._nizOcena = nO;
        } else {
            this._nizOcena = [6];
        }
    }
    get nizOcena () {
        return this._nizOcena;
    }


    ispis() {
        console.log(`${this.ime} ${this.prezime} ${this.prosecnaOcena()} ${this.jmbg}`);
    }
}

