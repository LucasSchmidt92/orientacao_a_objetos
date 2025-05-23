import { BaralhoUno } from "./BaralhoUno";
import { Humano } from "./Humano";
import { Computador } from "./Computador";
import { CartaUno } from "./CartaUno";

// Criar baralho
const baralho = new BaralhoUno();

// Criar jogadores
const jogadorHumano = new Humano("Lucas");
const jogadorComputador = new Computador("BOT Uno");

// Distribuir 5 cartas para cada jogador
for (let i = 0; i < 5; i++) {
  jogadorHumano.receberCarta(baralho.comprarCarta()!);
  jogadorComputador.receberCarta(baralho.comprarCarta()!);
}

// Começa o jogo com uma carta no topo
let cartaTopo = baralho.comprarCarta()!;
console.log(`Carta no topo da pilha: ${cartaTopo.exibir()}\n`);

// Loop do jogo
while (jogadorHumano.temCartas() && jogadorComputador.temCartas()) {
  console.log("========== VEZ DO JOGADOR ==========");
  const cartaJogadaHumano = jogadorHumano.jogarCarta(cartaTopo);
  if (cartaJogadaHumano) {
    cartaTopo = cartaJogadaHumano;
  } else {
    console.log("Você comprou uma carta!");
    jogadorHumano.receberCarta(baralho.comprarCarta()!);
  }

  if (!jogadorHumano.temCartas()) break;

  console.log("\n========== VEZ DO COMPUTADOR ==========");
  const cartaJogadaBot = jogadorComputador.jogarCarta(cartaTopo);
  if (cartaJogadaBot) {
    cartaTopo = cartaJogadaBot;
  } else {
    console.log("Computador comprou uma carta!");
    jogadorComputador.receberCarta(baralho.comprarCarta()!);
  }

  console.log(`\nNova carta no topo: ${cartaTopo.exibir()}`);
  console.log("----------------------------------------\n");
}

// Verificando vencedor
if (!jogadorHumano.temCartas()) {
  console.log("Parabéns! Você venceu!");
} else if (!jogadorComputador.temCartas()) {
  console.log("O computador venceu. 😢");
} else {
  console.log("O jogo terminou empatado!");
}
