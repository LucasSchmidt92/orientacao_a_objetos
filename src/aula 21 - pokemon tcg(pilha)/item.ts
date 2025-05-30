import { Carta } from "./Carta";

export class CartaItem extends Carta {
    nome: string
    tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia'
    private efeito: 'Compra' | 'Dano' | 'Cura' | 'Recuperar'

    constructor(nome: string, tipo: 'Pokemon' | 'Item' | 'Apoiador' | 'Energia', efeito: 'Compra' | 'Dano' | 'Cura' | 'Recuperar') {
      super(nome, tipo)
      this.efeito = efeito
    }

    executarEfeito(): void{
        
    }
  
  }