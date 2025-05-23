export class CartaUno {
    constructor(
      public cor: 'azul' | 'amarelo' | 'verde' | 'vermelho' | 'preto',
      public valor: string
    ) {}
  
    exibir(): string {
      return `${this.cor.toUpperCase()} - ${this.valor}`;
    }

    getCor(): 'azul' | 'amarelo' | 'verde' | 'vermelho' | 'preto' {
      return this.cor
    }
  }
  