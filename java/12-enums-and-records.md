---
layout: default
title: "12 enums and records"
---

# Enums and Records

## Definition

An enum defines a fixed set of named constants. A record is a concise data-focused class with immutable component fields and generated methods.

## Hindi Explanation

Enum limited named choices ko represent karta hai. Record related data ko ek type mein saaf tareeke se rakhta hai.

## Marathi Explanation

Enum tharavik nav dilele paryay dakhavto. Record sambandhit data eka type madhye vyavasthit thevto.

## Hinglish Explanation

Known options ke liye enum, aur simple data carrier ke liye record handy Java features hain.

## Why Use It?

Named values and explicit data types make APIs easier to understand and harder to misuse.

## Syntax and Example

```java
enum OrderStatus { NEW, PAID, SHIPPED, CANCELLED }
record Student(String name, int marks) { }

class Example {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.PAID;
        Student student = new Student("Asha", 91);
        System.out.println(status + ": " + student.name() + " " + student.marks());
    }
}
```

## Output

```text
PAID: Asha 91
```

## Code Breakdown

Enum constants are values like `OrderStatus.PAID`; they are not arbitrary strings. Record components create a canonical constructor and accessors named after components (`name()`, not `getName()`). Records also provide useful `equals`, `hashCode`, and `toString` implementations.

## Another Practical Example

```java
record Point(int x, int y) { }
Point origin = new Point(0, 0);
System.out.println(origin);
```

## Common Mistakes

- Comparing enum names to raw strings rather than using enum constants.
- Expecting records to be deeply immutable: a final component reference can point to a mutable object.
- Expecting record accessors to use JavaBean `getX` names.

## Important Notes

Enums can have fields, constructors, and methods. Record component fields are final, but defensive copying may still be needed for mutable component values.

## Real-World Usage

Enums model statuses and roles; records model coordinates, request data, and query results.

## Try It Yourself

Create a `Priority` enum and a `Task` record containing a title and priority.

## Mini Challenge

Add a method to an enum that returns a user-friendly label for each status.

## Related Topics

[Classes](14-classes-and-objects.md) · [Collections](11-collections.md)

## Navigation

[Previous: Collections](11-collections.md) | [Home](00-README.md) | [Next: Generics](13-generics.md)

