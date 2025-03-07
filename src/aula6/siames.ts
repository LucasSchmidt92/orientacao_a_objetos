import { Cat } from "./protect"

export class Siames extends Cat{
    public showRaceSiames():String{
        return this.getRace();
    }
}

let meuGato = new Siames('Sapato', 5.5, 'SDR')
console.log(meuGato.showRaceSiames())
