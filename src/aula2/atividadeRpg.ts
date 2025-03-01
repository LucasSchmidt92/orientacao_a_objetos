export class Guerreiro{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 100
}

export class Mago{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 20
    
}

export class Atirador{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 50
}

export class Clerigo{
    nome:string;
    tipo:string;
    forca:number;
    poderMagico:number;
    constructor(nome:string, tipo:string, forca:number, poderMagico:number){
        this.nome= nome,
        this.tipo = tipo,
        this.forca = forca,
        this.poderMagico = poderMagico
    }
    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`Seu ataque causou ${danoAtaque} de dano`)
    }
    ataqueMagico():void{
        let danoAtaque = Math.floor(Math.random()*this.poderMagico*2)
        console.log(`Sua Magia causou ${danoAtaque} de dano Mágico`)
    }
    saude:number = 40
}

export class Monstro{
    nome:string;
    forca:number = 50;
    saude:number = 10
    constructor(nome:string){
        this.nome= nome
    }

    ataque():void{
        let danoAtaque = Math.floor(Math.random()*this.forca)
        console.log(`
        saO ataque do monstro causou ${danoAtaque}`)
    }
}

const mago1 = new Mago('Taks Frod', 'Caster', 5, 25)
const mago2 = new Mago('Kennen', 'Assassino', 10, 65)
const guerreiro1 = new Guerreiro('Phanteon', 'Lutador', 58, 10)
const atirador1 = new Atirador('Hayato', 'Mago-Pistoleiro', 15, 38)
const clerigo1 = new Clerigo("Joan D'Arc", 'Santa', 35, 35)