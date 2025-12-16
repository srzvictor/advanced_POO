interface FrenchRestaurantSystem {
    addDish(name: string, price: number): void;
    getTotalBill(): number;
    printBill(): void;
}

class AmericanRestaurant {
    private dishes: { name: string; price: number }[] = [];
    private tipPercentage: number = 18;

    addDish(name: string, price: number): void {
        this.dishes.push({ name, price });

    }

    calculateTotal(): number {
        const subtotal = this.dishes.reduce((sum, dish) => sum + dish.price, 0);
        const tipAmount = Math.round(subtotal * (this.tipPercentage / 100) * 100) / 100;
        const total = subtotal + tipAmount;
        

        this.dishes.forEach(dish => {
            console.log(`  ${dish.name} ................. $${dish.price}`);
        });
        console.log(`  ────────────────────────────────`);
        console.log(`  Sous-total ................. $${subtotal}`);
        console.log(`  Tips (${this.tipPercentage}%) .................. $${tipAmount}`);
        console.log(`  ════════════════════════════════`);
        console.log(`  TOTAL AVEC TIPS ............ $${total}`);
        
        return total;
    }
}

class AmericanToFrenchAdapter implements FrenchRestaurantSystem {
    private dishes: { name: string; price: number }[] = [];
    private eurToUsdRate: number = 1.10;
    
    constructor(private americanRestaurant: AmericanRestaurant) {}

    addDish(name: string, price: number): void {
        this.dishes.push({ name, price });
        
        const priceInUSD = Math.round(price * this.eurToUsdRate * 100) / 100;
        this.americanRestaurant.addDish(name, priceInUSD);
    }

    getTotalBill(): number {
        const subtotal = this.dishes.reduce((sum, dish) => sum + dish.price, 0);
        
        const serviceCharge = Math.round(subtotal * 0.18 * 100) / 100; // Équivalent 18% tips
        
        return subtotal + serviceCharge;
    }

    printBill(): void {
        console.log("\n" + "=".repeat(50));
        console.log("VERSION AMÉRICAINE (tips séparés)");
        console.log("=".repeat(50));
        
        const americanTotal = this.americanRestaurant.calculateTotal();
        
        console.log("\n" + "=".repeat(50));
        console.log("VERSION FRANÇAISE (service intégré dans les plats)");
        console.log("=".repeat(50));
        
        const subtotal = this.dishes.reduce((sum, dish) => sum + dish.price, 0);
        const totalServiceCharge = Math.round(subtotal * 0.18 * 100) / 100;
        
        let frenchTotal = 0;
        
        this.dishes.forEach(dish => {
            const dishServicePortion = Math.round((dish.price / subtotal) * totalServiceCharge * 100) / 100;
            const priceWithService = Math.round((dish.price + dishServicePortion) * 100) / 100;
            console.log(`  ${dish.name} ................. ${priceWithService}€`);
            frenchTotal += priceWithService;
        });
        
        console.log(`  ────────────────────────────────`);
        console.log(`  TOTAL ...................... ${Math.round(frenchTotal * 100) / 100}€`);
    }
}

export { FrenchRestaurantSystem, AmericanRestaurant, AmericanToFrenchAdapter };

