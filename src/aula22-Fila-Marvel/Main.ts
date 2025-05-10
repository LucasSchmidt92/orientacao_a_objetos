import { PersonagemTemporal } from './PersonagemTemporal';
import { FilaTemporal } from './FilaTemporal';

const fila = new FilaTemporal();

const p1 = new PersonagemTemporal("Homem de Ferro", "Terra-616", 1);
const p2 = new PersonagemTemporal("Deadpool", "Terra-10005", 2);
const p3 = new PersonagemTemporal("Homem-Aranha", "Terra-616", 3);
const p4 = new PersonagemTemporal("Venom", "Terra-616", 4)

fila.enfileirar(p1);
fila.enfileirar(p2);
fila.enfileirar(p3);
fila.enfileirar(p4);


fila.exibirFila();

fila.desenfileirar();

fila.exibirFila();

console.log("Primeiro da fila atual:");
fila.primeiroDaFila()?.exibirInfo();