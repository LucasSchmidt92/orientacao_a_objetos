import { CartaUno } from "./CartaUno";

export abstract class Jogador {
  protected mao: CartaUno[] = [];

  constructor(public nome: string) {}

  receberCarta(carta: CartaUno) {
    this.mao.push(carta);
  }

  abstract jogarCarta(cartaTopo: CartaUno): CartaUno | null;

  temCartas(): boolean {
    return this.mao.length > 0;
  }

  exibirMao(): void {
    console.log(`${this.nome} - Cartas na mão:`);
    this.mao.forEach((carta, i) => {
      console.log(`${i}: ${carta.exibir()}`);
    });
  }
}
