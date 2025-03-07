export class Distrito{
    public name: string;
    private resources: string[];
    private population: number;

setAtributes(name:string, resources:string[], population:number):void{
    this.name = name
    this.resources = resources
    this.population = population
}

getAtributes(){
    console.log(`Esse é ${this.name}, e seu principal recurso é ${this.resources[0].toLowerCase()} e sua população é de ${this.population} pessoas`)
}
 getName():string{
    return this.name
}
private getResources():string[]{
return this.resources
}

private getPopulation():number{
    return this.population
}
}

const distrito1 = new Distrito()
distrito1.setAtributes('Distrito 1',['Jóias'], 3125)

const distrito2 = new Distrito()
distrito2.setAtributes('Distrito 2',['Pedreiras'], 7347)

const distrito3 = new Distrito()
distrito3.setAtributes('Distrito 3',['Tecnologia'], 8030)

const distrito4 = new Distrito()
distrito4.setAtributes('Distrito 4',['Pesca'], 45202)

const distrito5 = new Distrito()
distrito5.setAtributes('Distrito 5',['Energia'], 84159)

const distrito6 = new Distrito()
distrito6.setAtributes('Distrito 6',['Transporte'], 98329)

const distrito7 = new Distrito()
distrito7.setAtributes('Distrito 7',['Madeira'], 132890)

const distrito8 = new Distrito()
distrito8.setAtributes('Distrito 8',['Industria têxtil'], 142329)

const distrito9 = new Distrito()
distrito9.setAtributes('Distrito 9',['Cereal'], 263928)

const distrito10 = new Distrito()
distrito10.setAtributes('Distrito 10',['Engenharia'], 387329)

const distrito11 = new Distrito()
distrito11.setAtributes('Distrito 11',['Agricultura'], 689029)

const distrito12 = new Distrito()
distrito12.setAtributes('Distrito 12',['Mineração'], 926021)

const distrito13 = new Distrito()
distrito13.setAtributes('Distrito 13',['Armas'], 853927)

distrito1.getAtributes()
distrito2.getAtributes()
distrito3.getAtributes()
distrito4.getAtributes()
distrito5.getAtributes()
distrito6.getAtributes()
distrito7.getAtributes()
distrito8.getAtributes()
distrito9.getAtributes()
distrito10.getAtributes()
distrito11.getAtributes()
distrito12.getAtributes()
distrito13.getAtributes()