// Ecrasement de la méthode abstraite Moove de la classe Vehicule
class Car extends Vehicule {
    Moove(): void {
        console.log("The car is moving");
    }
    // Propriété statique : appartient à la classe et non aux instances
    static nbWheels: number = 4;
}