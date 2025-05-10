import { PersonagemTemporal } from './PersonagemTemporal';

export class FilaTemporal {
  private fila: PersonagemTemporal[] = [];

  enfileirar(personagem: PersonagemTemporal): void {
    this.fila.push(personagem);
    console.log(`${personagem.nome} foi adicionado à fila temporal.`);
  }

  desenfileirar(): PersonagemTemporal | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia!");
      return undefined;
    }
    const personagem = this.fila.shift();
    console.log(`${personagem?.nome} foi enviado de volta para seu tempo.`);
    return personagem;
  }

  primeiroDaFila(): PersonagemTemporal | undefined {
    return this.fila[0];
  }

  estaVazia(): boolean {
    return this.fila.length === 0;
  }

  tamanho(): number {
    return this.fila.length;
  }

  exibirFila(): void {
    if (this.estaVazia()) {
      console.log("A fila está vazia!");
      return;
    }
    console.log("Fila Temporal:");
    this.fila.forEach((personagem) => personagem.exibirInfo());
  }
}