# Q1. Installation and Execution of TypeScript

## Step 1: Install Node.js
1. Download the LTS version from https://nodejs.org and install it with the default options.
2. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

## Step 2: Install TypeScript
Install the TypeScript compiler globally using npm:
```bash
npm install -g typescript
```
Verify the installation:
```bash
tsc -v
```

## Step 3: Write a TypeScript program
Create a file named `hello.ts`:
```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

## Step 4: Compile the TypeScript file to JavaScript
```bash
tsc hello.ts
```
This generates a `hello.js` file in the same folder.

## Step 5: Run the compiled JavaScript with Node.js
```bash
node hello.js
```
Output:
```
Hello, TypeScript!
```

## Optional: Run a .ts file directly with ts-node
```bash
npm install -g ts-node
ts-node hello.ts
```

## Optional: Set up a TypeScript project
```bash
npm init -y
npm install --save-dev typescript
npx tsc --init      # creates tsconfig.json
npx tsc             # compiles all .ts files
```
