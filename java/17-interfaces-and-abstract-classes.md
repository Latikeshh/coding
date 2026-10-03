# Interfaces and Abstract Classes

## Definition

An interface defines a contract that classes can implement. An abstract class can provide shared state or implementation while leaving some behavior for subclasses.

## Hindi Explanation

Interface batata hai ki class kaun se operations degi. Abstract class common code de sakti hai aur kuch methods subclasses ke liye chhod sakti hai.

## Marathi Explanation

Interface class konti operations deil he sangto. Abstract class samanya code deu shakto ani kahi methods subclasses sathi thevu shakto.

## Hinglish Explanation

Interface capability ka contract hai; abstract class shared foundation hai jisme kuch behavior abhi adhura ho sakta hai.

## Why Use It?

Interfaces decouple callers from concrete implementations and enable multiple unrelated classes to share a contract.

## Syntax and Example

```java
interface Payable {
    double amountDue();
}

class Invoice implements Payable {
    private final double total;
    Invoice(double total) { this.total = total; }
    @Override public double amountDue() { return total; }
}
```

## Code Breakdown

A class may implement multiple interfaces. Interface methods are public contracts, so implementations must not reduce visibility. Interfaces may also declare default and static methods. An abstract class is declared with `abstract` and cannot be instantiated directly.

## Another Practical Example

```java
static void printDue(Payable payable) {
    System.out.printf("Due: %.2f%n", payable.amountDue());
}
```

Any `Payable` implementation can be supplied.

## Common Mistakes

- Making an implementation method package-private when the interface requires it to be public.
- Using an abstract class when only a small capability contract is needed.
- Treating interfaces as a place for unrelated constants.

## Important Notes

Use an interface for a capability or boundary; use an abstract class when closely related subclasses genuinely share state or implementation. Prefer small interfaces with clear purposes.

## Real-World Usage

Interfaces support test doubles, pluggable storage, payment gateways, and library APIs.

## Try It Yourself

Create a `Printable` interface and implement it for a report and a receipt.

## Mini Challenge

Create two `Payable` classes and pass both to a single total-calculation method.

## Related Topics

[Inheritance](16-inheritance-and-polymorphism.md) · [Testing](23-testing-and-debugging.md)

## Navigation

[Previous: Inheritance](16-inheritance-and-polymorphism.md) | [Home](00-README.md) | [Next: Exceptions](18-exceptions-and-validation.md)
