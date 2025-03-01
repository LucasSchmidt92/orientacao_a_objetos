import { Cat } from "./private";

export class user{
    private nome:string;
    private cat:Cat;

    setNome(meuNome:string):void{this.nome=meuNome}
    setCat(meuCat:Cat):void{this.cat=meuCat};
    adicionarTarefa():void{console.log("Tarefa adicionada")};
}

const UserLucas = new user();
UserLucas.setNome("Lucas");
const meuGato = new Cat();
meuGato.setName("Rowena");
UserLucas.setCat(meuGato);