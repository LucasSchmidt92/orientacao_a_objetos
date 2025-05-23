import { Jogador } from "./Jogador";
import { CartaUno } from "./CartaUno";

const readlineSync = require('readline-sync')

export class Humano extends Jogador {
  jogarCarta(cartaTopo: CartaUno): CartaUno | null {
    this.exibirMao();
    const escolha = readlineSync.questionInt("Escolha o índice da carta para jogar: ");
    const cartaEscolhida = this.mao[escolha];

    if (this.ehJogadaValida(cartaEscolhida, cartaTopo)) {
      this.mao.splice(escolha, 1);
      return cartaEscolhida;
    }

    console.log("Jogada inválida!");
    return null;
  }

  private ehJogadaValida(carta: CartaUno, topo: CartaUno): boolean {
    return carta.cor === topo.cor || carta.valor === topo.valor || carta.cor === 'preto';
  }
}
