---
layout: default
title: "13 generics"
---

# Generics

## Definition

Generics let classes, interfaces, and methods work with specified reference types while preserving compile-time type checks.

## Hindi Explanation

Generics reusable code ko type ki jankari dete hain, jisse compiler galat value dene par pakad sakta hai.

## Marathi Explanation

Generics reusable code la type chi mahiti detat, mhanun chukicha value dilyas compiler ti olakhu shakto.

## Hinglish Explanation

`List<String>` bolta hai ki is list ka contract strings ka hai; cast baar-baar karne ki zarurat kam hoti hai.

## Why Use It?

Generics make reusable APIs safer and clearer without sacrificing type checking.

## Syntax and Example

```java
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Asha");
String first = names.get(0);
System.out.println(first.toUpperCase());
```

## Output

```text
ASHA
```

## Code Breakdown

`String` is the type argument. The compiler rejects `names.add(42)`. Generic type arguments must be reference types, so use `List<Integer>` rather than `List<int>`; autoboxing converts between `int` and `Integer` where appropriate.

## Another Practical Example

```java
static <T> T first(List<T> values) {
    if (values.isEmpty()) throw new IllegalArgumentException("values must not be empty");
    return values.get(0);
}
```

The type parameter `T` is chosen by the call site. Bounded type parameters such as `<T extends Number>` restrict allowed types. Wildcards (`? extends T`, `? super T`) support flexible APIs; start with exact types until the need for variance is clear.

## Common Mistakes

- Using raw types such as `List` and losing type safety.
- Trying to use primitive type arguments like `List<int>`.
- Assuming generic type information is fully available at runtime; Java uses type erasure for most generic type parameters.

## Important Notes

Prefer `List<?>` when the element type is intentionally unknown. A method that only reads values often accepts `? extends T`; one that consumes `T` often accepts `? super T` (PECS: producer extends, consumer super).

## Real-World Usage

Collections, reusable repositories, result wrappers, and utility methods use generics extensively.

## Try It Yourself

Write a generic method that returns the last element of a non-empty list.

## Mini Challenge

Create a generic `Pair<A, B>` record and use it to store a product name with its quantity.

## Related Topics

[Collections](11-collections.md) · [Records](12-enums-and-records.md)

## Navigation

[Previous: Enums and Records](12-enums-and-records.md) | [Home](00-README.md) | [Next: Classes and Objects](14-classes-and-objects.md)

