import { BlocoDeMadeira } from "./blocoDeMadeira"
import { Espadas } from "./espadaDeDiamante" 

export class personagens{
    private nome: string
    private vida: number
    private forca: number
    private inventario:Array<object> = [{
        
    }]

    setAtributos(nome:string,vida:number,forca:number):void{
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    setInventario(inventario:Array<object>):void{
        this.inventario = inventario

    }
}

const novoPerosnagem = new personagens()
novoPerosnagem.setAtributos ('Steve',15,10)
novoPerosnagem.setInventario()
