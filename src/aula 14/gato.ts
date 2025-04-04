import { Animal } from "./animal"

class Gato extends Animal{
    constructor(nome:string){
        super(nome)
    }

 fazerBarulho() {
    console.log(`${this.nome} faz: miau miau!`)
 }
     
 }

 const gato = new Gato ("Sapato");
 gato.fazerBarulho()