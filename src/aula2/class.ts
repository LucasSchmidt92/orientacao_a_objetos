export class Cat{
    name:string;
    weight:number;

    //construtor

constructor(name:string, weigth:number) {
    this.name = name;
    this.weight = weigth;
    
}

//metodos
    meow():void{
        console.log("Meow Meow")

    }

    eat(quantity:number):void{
        console.log("the cat has eaten"+quantity);
    }
}

const meuGato = new Cat("Rowena", 9.0);
meuGato.meow();
meuGato.eat(200);

const segundoGato = new Cat("Sapato", 8);
segundoGato.meow();