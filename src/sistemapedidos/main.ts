/ Criar a classe Pedido com os atributos numeroPedido, nomeCliente,
// itens, status, com os métodos atualizarStatus(), exibirPedido().
// Criar a classe FilaPedido com os métodos padrões de fila como
// adicionarPedido(), processarPedido(),verificarProximoPedido(),
// estaVazia() e tamanho().

import { FilaPedido } from "./filaPedido";
import { Pedido } from "./pedido";


const filaDePedido = new FilaPedido()
const pedido1 = new Pedido(1, "Clayson", ['Banana', 'Caixa', 'Outra Banana'], 'Enviado')
const pedido2 = new Pedido(2, "ROGER", ['Leite', 'Café', 'FAFA'], 'Entregue')
const pedido3 = new Pedido(3, "SUSANA", ['Tudo'], 'Enviado')

pedido1.getItens()
pedido1.exibirPedido()
pedido3.atualizarStatus()

filaDePedido.adicionarPedido(pedido1)
filaDePedido.adicionarPedido(pedido2)
filaDePedido.adicionarPedido(pedido3)

filaDePedido.estaVazia()
filaDePedido.primeiro()
filaDePedido.verificarProximoPedido()
filaDePedido.tamanho()
filaDePedido.exibirPedidos()
filaDePedido.processarPedido()
filaDePedido.verificarProximoPedido()

