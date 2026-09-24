# Data Types & String Methods in JavaScript

> 🟢 Beginner

## 📖 Definition

JavaScript is dynamically typed, meaning variables can hold values of any data type without explicit type declarations. Data types in JavaScript are divided into **Primitive Types** (immutable values) and **Reference / Object Types** (mutable collections).

## 🇮🇳 Hindi

JavaScript mein data types do categories mein divided hain: **Primitive Types** (`String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`) aur **Reference Types** (`Object`, `Array`, `Function`). `typeof` operator se kisi variable ka data type check kiya jata hai.

## 🚩 Marathi

JavaScript madhye data types don mukhya prakarat vibhagile ahet: **Primitive Types** aani **Reference Types**. Variable madhye kontya prakar cha data ahe he tapasnyasathi `typeof` operator cha wapar kela jato.

## 📝 Categories of Data Types

### 1. Primitive Data Types (Stored directly by value)

- **String:** Textual data enclosed in quotes (`"Hello"`, `'World'`, `` `Template` ``).
- **Number:** Numeric values including integers and floating-point decimals (`25`, `99.99`).
- **Boolean:** Logical values (`true` or `false`).
- **Undefined:** Variable declared but not assigned a value.
- **Null:** Intentional absence of any object value.
- **BigInt:** Integers larger than $2^{53} - 1$ (`9007199254740991n`).
- **Symbol:** Unique and immutable primitive value used for object property keys.

### 2. Reference Data Types (Stored by memory reference)

- **Object:** Key-value pairs (`{ name: "Rahul", age: 24 }`).
- **Array:** Ordered list of values (`[10, 20, 30]`).
- **Function:** Callable code block.

## 💡 Syntax & Complete Example

```javascript
// Primitive Data Types
let username = "Aarav";        // String
let score = 95.5;              // Number
let isLoggedIn = true;         // Boolean
let unassignedVar;             // Undefined
let emptyValue = null;         // Null
let bigNumber = 123456789n;    // BigInt

console.log("typeof username:", typeof username);   // "string"
console.log("typeof score:", typeof score);         // "number"
console.log("typeof isLoggedIn:", typeof isLoggedIn); // "boolean"
console.log("typeof unassignedVar:", typeof unassignedVar); // "undefined"
console.log("typeof emptyValue:", typeof emptyValue); // "object" (Historical JS quirk!)

// String Operations and Methods
let greeting = "  Hello JavaScript Developer!  ";

console.log("Length:", greeting.length);              // 31
console.log("Trimmed:", greeting.trim());             // "Hello JavaScript Developer!"
console.log("Uppercase:", greeting.toUpperCase());    // "  HELLO JAVASCRIPT DEVELOPER!  "
console.log("Includes 'JS':", greeting.includes("JS")); // false
console.log("Includes 'JavaScript':", greeting.includes("JavaScript")); // true
console.log("Slice (2, 7):", greeting.slice(2, 7));  // "Hello"
console.log("Replace:", greeting.replace("Developer", "Coder")); // "  Hello JavaScript Coder!  "
```

## 👀 Output

```text
typeof username: string
typeof score: number
typeof isLoggedIn: boolean
typeof unassignedVar: undefined
typeof emptyValue: object
Length: 31
Trimmed: Hello JavaScript Developer!
Uppercase:   HELLO JAVASCRIPT DEVELOPER!  
Includes 'JS': false
Includes 'JavaScript': true
Slice (2, 7): Hello
Replace:   Hello JavaScript Coder!  
```

## 🧠 String Escape Characters & Template Literals

- Escape double quotes: `"She said, \"JavaScript is awesome!\""`
- Newline: `"Line 1\nLine 2"`
- Template Literal Interpolation: `` `User ${username} scored ${score} points.` ``

## 🧪 Try It Yourself

1. Create a variable `city = "Mumbai"`.
2. Print its length, convert it to uppercase, and check if it starts with `"M"` using `.startsWith("M")`.
3. Check `typeof null` in your browser console and verify the result.

## ⚠️ Common Mistakes

- Expecting `typeof null` to return `"null"`. It returns `"object"` due to a legacy design bug from JavaScript's first release in 1995.
- Mutating strings directly (`str[0] = "X"` does not change string contents because primitive values are immutable).

## 🌍 Real-World Usage

Data type checking ensures form input validation (e.g., verifying phone numbers are numbers before performing database operations).

## 💡 Remember

Primitives are compared by value, while Objects and Arrays are compared by memory reference.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Variables](03-variables.md) | [Next: Operators →](05-operators.md)
