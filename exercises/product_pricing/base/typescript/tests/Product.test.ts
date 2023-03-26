import InvalidProductPrice from "../src/InvalidProductPrice";
import { Product } from "../src/Product";
import ProductPrice from "../src/ProductPrice";

describe("Product should", () => {
  test("return total price with VAT", () => {
    const vat = 0.21;
    const product = new Product(new ProductPrice(100, vat));
    expect(product.totalPrice()).toBe(product.basePrice() * (1 + vat));
  });

  test("throw invalid price if price is negative", () => {
    expect(() => new ProductPrice(-100)).toThrowError(InvalidProductPrice);
  });

  test("throw invalid price if VAT is negative", () => {
    expect(() => new ProductPrice(100, -0.21)).toThrowError(
      InvalidProductPrice
    );
  });
});

test("test framework working", async () => {
  expect(true).toBe(true);
});
