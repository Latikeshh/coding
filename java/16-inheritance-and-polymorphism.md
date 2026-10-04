---
layout: default
title: "16 inheritance and polymorphism"
---

# Inheritance and Polymorphism

## Definition

Inheritance creates a subtype from a parent class. Polymorphism lets code use a shared parent type while runtime objects provide different implementations.

## Hindi Explanation

Inheritance related classes ke beech subtype sambandh banata hai. Polymorphism same method call ko alag object ke hisaab se alag behavior deta hai.

## Marathi Explanation

Inheritance sambandhit classes madhye subtype sambandh tayar karto. Polymorphism ekach method call la object nusar vegla behavior deto.

## Hinglish Explanation

Common type par code likho; actual subtype apna overridden behavior de sakta hai.

## Why Use It?

Subtyping can model genuine “is-a” relationships and let clients work with a family of implementations.

## Syntax and Example

```java
class Notification {
    void send(String message) { System.out.println("Sending: " + message); }
}

class EmailNotification extends Notification {
    @Override
    void send(String message) { System.out.println("Email: " + message); }
}

Notification notification = new EmailNotification();
notification.send("Your order shipped");
```

## Output

```text
Email: Your order shipped
```

## Code Breakdown

`extends` declares the subclass. `@Override` asks the compiler to verify the method signature. The variable's static type is `Notification`, but the overridden instance method selected at runtime belongs to `EmailNotification`.

## Another Practical Example

```java
static void announce(Notification notification) {
    notification.send("Status update");
}
```

The method can accept any compatible notification subtype.

## Common Mistakes

- Using inheritance only to reuse code despite there being no subtype relationship.
- Forgetting `@Override` and accidentally overloading instead of overriding.
- Trying to extend multiple classes; Java classes have one direct superclass.

## Important Notes

Constructors are not inherited. A subclass constructor can call `super(...)`. Prefer composition when the relationship is “has-a.” Keep inheritance hierarchies shallow and intentional; records are final and cannot be extended.

## Real-World Usage

Polymorphism supports interchangeable payment methods, exporters, or notification channels.

## Try It Yourself

Create a `Shape` parent type and `Circle` and `Rectangle` implementations with an `area()` method.

## Mini Challenge

Store several shapes in a `List<Shape>` and print each area without checking each concrete class.

## Related Topics

[Encapsulation](15-encapsulation-and-composition.md) · [Interfaces](17-interfaces-and-abstract-classes.md)

## Navigation

[Previous: Encapsulation](15-encapsulation-and-composition.md) | [Home](00-README.md) | [Next: Interfaces](17-interfaces-and-abstract-classes.md)

