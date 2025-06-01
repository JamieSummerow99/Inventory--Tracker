
import default  class Product

export function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}