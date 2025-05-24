import { Pessoa } from "./dinamica";

export class arvoreGenealogica{
    private root: Pessoa
    private filho: Pessoa[]

    addChildren(pai: Pessoa, filho: Pessoa): void{
        pai.addChildren(filho)
    }

}