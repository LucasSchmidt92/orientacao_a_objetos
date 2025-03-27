import { Level } from "./lelev";
import { survivor } from "./survivor";

let mySurvivor1 = new survivor();
let mySurvivor2 = new survivor(Level.orange);

mySurvivor1.getLevel()
mySurvivor2.getLevel()