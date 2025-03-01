export class Feiticos{
    private nome:string
    private tipo:string
    private poder:number

    setAtributos(nome:string, tipo:string, poder:number):void{
        this.nome = nome
        this.tipo = tipo
        this.poder = poder
    }

    getNome():void{
        console.log(this.nome)
    }

    getTipo():void{
        console.log(this.tipo)
    }

    getPoder():void{
        console.log(this.poder)
    }

    exibirFeitico():void{
        console.log(`
Nome do Feitiço: ${this.nome}.
Tipo de Feitiço: ${this.tipo}.
Poder do Feitiço: ${this.poder}`)
    }

    lancarFeitico():void{

        console.log(`O feitiço ${this.nome} do tipo ${this.tipo} com poder ${this.poder} foi lançado!`)

            
    }
}

const novoFeitico = new Feiticos()
const novoFeitico1 = new Feiticos()
const novoFeitico2 = new Feiticos()
const novoFeitico3 = new Feiticos()

novoFeitico.setAtributos('Expecto Patronum', 'Defesa', 60)
novoFeitico1.setAtributos('Expelliarmus', 'Ataque', 25)
novoFeitico2.setAtributos('Protego', 'Defesa', 30)
novoFeitico3.setAtributos('Cruciatus', 'Ataque', 45)


novoFeitico.lancarFeitico()
novoFeitico1.lancarFeitico()
novoFeitico2.lancarFeitico()
novoFeitico3.lancarFeitico()


novoFeitico.exibirFeitico()
novoFeitico1.exibirFeitico()
novoFeitico2.exibirFeitico()
novoFeitico3.exibirFeitico()