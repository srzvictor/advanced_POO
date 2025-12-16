import { EuroPayment, AmericanBank, CurrencyAdapter } from './adapter.ts';

console.log("🇺🇸 Banque américaine (USD) avec adaptateur (EUR) :\n");

// Banque américaine a besoin d'un adaptateur pour fonctionner en EUR
const americanBank = new AmericanBank();
const currencyAdapter: EuroPayment = new CurrencyAdapter(americanBank);

console.log("Test de plusieurs paiements :");
const amounts = [50, 100, 250];

amounts.forEach((amount, index) => {
    console.log(`\n${index + 1}. Paiement de ${amount}€ :`);
    currencyAdapter.payInEuros(amount);
});