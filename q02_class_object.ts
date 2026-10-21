// Q2. Class and Object
export {}; // treats this file as a module so class names don't clash across files

class Product {
  productID: number;
  name: string;
  price: number;
  category: string;

  constructor(productID: number, name: string, price: number, category: string) {
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  displayInfo(): void {
    console.log(`ID: ${this.productID} | Name: ${this.name} | Price: ₹${this.price} | Category: ${this.category}`);
  }
}

const p1 = new Product(1, "Laptop", 55000, "Electronics");
const p2 = new Product(2, "T-Shirt", 799, "Clothing");
const p3 = new Product(3, "Rice Bag", 650, "Grocery");

p1.displayInfo();
p2.displayInfo();
p3.displayInfo();
