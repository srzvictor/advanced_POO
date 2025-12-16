import { HouseBuilder } from './builder.ts';
import { HouseDirector } from './director.ts';

console.log("1. Construction directe :");
const myCustomHouse = new HouseBuilder()
    .setWalls(6)
    .setDoors(4)
    .setWindows(10)
    .setColor("rouge")
    .setGarage(true)
    .setSquareMeters(200)
    .build();
console.log(myCustomHouse.toString());


console.log("\n2. Avec Director (recettes prêtes) :");

const myDirector = new HouseDirector();
const mySmallHouse = myDirector.buildSmallHouse(new HouseBuilder());
console.log("Petite maison:", mySmallHouse.toString());

const myFamilyHouse = myDirector.buildFamilyHouse(new HouseBuilder());
console.log("Maison familiale:", myFamilyHouse.toString());

const myVilla = myDirector.buildLuxuryVilla(new HouseBuilder());
console.log("Villa de luxe:", myVilla.toString());
