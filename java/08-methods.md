---
layout: default
title: "08 methods"
---

# Methods

## Definition

A method is a named block of code declared in a class. It can accept parameters and return a result.

## Hindi Explanation

Method ek naam wala code block hai. Isme parameters de sakte hain aur zarurat par result return kar sakte hain.

## Marathi Explanation

Method ha nav dilela code block aahe. Tyala parameters deta yetat ani to result return karu shakto.

## Hinglish Explanation

Method reusable recipe hai: inputs lo, kaam karo, aur zarurat par result wapas do.

## Why Use It?

Methods reduce repetition, name operations clearly, and make code easier to test.

## Syntax and Example

```java
class Discount {
    static double finalPrice(double price, double percent) {
        return price * (1 - percent / 100);
    }

    public static void main(String[] args) {
        System.out.println(finalPrice(200.0, 10.0));
    }
}
```

## Output

```text
180.0
```

## Code Breakdown

`static` lets this example call the method on the class context. `double` is the return type; parameters have declared types. `return` sends a value to the caller and exits the method. `void` means no value is returned. Printing displays a value; returning makes it available for further computation.

## Another Practical Example

```java
static boolean isPassing(int marks) {
    return marks >= 40;
}
```

Java supports overloads: methods can share a name when their parameter lists differ. Java does not provide Python-style default or named arguments; overloads or an options object are common alternatives. Parameters are local to the method. Arguments are passed by value, including object-reference values.

## Common Mistakes

- Declaring a return type but failing to return on every path.
- Returning the wrong type.
- Expecting a method to change a caller's primitive variable.
- Making every method `static`; instance methods belong to objects and are covered later.

## Important Notes

Keep methods focused. Prefer returning calculated values over printing inside reusable calculation methods.

## Real-World Usage

Methods define operations such as computing a tax estimate, validating an order, or formatting a report.

## Try It Yourself

Write `areaOfRectangle(width, height)` and return the area.

## Mini Challenge

Write a method that accepts a year and returns whether it is a leap year; test century-year cases too.

## Related Topics

[Loops](07-loops.md) · [Arrays](09-arrays.md) · [Classes](14-classes-and-objects.md)

## Navigation

[Previous: Loops](07-loops.md) | [Home](00-README.md) | [Next: Arrays](09-arrays.md)

