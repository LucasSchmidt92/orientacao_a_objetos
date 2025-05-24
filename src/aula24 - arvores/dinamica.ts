export interface Relacionavel{
    descreverRelacao(): string
}

export class Pessoa implements Relacionavel{
    protected nome: string
    protected sobrenome: string
    protected dataDeNascimento:string
    protected genero: "Masculino" | "Feminino"
    protected outrasRelacoes: Pessoa[] = []

    constructor(nome:string, sobrenome: string, dataNasc: string, genero: "Masculino" | "Feminino"){
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataDeNascimento = dataNasc
        this.genero = genero
    }

    addChildren(filho: Pessoa): void{
        this.outrasRelacoes.push(filho)
    }

    descreverRelacao(): string {
    return "" 
        
    }
}