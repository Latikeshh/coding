# Variables and Data Types

## Definition

A variable is a named location for a value. Java is statically typed: a variable's declared type determines which values and operations are allowed.

## Hindi Explanation

Variable ek naam hai jiske saath value judi hoti hai. Java mein variable ka type pehle declare karte hain, jaise `int` ya `String`.

## Marathi Explanation

Variable he value sathi dilele nav aahe. Java madhye `int` kiwa `String` sarkha type aadhi declare karto.

## Hinglish Explanation

Variable ko labeled storage samjho. Java mein label ke saath type bhi batana hota hai, taaki compiler galat operations pakad sake.

## Why Use It?

Variables let a program retain and update information such as a score, name, or account balance.

## Syntax

```java
int score = 0;
score = score + 5;
final double taxRate = 0.18;
```

Use meaningful lowerCamelCase names. Names cannot be keywords and cannot begin with a digit. `final` prevents reassignment of that variable; for object references, it does not make the referenced object immutable.

## Primitive and Reference Types

```java
byte smallCount = 12;
int population = 250_000;
long distance = 9_000_000_000L;
float ratio = 0.5f;
double price = 19.95;
char grade = 'A';
boolean active = true;
String studentName = "Mira";
```

Java's eight primitives are `byte`, `short`, `int`, `long`, `float`, `double`, `char`, and `boolean`. `String` is a reference type, not a primitive. Local variables must be assigned before they are read. A field of a reference type defaults to `null`; primitives have default values in fields. Avoid using `null` unless absence is meaningful.

## Example and Output

```java
class ScoreCard {
    public static void main(String[] args) {
        String learner = "Mira";
        int correct = 8;
        int total = 10;
        double percentage = correct * 100.0 / total;
        System.out.println(learner + " scored " + percentage + "%");
    }
}
```

```text
Mira scored 80.0%
```

`int` division discards a fractional part; multiplying by `100.0` makes this calculation floating-point. Floating-point values approximate many decimal fractions; use `BigDecimal` for exact decimal money calculations.

## Code Breakdown

The declaration `int correct = 8` gives the variable a type and initial value. Later assignments must be compatible with `int`. `var` can infer a local variable's static type from its initializer, but it does not make Java dynamically typed.

## Another Practical Example

```java
int stock = 12;
stock -= 3;
boolean needsRestock = stock < 5;
System.out.println("Remaining: " + stock + ", restock: " + needsRestock);
```

## Common Mistakes

- Assigning a `String` to an `int` variable.
- Confusing `=` (assignment) with `==` (comparison).
- Using `float` or `double` for exact currency arithmetic.
- Reading an uninitialized local variable.

## Important Notes

Primitive values are stored directly as values; reference variables hold references to objects. Strings are immutable: operations create a new string. Arrays and many collection objects are mutable. Java passes arguments by value, including a copy of an object reference; a method can mutate the referenced object but cannot replace the caller's reference variable.

## Real-World Usage

Types communicate intent and let the compiler catch many mistakes before the program runs.

## Try It Yourself

Represent a product name, quantity, unit price, and whether it is in stock. Print a summary.

## Mini Challenge

Calculate a student's percentage without integer-division loss. Try `var` for one local and inspect its inferred type by assigning an incompatible value.

## Related Topics

[Input and Output](04-input-and-output.md) · [Operators](05-operators-and-expressions.md)

## Navigation

[Previous: Structure](02-java-program-structure.md) | [Home](00-README.md) | [Next: Input and Output](04-input-and-output.md)
