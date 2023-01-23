class Datum{
    constructor(d, m, g){
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }

    set dan (d) {
        switch ( this.mesec ){
            case 1:
            case 3: 
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if(d <= 31 && d <= 1){
                    this._dan = d;
                } else {
                    this._dan = 1;
                }
                break;
            case 2:
                if (((this.godina % 4 == 0) && (this.godina % 100 != 0)) || (this.godina % 400 == 0)) {
                    if( d <= 29 && d >= 1) {
                        this._dan = d;
                    } else {
                        this._dan = 1;
                    }
                }
                break;
            default: 
                if(d <= 30 && d <= 1){
                    this._dan = d;
                } else {
                    this._dan = 1;
                }
                break;

        }
    }
    get dan () {
        return this._dan;
    }

    set mesec (m) {
        if ( m > 0 && m < 13){
            this._mesec = m;
        } else {
            this._mesec = 1;
        }
    }
    get mesec () {
        return this._mesec;
    }

    set godina (g) {
        if( g >= 1900 && g <= 2100){
            this._godina = g;
        } else {
            this._godina = 2000;
        }
    }
    get godina () {
        return this._godina;
    }
}
export default Datum;