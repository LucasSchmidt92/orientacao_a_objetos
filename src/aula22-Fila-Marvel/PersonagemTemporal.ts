export class PersonagemTemporal {
    constructor(
      public nome: string,
      public universo: string,
      public assinaturaTemporal: number
    ) {}
  
    exibirInfo(): void {
      console.log(
        `Nome: ${this.nome} | Universo: ${this.universo} | Assinatura Temporal: ${this.assinaturaTemporal}`
      );
    }
  }