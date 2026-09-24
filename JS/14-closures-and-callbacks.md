# Higher-Order Functions & Closures

> 🔴 Advanced

## 📖 Definition

- **Higher-Order Function (HOF):** A function that accepts one or more functions as arguments or returns a function.
- **Closure:** A inner function's ability to "remember" and access variables from its outer lexical scope even after the outer function has returned.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** A closure gives an inner function access to an outer function's variable scope even after execution ends.
> - **Hindi:** क्लोजर (Closure) अंदरूनी फंक्शन को बाहरी फंक्शन के वैरियेबल्स याद रखने की क्षमता देता है।
> - **Marathi:** क्लोजरमुळे आतील फंक्शनला बाहेरील फंक्शनमधील व्हॅरियबल्स वापरता येतात.
> - **Hinglish:** Closure ek inner function ko outer function ke variables access karne ki permission deta hai, chahe outer function finish ho chuka ho.

---

## 🧠 How Closures Work

When a function is declared inside another function, the inner function maintains a hidden link (lexical environment) to the outer function's variable scope.

```javascript
function createCounter() {
  let count = 0; // Private variable trapped inside the closure

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter(); // Independent closure state
console.log(counter2()); // 1
```

## 👀 Output

```text
1
2
3
1
```

---

## 💡 Practical Use Cases for Closures

1. **Data Privacy / Encapsulation:** Creating private variables that cannot be modified directly from outside.
2. **Function Factories:** Creating tailored functions based on initial configuration.

```javascript
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## ⚠️ Common Mistakes

- Forgetting that closures hold references to variables, not snapshots of values.
- Creating unnecessary closures inside performance-critical loops.

## 🧪 Try It Yourself

Create a function `secretMessage(secret)` that returns an inner function. When called, the inner function should print `"The secret is: [secret]"`.

## 🎯 Mini Challenge

Build a bank account function `createAccount(initialBalance)` that returns an object with `deposit(amt)`, `withdraw(amt)`, and `getBalance()` methods operating on a private `balance` variable via closures.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Array Methods](13-advanced-array-methods.md) | [Next: Promises & Async/Await →](15-promises-and-async-await.md)
