# TypeScript Notes

## Setting Up the Environment
1. Install **Node.js** and **Tailwind CSS**.
2. TypeScript files (e.g., `app.ts`) compile into JavaScript files (e.g., `app.js`).
3. Use the following command to check for errors in real-time:
   ```bash
   tsc --watch
   ```

---

## Data Types in TypeScript

### Primitive Types
1. **Number**
2. **String**
3. **Boolean**
4. **Character**

### Variable Declarations
- `var` (function-scoped, avoid using)
- `let` (block-scoped, preferred for variables that will change)
- `const` (block-scoped, preferred for constants or immutable values)

---

## Primitive vs. Reference Types

### Primitive Types
- **Examples:** `Number`, `String`, `Boolean`, `Character`
- Immutable and directly store values.

### Reference Types
- **Examples:** Arrays (`[]`), Objects (`{}`), and Functions (`() => {}`).
- Store references to memory locations.

### Example
```typescript
let arr = []; // An empty array

// In JavaScript, arrays can have mixed types:
let jsArray = [1, "string", true]; // Valid in JavaScript

// In TypeScript, arrays are strongly typed:
let tsArray: number[] = [1, 2, 3, 4]; // Only numbers allowed
// tsArray.push("string"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

## Tuples
Tuples are fixed-length arrays with specific types defined for each position.

### Example
```typescript
let tuple: [string, number] = ["Air", 10];
// tuple = [10, "Air"]; // Error: Type 'number' is not assignable to type 'string'
```

---

## Enums
Enums are used to define named constants as key-value pairs. Instead of using `:`, TypeScript uses `=`.

### Example
```typescript
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPERADMIN = "superadmin",
}

console.log(UserRoles.ADMIN); // Output: "admin"

enum StatusCodes {
  ABANDONED = "Abandoned (500)",
  NOT_FOUND = "Not Found (404)",
}

console.log(StatusCodes.NOT_FOUND); // Output: "Not Found (404)"
```

---

## TypeScript Special Types

### `any`
- Disables TypeScript type-checking for the variable.
- **Avoid using `any` as much as possible.**

### `unknown`
- Safer alternative to `any`. You must narrow the type before using it.

### `void`
- Indicates that a function does not return a value.

### `null` and `undefined`
- Used to represent the absence of a value.

### `never`
- Represents functions that never return (e.g., functions with infinite loops or that always throw an error).

### Union Types
- Combine multiple types using `|`.

#### Example
```typescript
let value: null | string;
value = null; // Valid
value = "Hello"; // Valid
value = 42; // Error: Type 'number' is not assignable to type 'null | string'
```

### Intersection Types
- Combine multiple types into one, merging their properties.

#### Example
```typescript
type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(user: string): null;
};

function heyy(a: Admin): void {
  console.log(a.name, a.email);
}
```

---

## Type Inference vs. Type Annotation

### Type Inference
- TypeScript automatically infers the type of a variable based on its value.

#### Example
```typescript
let inferred = 42; // TypeScript infers this as 'number'
inferred = "string"; // Error: Type 'string' is not assignable to type 'number'
```

### Type Annotation
- Explicitly specify the type of a variable.

#### Example
```typescript
let annotated: string = "Hello, TypeScript!";
// annotated = 42; // Error: Type 'number' is not assignable to type 'string'
```

---

## Interfaces
Interfaces define the shape of an object. They are like "contracts" for objects.

### Defining an Interface
```typescript
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // Optional property
}
```

### Using Interfaces with Objects
```typescript
const user: User = {
  name: "John",
  email: "john@example.com",
  password: "securePassword",
};
```

### Extending Interfaces
- Interfaces can be extended to include additional properties.

#### Example
```typescript
interface Admin extends User {
  isAdmin: boolean;
}

const admin: Admin = {
  name: "Jane",
  email: "jane@example.com",
  password: "securePassword",
  isAdmin: true,
};
```

### Interfaces in Functions
```typescript
function printUser(user: User): void {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}
```

### Key Differences Between Interfaces and Intersection Types
- When two interfaces have conflicting properties, TypeScript merges them in an interface.
- Intersection types (`&`) do not merge properties but require the combined properties to align strictly.

#### Example
```typescript
type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(user: string): null;
};

function heyy(a: Admin): void {
  console.log(a.name, a.email);
}
```

---

## Type Aliases
Type aliases are used to create custom types.

### Example
```typescript
type StringOrNull = string | null;

function greet(name: StringOrNull): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, guest!");
  }
}
```

---

## Classes and Objects
Classes provide a blueprint for creating objects, encapsulating data and methods.

### Example of a Class
```typescript
class Device {
  name = "Apple";
  price = 2000000;
  category = "digital";
}

const d1 = new Device();
const d2 = new Device();
```

### Class Definition with Constructor
Constructors initialize object properties when an object is created.

#### Example 1
```typescript
class BottleMarker {
  constructor(
    public brand: string,
    public price: number,
    public color: string,
    public material: string
  ) {}
}

const newBottle = new BottleMarker("Louis Phille", 50000, "gold", "metal");
```

#### Example 2
```typescript
class BiscuitMaker {
  public brand: string;
  public flavour: string;
  public isMaida: boolean;
  public price: number;

  constructor(brand: string, flavour: string, isMaida: boolean, price: number) {
    this.brand = brand;
    this.flavour = flavour;
    this.isMaida = isMaida;
    this.price = price;
  }
}

const darkFantasy = new BiscuitMaker("Dairy Milk", "chocolate", false, 12);

console.log(darkFantasy);
```

---

## Summary
TypeScript enhances JavaScript by adding static typing, which helps prevent runtime errors and makes code more maintainable. Understanding core concepts like type annotations, interfaces, enums, classes, and special types (e.g., `any`, `unknown`, `void`) is key to writing robust applications.

---

## Example Project Structure
```plaintext
project/
├── src/
│   ├── app.ts  // TypeScript entry point
├── dist/
│   ├── app.js  // Compiled JavaScript output
├── tsconfig.json  // TypeScript configuration file
└── package.json  // Node.js project metadata
```

