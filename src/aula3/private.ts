export class Cat{
    private name:string;
    private weight:number;

    //construtor

/*constructor(name:string, weigth:number) {
    this.name = name;
    this.weight = weigth;
    
}
*/
//metodos

   setName(nomeCat:string):void{this.name=nomeCat;}
   
    meow():void{
        console.log("Meow Meow")

    }

    eat(quantity:number):void{
        console.log("the cat has eaten"+quantity);
    }
}

const meuGato = new Cat();
meuGato.setName("Rowena")
meuGato.meow();
meuGato.eat(200);

