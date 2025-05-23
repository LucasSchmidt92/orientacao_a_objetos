import { CartaUno } from "./CartaUno";

export class BaralhoUno {
  private cartas: CartaUno[] = [];

  constructor() {
    this.criarBaralho();
    this.embaralhar();
  }

  private criarBaralho() {
    const cores = ['azul', 'amarelo', 'verde', 'vermelho'];
    const valores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Comprar2', 'Inverter', 'Bloquear'];
    const especiaisPretas = ['Comprar4'];

    for (const cor of cores) {
      for (const valor of valores) {
        this.cartas.push(new CartaUno(cor as any, valor));
        if (valor !== '0') this.cartas.push(new CartaUno(cor as any, valor)); // cartas duplicadas exceto 0
      }
    }

    for (const valor of especiaisPretas) {
      for (let i = 0; i < 4; i++) {
        this.cartas.push(new CartaUno("preto", valor)); // cor preta para cartas especiais
      }
    }
  }

  public embaralhar() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  }

  public comprarCarta(): CartaUno | undefined {
    return this.cartas.pop();
  }

  public estaVazio(): boolean {
    return this.cartas.length === 0;
  }
}
