
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Products_1 = __importDefault(require("./Products"));
class PhysicalProduct extends Products_1.default {
    constructor(name, price, sku, weight) {
        super(name, price, sku);
        this.weight = weight;
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    displayDetails() {
        return super.displayDetails() + `, Weight: ${this.formattedWeight}`;
    }
    getPriceWithTax() {
        Products_1.default.taxRate = 0.10;
        return this.price * (1 + PhysicalProduct.taxRate);
    }
}
exports.PhysicalProduct = PhysicalProduct;
