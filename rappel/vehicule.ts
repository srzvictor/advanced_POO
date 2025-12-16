// Méthode abstraite : méthode globale sans implémentation dans une classe parente
abstract class Vehicule {
    private _name: string = "";

    // Getter simple : récupérer la valeur d'une propriété privée
    get name(): string {
        return this._name;
    }

    // Setter simple : modifier la valeur d'une propriété privée
    set name(value: string) {
        this._name = value;
    }

    abstract Moove(): void;
}