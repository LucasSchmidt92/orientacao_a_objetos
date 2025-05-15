// FilaPedido com os métodos padrões de fila como
// adicionarPedido(), processarPedido(),verificarProximoPedido(),
// estaVazia() e tamanho().

import { Pedido } from "./pedido"

export class FilaPedido {
    private listaDePedido: Pedido[] = []

    adicionarPedido(pedido: Pedido): void {
        this.listaDePedido.push(pedido)
    }

    exibirPedidos(): void {
        for (let i = 0; i < this.listaDePedido.length; i++) {
            this.listaDePedido[i].exibirPedido()
        }
    }

    processarPedido() {
        this.listaDePedido.shift().exibirPedido()
    }

    primeiro(): void {
        if (this.estaVazia()) {
            console.log("A fila está vazia.")
        }
        console.log(this.listaDePedido[0])
    }

    verificarProximoPedido() {
        if (this.estaVazia()) {
            console.log("A fila está vazia.")
        }
        console.log(this.listaDePedido[1])
    }

    estaVazia(): boolean {
        return this.listaDePedido.length === 0;
    }

    tamanho(): number {
        return this.listaDePedido.length
    }
}