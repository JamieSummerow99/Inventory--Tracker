"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price, sku) {
        this.name = name;
        this.price = price;
        this.sku = sku;
    }
    displayDetails() {
        return `name: ${this.name}, sku: ${this.sku}, price: $${this.price.toFixed(2)}`;
    }
    get formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        return this.price * (1 + Product.taxRate);
    }
    getSku() {
        return this.sku;
    }
}
Product.taxRate = 0.10;
exports.default = Product;
console.log(new Product(" ").displayDetails());
