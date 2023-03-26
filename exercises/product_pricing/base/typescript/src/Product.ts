import ProductPrice from "./ProductPrice";

export class Product {
  constructor(private readonly price: ProductPrice) {
    this.price = price;
  }

  basePrice() {
    return this.price.basePrice();
  }

  totalPrice() {
    return this.price.totalPrice();
  }
}
