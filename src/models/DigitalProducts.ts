//Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
//Add a weight property (number) for physical products.
//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
//Create the DigitalProduct Subclass:

//Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
//Add a fileSize property (number) for digital products.
//Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
//Use a getter method to return the formatted file size in megabytes.
//Create a Tax Calculator Utility:

//Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
//Add a function calculateTax() that accepts a Product object and returns the price including tax.
//Implement the Main Program:

//Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
//Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
//Hint: Utilize polymorphism to your advantage here

import { Product } from './Products';

  


export class DigitalProduct extends Product {

    fileSize: number;
    taxRate =.10

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    override getPriceWithTax(): number {
        
        return this.price; // No tax for digital products
    }

    get fileSizeInMb(): string {
        return `${this.fileSize.toFixed(2)} MB`;
    }

     displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.fileSizeInMb}`;
    }
}