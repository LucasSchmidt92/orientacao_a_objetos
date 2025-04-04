interface Animal{
    nome:string;
    emitirSom():void;
}

interface Voador{
    voar():void;
}

interface Aquatico{
    nadar():void;
}

class Cachorro implements Animal{
    nome:string;
    constructor(nomeConst:string){
        this.nome = nomeConst;
    }

    emitirSom(): void {
        console.log (`${this.nome} faz au au`);
    }
}

let myDog = new Cachorro ("Rowena");
myDog.emitirSom();

class Pato implements Animal,Voador,Aquatico{
    nome:string;
    constructor(nomeConst:string){
        this.nome = nomeConst;

    }
  
    emitirSom(): void {
        console.log(`${this.nome} faz quack quack`);
    }
    voar(): void{
        console.log(`${this.nome} esta a voar`);
        
    }

    nadar():void{
        console.log(`${this.nome} esta a nadar`);

    }
}

let myDuck = new Pato ("Patolino");
myDuck.emitirSom();
myDuck.voar();
myDuck.nadar();

//interface tipo Generica
interface Lista <T>{
    adicionar(item:T):void;
    remover(item: T):void;
    tamanho():number;
}

class ListaNumerica implements Lista <number>{
    private items: number[] = [];
    adicionar(item: number): void {
        this.items.push(item);
        }
        remover(item:number): void{
            const index = this.items.indexOf(item);
            if (index!== -1){
                this.items.splice(index, 1);
            }
        }
        tamanho(): number{
            return this.items.length
        }
}

let myList = new ListaNumerica();
myList.adicionar(5),
myList.adicionar(2);
console.log(myList.tamanho())