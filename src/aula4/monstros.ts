export class Monstros{
    private nome: string
    private vida: number
    private poderDeExplosao: number
    private distanciaDeExplosao: number

    setAtributos(nome:string, vida:number, poderDeExplosao:number, distanciaDeExplosao:number):void{
        this.nome = nome
        this.vida = vida
        this.poderDeExplosao = poderDeExplosao
        this.distanciaDeExplosao = distanciaDeExplosao
    }

    getAtributos(){
        console.log(`Esse monstro é o ${this.nome}, ele tem ${this.vida} de vida, seu poder de explosão é ${this.poderDeExplosao} e o seu raio de explosão ${this.distanciaDeExplosao} blocos.`)
    }

}

const monstros1 = new Monstros()
monstros1.setAtributos('Creeper',10,5,3)

export{monstros1}

monstros1.getAtributos()