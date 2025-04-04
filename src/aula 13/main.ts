import { Aluno } from "./aluno";
import { Instrutor } from "./instrutor";
import { Usuario } from "./usuario";
import { Avaliacao } from "./avaliacao";
import { Equipamento } from "./equipamento";
import { Treino } from "./treino";
import { Exercicio } from "./exercicio";

const aluno1 = new Aluno('Lucas', 'lucas_schmidt92@gmail.com', 32, 97, 1.80)
const instrutor1 = new Instrutor('Eduardo', 'eduardo@gmail.com', 'perna', '9999')
const exercicio1 = new Exercicio('Cadeira adutora', 3, 10)
const treino1 = new Treino(aluno1, instrutor1, exercicio1)
const avaliacao1 = new Avaliacao(aluno1, '02/08/1992', 'Fez o exercicio correto')
const equipamento1 = new Equipamento('Cadeira', 'treino de perna', true)

// Treino Normal

treino1.getTreino()
avaliacao1.gerarRelatorio()

// Usando o método Treino
console.log(`\n\nTreinar\n\n`)

treino1.treinar(equipamento1)
avaliacao1.gerarRelatorio()