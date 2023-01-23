export class Boje {
    constructor(tD, z, i) {
        this.talasnaDuzina = tD;
        this.zasicenje = z;
        this.intenzitet = i;
    }

    set talasnaDuzina(tD){
        if(tD >= 380 && tD <= 740){
            this._talasnaDuzina = tD;
        } else {
            this._talasnaDuzina = 500;
        }
    }
    get talasnaDuzina (){
        return this._talasnaDuzina;
    }

    set zasicenje (z) {
        if( z >= 0 && z <= 100){
            this._zasicenje = z;
        } else {
            this._zasicenje = 50;
        }
    }
    get zasicenje () {
        return this._zasicenje
    }

    set intenzitet (i) {
        if( i >= 0 && i <= 100){
            this._zasicene = i;
        } else {
            this._zasicene = 50;
        }
    }
    get intenzitet () {
        return this._zasicene;
    }

}