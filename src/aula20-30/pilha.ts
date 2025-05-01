export class Pilha<T> {
    private elements: T[] = [];

    // Empurra um elemento para a pilha
    push(item: T): void {
        this.elements.push(item)
    }
    // Apaga o ultimo elemento da pilha
    pop(): T | undefined {
        return this.elements.pop()
    }
    // Mostra o ultimo elemento da pilha
    peek(): T | undefined {
        return this.elements[this.elements.length - 1]
    }
    // Checa se a pilha esta vazia
    isEmpty(): boolean {
        return this.elements.length === 0
    }
    // Checa o tamanho da pilha
    size(): number {
        return this.elements.length
    }
    // Limpa a pilha
    clear(): void {
        this.elements = []
    }
};

const minhaPilha = new Pilha<number>();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);

console.log(minhaPilha.pop());
console.log(minhaPilha.peek());
console.log(minhaPilha.size());
console.log(minhaPilha.isEmpty());
minhaPilha.clear();
console.log(minhaPilha.isEmpty());