import { FrenchRestaurantSystem, AmericanRestaurant, AmericanToFrenchAdapter } from './adapter.ts';

console.log("Commande dans un restaurant américain avec système français :\n");

const americanRestaurant = new AmericanRestaurant();
const frenchSystemAdapter: FrenchRestaurantSystem = new AmericanToFrenchAdapter(americanRestaurant);

console.log("Ajout de plats à la commande :");

const order = [
    { name: "Burger Deluxe", price: 15.50 },
    { name: "Frites Maison", price: 6.00 },
    { name: "Coca-Cola", price: 3.50 },
    { name: "Cheesecake", price: 8.00 }
];

order.forEach(item => {
    frenchSystemAdapter.addDish(item.name, item.price);
});

console.log(`\nTotal de la commande : ${frenchSystemAdapter.getTotalBill()}€`);

frenchSystemAdapter.printBill();
