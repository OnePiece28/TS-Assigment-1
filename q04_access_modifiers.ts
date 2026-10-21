// Q4. Access Modifiers
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

  // public: accessible inside the class
  showProductID(): void {
    console.log("Inside Product class -> productID:", this.productID);
  }

  // private price is accessible only inside this class, so a public method exposes it
  getPrice(): number {
    return this.price;
  }
}

class ElectronicProduct extends Product {
  constructor(productID: number, price: number, category: string) {
    super(productID, price, category);
  }

  showCategory(): void {
    // protected: accessible inside the child class
    console.log("Inside ElectronicProduct class -> category:", this.category);
  }

  showProductIDInChild(): void {
    // public: accessible inside the child class as well
    console.log("Inside ElectronicProduct class -> productID:", this.productID);
  }

  // this.price would NOT work here, because private members are not visible to child classes
}

const laptop = new ElectronicProduct(201, 60000, "Electronics");

// 1. Public property: accessible inside and outside the class
laptop.showProductID();                                  // inside (via method)
laptop.showProductIDInChild();                           // inside child class
console.log("Outside the class -> productID:", laptop.productID); // outside

// 2. Private property outside the class: NOT allowed (compile-time error).
//    Uncommenting the next line gives:
//    error TS2341: Property 'price' is private and only accessible within class 'Product'.
// console.log("Outside the class -> price:", laptop.price);
//    See q04_private_access_error.ts, which shows this error when compiled.
console.log("Price via public getter:", laptop.getPrice());

// 3. Protected property inside the child class
laptop.showCategory();

// Protected property outside the class is also NOT allowed:
// console.log(laptop.category);
//    error TS2445: Property 'category' is protected and only accessible within class 'Product' and its subclasses.
