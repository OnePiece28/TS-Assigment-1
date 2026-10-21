// Q4 (Task 2) - this file intentionally FAILS to compile.
// Run:  tsc q04_private_access_error.ts   to see the error for the screenshot.
export {};

class Product {
  public productID: number;
  private price: number;
  protected category: string;

  constructor(productID: number, price: number, category: string) {
    this.productID = productID;
    this.price = price;
    this.category = category;
  }
}

class ElectronicProduct extends Product {}

const laptop = new ElectronicProduct(201, 60000, "Electronics");

console.log(laptop.productID); // OK  - public
console.log(laptop.price);     // ERROR - 'price' is private
console.log(laptop.category);  // ERROR - 'category' is protected
