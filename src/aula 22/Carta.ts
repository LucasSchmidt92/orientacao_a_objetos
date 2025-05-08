
export class Carta {
    constructor(public nome: string, public tipo: string) {}
  
    exibirCarta(): void {
      console.log(Carta: ${this.nome} | Tipo: ${this.tipo});
    }
  }
  
  // Subclasses
  export class CartaPokemon extends Carta {
    constructor(nome: string, tipo: string, public ataque: number, public hp: number) {
      super(nome, tipo);
    }
  
    exibirCarta(): void {
      console.log(Pokémon: ${this.nome} | Tipo: ${this.tipo} | Ataque: ${this.ataque} | HP: ${this.hp});
    }
  }
  
  export class CartaEnergia extends Carta {
    constructor(nome: string, tipo: string, public valor: number) {
      super(nome, tipo);
    }
  
    exibirCarta(): void {
      console.log(Energia: ${this.nome} | Tipo: ${this.tipo} | Valor: ${this.valor});
    }
  }
  
  export class CartaItem extends Carta {
    constructor(nome: string, tipo: string, public efeito: string) {
      super(nome, tipo);
    }
  
    exibirCarta(): void {
      console.log(Item: ${this.nome} | Tipo: ${this.tipo} | Efeito: ${this.efeito});
    }
  }
  
  export class CartaTreinador extends Carta {
    constructor(nome: string, tipo: string, public descricao: string) {
      super(nome, tipo);
    }
  
    exibirCarta(): void {
      console.log(Treinador: ${this.nome} | Tipo: ${this.tipo} | Descrição: ${this.descricao});
    }
  }