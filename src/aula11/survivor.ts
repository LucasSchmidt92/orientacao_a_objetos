import { Level } from "./lelev";

export class survivor{
    protected level: Level;

    constructor(LevelConst:Level = Level.pink){
        this.level = LevelConst
    }

    getLevel():void{
        console.log(this.level)
    }
}