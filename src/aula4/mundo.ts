import { BlocoDeMadeira } from "./blocoDeMadeira"
import { Espadas } from "./espadaDeDiamante"
import { Monstros } from "./monstros"
import { personagens } from "./personagem"

export class Mundo{
    blocos:Array<object>

    setAtributos(blocos:Array<object>):void{
        this.blocos = blocos
    }

    exibirMundo():void{
        console.log(this.blocos)
    }
}

const madeira1 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho',15)

const novoMundo = new Mundo()
novoMundo.setAtributos([madeira1])

novoMundo.exibirMundo()


