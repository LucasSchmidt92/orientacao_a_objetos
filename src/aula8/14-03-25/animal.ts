export class Animal {
   protected name : string;
   protected weigth: number;
    
    constructor(nameConst:string, weigthConst:number){
        this.name=nameConst;
        this.weigth=weigthConst;
    }
 eat(quantity:number):void{
    console.log("The animal has eaten: "+ quantity); //concatenação
    console.log(`The animal has eaten: ${quantity}`); //template
}

}