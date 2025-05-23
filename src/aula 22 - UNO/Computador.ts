import { Jogador } from "./Jogador";
import { CartaUno } from "./CartaUno";

export class Computador extends Jogador {
  jogarCarta(cartaTopo: CartaUno): CartaUno | null {
    for (let i = 0; i < this.mao.length; i++) {
      const carta = this.mao[i];
      if (this.ehJogadaValida(carta, cartaTopo)) {
        this.mao.splice(i, 1);
        console.log(`${this.nome} jogou: ${carta.exibir()}`);
        return carta;
      }
    }
    console.log(`${this.nome} não tem carta válida.`);
    return null;
  }

  private ehJogadaValida(carta: CartaUno, topo: CartaUno): boolean {
    if (topo.getCor() === 'preto') {
      return true
    } else {
    return carta.cor === topo.cor || carta.valor === topo.valor || carta.cor === 'preto';
    }
  }
}
