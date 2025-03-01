export class ChapeuSeletor{
    private casa:string

    escolherCasa():void{
        let numero:number = Math.floor(Math.random()*4+1)

        if (numero === 1) {
            this.casa = 'Sonserina' 
        } else   if (numero === 2) {
            this.casa = 'Grifinória'
        } else   if (numero === 3) {
            this.casa = 'Corvinal'
        } else  {
            this.casa = 'Lufa-Lufa'
        }
    }

    exibirCasa():void{
        console.log(`humuum, não resta duvida, voce será de ${this.casa}!`)
    }
}

const novoAluno = new ChapeuSeletor()
novoAluno.escolherCasa()
novoAluno.exibirCasa()