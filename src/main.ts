import { PhysicalProduct } from './models/PhysicalProducts';
import { DigitalProduct } from './models/DigitalProducts';
import { calculateTax } from './utils/taxCalculator';

const products = [
    new PhysicalProduct('PHYS123', 'Wooden Toy Car', 25.00, 0.5),
    new DigitalProduct('DIG456', 'E-book: TypeScript Guide', 15.00, 2.2),
    new PhysicalProduct('PHYS789', 'Cotton T-Shirt', 19.99, 0.2),
    new DigitalProduct('DIG101', 'Music Track', 0.99, 5.1)
];

for (const product of products) {
    console.log(product.displayDetails());
    const priceWithTax = calculateTax(product);
    console.log(`Price with tax: $${priceWithTax.toFixed(2)}`);
    console.log('---');
}