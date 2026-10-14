---
layout: default
title: "13 operator overloading"
---

# Operator Overloading in C++ (`+`, `==`, `<<`)

> 🟡 Intermediate

---

## 📖 Definition

**Operator Overloading** is a feature in C++ that enables custom user-defined meaning to built-in C++ operators (`+`, `-`, `==`, `<<`, `[]`, `()`) when applied to custom objects. It allows user-defined classes (like `Complex`, `Vector2D`, `Matrix`, or `BigInt`) to be manipulated using standard mathematical operators seamlessly.

---

## I🇮🇳 Hindi Explanation

Operator Overloading ka matlab hai built-in operators (jaise `+` ya `==`) ko aapni custom Class ke liye kaam karwana. Jaise do integer numbers ko `a + b` se joda jata hai, waise hi Operator Overloading se aap do `Complex` numbers ya `Vector2D` objects ko bhi `c1 + c2` likh kar direct add kar sakte ho! Stream insertion operator `<<` ko overload karke `std::cout << object;` directly print kiya ja sakta hai.

---

## 🚩 Marathi Explanation

Operator Overloading mule C++ madhil built-in operators (`+`, `==`, `<<`) aaplya sfi custom class che objects sathi vaparta yetat. Udaharanarth don `Complex` numbers kiwa 2D Coordinates direct `p1 + p2` lihun berij karta yetat. `<<` operator overload karun `std::cout << obj;` sahajapane print karta yete.

---

## 📝 Overloadable vs Non-Overloadable Operators

### Overloadable Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `!=`, `<`, `>`, `<=`, `>=`
- I/O Stream Operators: `<<`, `>>`
- Subscript & Call: `[]`, `()`

### Non-Overloadable Operators (Cannot be Overloaded in C++)
- Scope Resolution: `::`
- Member Selection: `.`
- Member Pointer Selector: `.*`
- Ternary Operator: `? :`
- `sizeof` and `typeid`

---

## 💡 Practical Example

```cpp
#include <iostream>

class Vector2D {
private:
    double x, y;

public:
    // Constructor
    Vector2D(double xVal = 0.0, double yVal = 0.0) : x(xVal), y(yVal) {}

    // 1. Overloading Binary '+' Operator (Member Function)
    Vector2D operator+(const Vector2D& rhs) const {
        return Vector2D(x + rhs.x, y + rhs.y);
    }

    // 2. Overloading Comparison '==' Operator
    bool operator==(const Vector2D& rhs) const {
        return (x == rhs.x) && (y == rhs.y);
    }

    // 3. Overloading Stream Insertion Operator '<<' (Friend Function for cout)
    friend std::ostream& operator<<(std::ostream& os, const Vector2D& vec) {
        os << "(" << vec.x << ", " << vec.y << ")";
        return os;
    }
};

int main() {
    Vector2D v1(3.0, 4.0);
    Vector2D v2(1.5, 2.5);

    // Using Overloaded '+' Operator!
    Vector2D v3 = v1 + v2;

    // Using Overloaded '<<' Operator for printing!
    std::cout << "v1       : " << v1 << std::endl;
    std::cout << "v2       : " << v2 << std::endl;
    std::cout << "v1 + v2  : " << v3 << std::endl;

    // Using Overloaded '==' Operator!
    if (v1 == v2) {
        std::cout << "v1 and v2 are equal." << std::endl;
    } else {
        std::cout << "v1 and v2 are NOT equal." << std::endl;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `Vector2D operator+(const Vector2D& rhs) const`: Overloads the `+` operator. `rhs` is the right-hand side operand. Returns a new `Vector2D` object.
- `friend std::ostream& operator<<(std::ostream& os, const Vector2D& vec)`: Stream insertion requires access to `std::cout` (left operand) and `Vector2D` (right operand). Declared as a `friend` function so it can access private `x` and `y` fields.

---

## 👀 Output

```text
v1       : (3, 4)
v2       : (1.5, 2.5)
v1 + v2  : (4.5, 6.5)
v1 and v2 are NOT equal.
```

---

## ⚠️ Common Mistakes

- **Changing Precedence or Arity**: Overloading `+` does not change its syntax or precedence. `+` remains a binary operator.
- **Forgetting Friend Keyword for `<<` Operator**: Since `std::cout` is the left operand in `std::cout << obj;`, member operator overloading won't work. It MUST be a non-member or friend function.

---

## 🛡️ Best Practices

- Preserve expected intuitive mathematical semantics (e.g. `+` should add, not subtract!).
- Always return stream references (`std::ostream&`) from `operator<<` to allow chaining (`std::cout << a << b << c;`).

---

## 🧪 Try It Yourself

1. Create a `Complex` number class representing $a + bi$. Overload `+` and `-` operators to add and subtract complex numbers.

---

## 🎯 Mini Challenge

Create a `Money` class representing currency (`rupees, paise`). Overload `+`, `-`, and `==` operators handling 100 paise roll-over into 1 rupee.

---

## 🔗 Related Topics

- [Classes & Objects](10-classes-and-oops.html)
- [Stream I/O in C++](04-input-output.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Inheritance](12-inheritance-and-polymorphism.html) | [Next: Smart Pointers →](14-smart-pointers.html)

