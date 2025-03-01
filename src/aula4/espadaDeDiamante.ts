export class Espadas{
    private nome: string
    private dano: number
    private durabilidade: number

  setAtributos(nome:string, dano:number, durabilidade:number):void{
    this.nome = nome
    this.dano = dano
    this.durabilidade = durabilidade
  }

  getAtributos():void{
    console.log(`Esta é a ${this.nome}, ela tem ${this.dano} de pontos de dano e durabilidade de ${this.durabilidade} pontos.`)

  }
}

const espadas1 = new Espadas()
espadas1.setAtributos('Espada de Ferro',35,55)


espadas1.getAtributos()