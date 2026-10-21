# TypeScript Assignment

TypeScript programs covering classes and objects, static members, access modifiers, method overriding, abstract classes, interfaces, and generics. All examples use a `Product` theme.

## 📂 Project Structure

| Q | Topic | File |
|---|-------|------|
| 1 | Installing and running TypeScript | `q01_installation_steps.md` |
| 2 | Class and Object | `q02_class_object.ts` |
| 3 | Static and Non-Static Members | `q03_static_non_static.ts` |
| 4 | Access Modifiers | `q04_access_modifiers.ts`, `q04_private_access_error.ts` |
| 5 | Method Overriding | `q05_method_overriding.ts` |
| 6 | Abstract Class | `q06_abstract_class.ts` |
| 7 | Interface | `q07_interface.ts` |
| 8 | Generic Functions | `q08_generics.ts` |

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) v18 or above
- TypeScript: `npm install -g typescript`

## ▶️ How to Run

Compile and run a single file:

```bash
tsc q02_class_object.ts
node q02_class_object.js
```

Or compile everything at once into the `dist/` folder:

```bash
npm install
npx tsc
node dist/q02_class_object.js
```

`q04_private_access_error.ts` is meant to fail. Compile it to see the access-modifier errors:

```bash
tsc q04_private_access_error.ts
```

## 📸 Output Screenshots

Screenshots of the outputs are in the [`screenshots/`](./screenshots) folder.

## 👤 Author

**Rohit Gupta**
GitHub: [@OnePiece28](https://github.com/OnePiece28)
