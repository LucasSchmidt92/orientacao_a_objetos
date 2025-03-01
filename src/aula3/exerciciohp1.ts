export class Varinha {
    private madeira:string
   private tamanho:number
  private nucleo:string

    setAtributos(madeira:string, tamanho:number, nucleo:string):void{
        this.madeira = madeira
        this.tamanho = tamanho
        this.nucleo = nucleo
        
    }

    getMadeira():void{
        console.log(this.madeira)
    }
    getTamanho():void{
        console.log(this.tamanho)
    }


    getNucleo():void{
        console.log(this.nucleo)
    }

    
    exibirDetalhes():void{
        console.log(`Curioso que esteja destinado a essa varinha, já que é feita de madeira do ${this.madeira}, tem ${this.tamanho} centímetros e o seu núcleo é de ${this.nucleo} `)
    }
}

const novaVarinha = new Varinha()
novaVarinha.setAtributos('Sabugueiro', 18, 'fibra de coração de dragão ')
novaVarinha.exibirDetalhes()