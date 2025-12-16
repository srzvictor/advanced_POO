class Compteur {
    private static instance: Compteur;
    private nombre: number = 0;
    
    private constructor() {} //Impossible d'instancier depuis l'extérieur
    
    //Seule cette méthode peut créer l'instance
    static getInstance(): Compteur {
        if (!this.instance) {
            this.instance = new Compteur();
        }
        return this.instance;
    }
    
    plus() {
        this.nombre++;
        console.log(this.nombre);
    }
    
    getNombre(): number {
        return this.nombre;
    }
}
// donc impossibilité de créer plusieurs compteurs et récuperation du même compteur