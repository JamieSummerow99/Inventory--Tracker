"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProducts_1 = require("./models/PhysicalProducts");
const DigitalProducts_1 = require("./models/DigitalProducts");
const Product = [
    new PhysicalProducts_1.PhysicalProduct('Drums', '49.99', 1.5)
];
new DigitalProducts('E-Book: Learn TypeScript', 9.99, 2.5);
const taxRate = 0.10;
for (const Product of Product) {
    // Display product details
    const displayDetails;
    (Product instanceof PhysicalProducts_1.PhysicalProduct);
    {
        console.log(`Weight: ${Product.formattedWeight}`);
    }
    if (Product instanceof DigitalProducts_1.DigitalProduct) {
        console.log(`File Size: ${Product.formattedFileSize}`);
    }
}
console.log(Product.displayDetails());
console.log(`Price with tax: $${Product.getPriceWithTax().toFixed(2)}`);
