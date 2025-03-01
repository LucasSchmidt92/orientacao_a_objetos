export class BlocoDeMadeira{
    private tipo: string
    private durabilidade: number

    setAtributos(tipo:string,durabilidade:number):void{
        this.tipo = tipo
        this.durabilidade = durabilidade
    }
    getAtributos(){
        console.log(`Esse é o bloco de madeira do tipo ${this.tipo} e tem uma durabildade de ${this.durabilidade}`)
    }
}

const madeira1 = new BlocoDeMadeira()
madeira1.setAtributos('Carvalho',15)

const madeira2 = new BlocoDeMadeira()
madeira2.setAtributos('Pinheiro',12)

madeira1.getAtributos()