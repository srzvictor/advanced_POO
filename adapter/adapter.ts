interface EuroPayment {
    payInEuros(amount: number): void;
}

class AmericanBank {
    payInDollars(amount: number): void {
        console.log(`Paiement de $${amount} USD`);
    }
}

class CurrencyAdapter implements EuroPayment {
    constructor(private americanBank: AmericanBank) {}
    
    payInEuros(euroAmount: number): void {
        const usdAmount = Math.round(euroAmount * 1.10 * 100) / 100;
        console.log(`Conversion: ${euroAmount}€ → $${usdAmount}`);
        this.americanBank.payInDollars(usdAmount);
    }
}
export { EuroPayment, AmericanBank, CurrencyAdapter };

