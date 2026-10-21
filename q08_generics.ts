// Q8. Generic Functions
export {};

function displayProducts<T>(items: T[]): void {
  items.forEach(item => console.log(item));
}

function getFirstElement<T>(items: T[]): T | undefined {
  return items[0];
}

const productNames: string[] = ["Laptop", "Mouse", "Keyboard"];
const productPrices: number[] = [55000, 899, 1499];
const productIDs: number[] = [101, 102, 103];

console.log("--- Product Names ---");
displayProducts<string>(productNames);

console.log("--- Product Prices ---");
displayProducts<number>(productPrices);

console.log("--- Product IDs ---");
displayProducts<number>(productIDs);

console.log("--- getFirstElement() ---");
console.log("First name :", getFirstElement(productNames));            // string
console.log("First price:", getFirstElement(productPrices));           // number
console.log("First flag :", getFirstElement([true, false, true]));     // boolean
console.log("First object:", getFirstElement([{ id: 1, name: "Pen" }, { id: 2, name: "Book" }])); // object
console.log("Empty array :", getFirstElement([]));                     // undefined
