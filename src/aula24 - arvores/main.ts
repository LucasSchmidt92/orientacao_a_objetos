import { Pessoa } from "./pessoa";
import { Relacionavel } from "./pessoa";
import { ArvoreGenealogica } from "./arvoreGenealogica";
import { Noh } from "./noh";

const eu = new Pessoa("Lucas", "Schmidt Gonçalves", "02/08/1992", 'Masculino')
const pai = new Pessoa("Mauro", "José Gonçalves", "12/01/1962", 'Masculino')
const mae = new Pessoa("Tânia Regina", "Schmidt Gonçalves", "07/10/1962", "Feminino")
const irmao = new Pessoa("Eduardo", "Schmidt Gonçalves", "20/12/1998", 'Masculino')
const avo1 = new Pessoa("Zeni", "Rocha Gonçalves", "12/12/1938", 'Feminino')
const avoo1 = new Pessoa("João Baptista", "Gonçalves", "07/04/1942", 'Masculino')
const avo2 = new Pessoa("Maria Valeria", "Schmidt", "26/02/1944", 'Feminino')
const avoo2 = new Pessoa("Olivério", "Schmidt", "25/01/1942", 'Masculino')

const nohEu = new Noh<Pessoa>(eu)
const nohPai = new Noh<Pessoa>(pai)
const nohMae = new Noh<Pessoa>(mae)
const nohAvoo = new Noh<Pessoa>(avo1)
const nohVo = new Noh<Pessoa>(avoo1)
const nohAvoo2 = new Noh<Pessoa>(avo2)
const nohVo2 = new Noh<Pessoa>(avoo2)

eu.addChildren(pai)
eu.addChildren(mae)
eu.addChildren(irmao)
