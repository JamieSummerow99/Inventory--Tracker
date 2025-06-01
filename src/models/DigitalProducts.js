"use strict";
//Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
//Add a weight property (number) for physical products.
//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
//Create the DigitalProduct Subclass:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
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
const Products_1 = __importDefault(require("./Products"));
class DigitalProduct extends Products_1.default {
    constructor(name, price, sku, fileSize) {
        super(name, price, sku);
        this.fileSize = fileSize;
    }
    displayDetails() {
        return `sku: ${this.sku} name: ${this.name}  price: $${this.price} File Size: ${this.fileSize}MB`;
    }
    getPriceWithTax() {
        Products_1.default.taxRate = .10;
        return this.price * (1 + Products_1.default.taxRate);
    }
    set price(pretaxPrice) {
        Products_1.default.this.price = pretaxPrice;
    }
    get formattedFileSize() {
        const megabytes = this.fileSize / (1024 * 1024);
        return `${megabytes.toFixed(2)} MB`;
    }
    get sku() {
        return this.sku;
    }
}
exports.DigitalProduct = DigitalProduct;
console.log(new PhysicalProducts(" ").displayDetails());
