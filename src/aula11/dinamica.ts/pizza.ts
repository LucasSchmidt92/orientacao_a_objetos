import { Sabores } from "./pizzaria";

export class Pizza{
   protected sabor: Sabores
    protected tamanho: string
    protected preco: number

    constructor(saborPizza:Sabores, tamanhoPizza:string, precoPizza:number){
        this.sabor = saborPizza
        this.tamanho = tamanhoPizza
        this.preco = precoPizza
    }

    getDescription():void{
        console.log(`A pizza é de ${this.sabor}, e seu tamanho é ${this.tamanho}  e o seu valor é R$${this.preco}`)
    }   
}
const pizza = new Pizza (Sabores.calabresa, 'médio', 92)

pizza.getDescription()