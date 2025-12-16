import { House } from './house.ts'

export class HouseBuilder {
    private walls: number = 4;
    private doors: number = 1;
    private windows: number = 2;
    private color: string = "white";
    private hasGarage: boolean = false;
    private squareMeters: number = 50;

    setWalls(walls: number): HouseBuilder {
        this.walls = walls;
        return this;
    }
    
    setDoors(doors: number): HouseBuilder {
        this.doors = doors;
        return this;
    }

    setWindows(windows: number): HouseBuilder {
        this.windows = windows;
        return this;
    }

    setColor(color: string): HouseBuilder {
        this.color = color;
        return this;
    }

    setGarage(hasGarage: boolean): HouseBuilder {
        this.hasGarage = hasGarage;
        return this;
    }

    setSquareMeters(squareMeters: number): HouseBuilder {
        this.squareMeters = squareMeters;
        return this;
    }

    build(): House {
        return new House(this.walls, this.doors, this.windows, this.color, this.hasGarage, this.squareMeters);
    }
}