import { Animal } from "./animal";

export class Cat extends Animal{
    
    constructor(name:string, weigth:number){
        super(name, weigth);
    }

    meow():void{
        this.name = "Sapato"
        console.log("meow meow");
    }
    
}

function realizaAcao(qualquerAnimal:Animal){
      qualquerAnimal.eat(10);
}

let meuAnimal = new Animal ("Animal1", 12);
let meuGato = new Cat ("Rowena", 200);
realizaAcao(meuGato);
realizaAcao(meuAnimal);