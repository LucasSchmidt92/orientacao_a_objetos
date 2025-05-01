class PilhaDePratos<T> {
    private pratos: T[] = [];
  
    adicionarPrato(prato: T): void {
      this.pratos.push(prato);
    }
  
    retirarPrato(): T | undefined {
      return this.pratos.pop();
    }
  
    estaVazio(): boolean {
      return this.pratos.length === 0;
    }
  
    tamanho(): number {
      return this.pratos.length;
    }
  }
   
  // Exemplo de uso:
  const pilha = new PilhaDePratos<string>();
  
  pilha.adicionarPrato("Prato 1");
  pilha.adicionarPrato("Prato 2");
  pilha.adicionarPrato("Prato 3");
  
  console.log("Tamanho da pilha:", pilha.tamanho()); 
  console.log("Retirando prato:", pilha.retirarPrato()); 
  console.log("Está vazia?", pilha.estaVazio()); 
  console.log("Tamanho atual:", pilha.tamanho());