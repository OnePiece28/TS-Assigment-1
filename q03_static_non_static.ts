// Q3. Static and Non-Static Members
export {};

class Product {
  static companyName: string = "TechStore";

  productID: number;
  name: string;
  price: number;

  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  static displayCompany(): void {
    console.log(`Company Name: ${Product.companyName}`);
  }

  displayInfo(): void {
    console.log(`ID: ${this.productID} | Name: ${this.name} | Price: ₹${this.price}`);
  }
}

const p1 = new Product(101, "Wireless Mouse", 899);
const p2 = new Product(102, "Keyboard", 1499);

Product.displayCompany(); // static: called on the class, not on an object
p1.displayInfo();
p2.displayInfo();
