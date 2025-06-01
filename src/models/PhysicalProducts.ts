import  Product  from "./Products";

export class PhysicalProduct extends Product {
weight: number;
    
constructor(name: string, price: number, sku:string , weight: number) {
        super(name, price,sku);
          this.weight = weight;
     
    }
    get formattedWeight(): string {   
        return `${this.weight} kg`;
    }
   
   
displayDetails(): string {
        return super.displayDetails() + `, Weight: ${this.formattedWeight}`;
    }

    getPriceWithTax(): number {
        Product.taxRate = 0.10;

        return this.price * (1 + PhysicalProduct.taxRate);
    }   

}

