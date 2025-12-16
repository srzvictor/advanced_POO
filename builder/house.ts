export class House {
    private walls: number;
    private doors: number;
    private windows: number;
    private color: string;
    private hasGarage: boolean;
    private squareMeters: number;
    
    constructor(walls: number, doors: number, windows: number, color: string, hasGarage: boolean, squareMeters: number) {
        this.walls = walls;
        this.doors = doors;
        this.windows = windows;
        this.color = color;
        this.hasGarage = hasGarage;
        this.squareMeters = squareMeters;
    }

    toString(): string {
        return `Maison: ${this.walls} murs, ${this.doors} portes, ${this.windows} fenêtres, couleur ${this.color}, garage: ${this.hasGarage ? 'oui' : 'non'}, ${this.squareMeters} m²`;
    }
}