export default class Product {
  public static taxRate: number = 0.10;
  
    name: string;
    price: number;
    sku: string;

  

constructor(name: string, price: number, sku: string ) {

this.name = name;
this.price = price;
this.sku = sku;
}



displayDetails(): string {
  return `name: ${this.name}, SKU: ${this.sku}, price: $${this.price.toFixed(2)}`;
}

get formattedPrice(): string {
  return `$${this.price.toFixed(2)}`;}
getPriceWithTax(): number {
  return this.price * (1 + Product.taxRate);
}

getSku(): string {
  return this.sku;
}

  

}
console.log(new Product("Sample Product", 19.99, "SKU123").displayDetails());
