export class Pacijent{
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    // ime
    set ime(i) {
        this._ime = i;
    }

    get ime() {
        return this._ime;
    }
    // visina
    set visina(v) {
        if(v > 0 && v < 250){
            this._visina  = v;
        } else {
            this._visina = 1.7;
        }
    }

    get visina() {
        return this._visina
    }
    // tezina
    set tezina(t) {
        if(t > 0 && t < 550){
            this._tezina = t;
        } else {
            this._tezina = 58;
        }
    }

    get tezina(){
        return this._tezina
    }

    stampaj(){
        console.log(this)
    }
    stampajListu(){
        let htmlLista =
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>
        `;
        return htmlLista;
    }

    bmi(){
        return this.tezina / this.visina**2;
    }
    kritican(){
        return this.bmi() < 15 || this.bmi() > 40;
    }
    
}
