# Higher-Order Functions & Closures

> 🔴 Advanced

## 📖 Definition

- **Callback Function:** A function passed as an argument into another function to be executed later.
- **Higher-Order Function (HOF):** A function that receives another function as an argument, or returns a function.
- **Closure:** An inner function's ability to retain access to variables in its outer lexical scope even after the outer function has finished execution.

## 🇮🇳 Hindi

Closure tab banta hai jab ek inner function apne outer function ke variables ko remember rakhta hai, chahe outer function execute hoke finish ho chuka ho. Closure ka primary use data privacy (private variables) aur function factories banane ke liye hota hai.

## 🚩 Marathi

Closure mhanje aatil (inner) function la baherchya (outer) function mhadhil variables aathvati rahtat, outer function sampaalyanantar hi. Private variables tayar karnya sathi closure cha wapar kela jato.

## 🧠 Lexical Scope & Closure Mechanics

When a function is declared inside an outer function, it creates a binding to its surrounding **Lexical Environment**.

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunction = outerFunction("INSIDE_CLOSURE");
// outerFunction has returned, but newFunction retains access to outerVariable!
newFunction("CALL_TIME_VALUE");
```

## 💡 Complete Example 1: Private Encapsulated State

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable hidden inside closure scope

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ₹${amount}. Current Balance: ₹${balance}`;
      }
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return `Withdrew ₹${amount}. Remaining Balance: ₹${balance}`;
      }
      return "Insufficient funds!";
    },
    getBalance() {
      return `Current Balance: ₹${balance}`;
    }
  };
}

const myAccount = createBankAccount(5000);
console.log(myAccount.deposit(1500));
console.log(myAccount.withdraw(2000));
console.log(myAccount.getBalance());
// console.log(myAccount.balance); // undefined! Cannot be accessed or tampered directly.
```

## 💡 Complete Example 2: Function Factory

```javascript
function multiplier(factor) {
  return (number) => number * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
```

## 👀 Output

```text
Deposited ₹1500. Current Balance: ₹6500
Withdrew ₹2000. Remaining Balance: ₹4500
Current Balance: ₹4500
Double 5: 10
Triple 5: 15
```

## 🧪 Try It Yourself

1. Create a function `createCounter()` that returns a function that increments and returns a private count variable starting from `0`.
2. Test two independent counter instances to verify they maintain separate isolated states.

## ⚠️ Common Mistakes

- Misunderstanding that closures capture **variable references**, not snapshots of static values.
- Creating unnecessary closures inside large loops which can increase memory usage if not cleaned up.

## 🌍 Real-World Usage

Data encapsulation (emulating private fields before native `#field` syntax), debouncing/throttling event listeners, currying functions, and maintaining state in React hooks like `useState`.

## 💡 Remember

Closure = A function + its lexical environment reference.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Array Methods](13-advanced-array-methods.md) | [Next: Promises & Async/Await →](15-promises-and-async-await.md)
