import { Animal } from "./animal"

class Cachorro extends Animal{
    constructor(nome:string){
        super(nome)
    }

 fazerBarulho() {
    console.log(`${this.nome} faz: Au Au!`)
 }
     
 }

 const cao = new Cachorro ("Rowena");
 cao.fazerBarulho()