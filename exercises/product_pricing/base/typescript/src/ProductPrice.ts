import InvalidProductPrice from "./InvalidProductPrice";

export default class ProductPrice {
  constructor(
    private readonly price: number,
    private readonly vat: number = 0.21
  ) {
    if (price < 0) {
      throw new InvalidProductPrice("Price cannot be negative");
    }
    if (vat < 0) {
      throw new InvalidProductPrice("VAT cannot be negative");
    }
    this.price = price;
    this.vat = vat;
  }

  basePrice() {
    return this.price;
  }

  totalPrice() {
    return this.price * (1 + this.vat);
  }
}
