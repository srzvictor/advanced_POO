import { House } from './house.ts';
import { HouseBuilder } from './builder.ts';


export class HouseDirector {
    
    buildSmallHouse(builder: HouseBuilder): House {
        return builder
            .setWalls(4)
            .setDoors(2)
            .setWindows(4)
            .setColor("blanc")
            .setGarage(false)
            .setSquareMeters(80)
            .build();
    }
    
    buildFamilyHouse(builder: HouseBuilder): House {
        return builder
            .setWalls(6)
            .setDoors(3)
            .setWindows(8)
            .setColor("beige")
            .setGarage(true)
            .setSquareMeters(150)
            .build();
    }
    
    buildLuxuryVilla(builder: HouseBuilder): House {
        return builder
            .setWalls(8)
            .setDoors(5)
            .setWindows(12)
            .setColor("blanc cassé")
            .setGarage(true)
            .setSquareMeters(300)
            .build();
    }
}