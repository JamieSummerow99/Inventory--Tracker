"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, sku) {
        this.name = name;
        this.price = price;
        this.sku = sku;
    }
    getPrice() {
        return this.price * (this.taxRate + 1);
    }
    getPriceWithTax() {
        return this.price * (1 + Product.taxRate);
    }
    getSku() {
        return this.sku;
    }
    set price(newBasePrice) {
        this.price = newBasePrice;
    }
    displayDetails() {
        return `Product Name: ${this.name}, SKU: ${this.sku}, Price: $${this.price}`;
    }
}
exports.Product = Product;
Product.taxRate = 0.07;
console.log(new Product(" ").displayDetails());
