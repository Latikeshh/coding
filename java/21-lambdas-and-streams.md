# Lambdas and Streams

## Definition

A lambda is a concise function-like expression used where a functional interface is expected. A stream pipeline processes a sequence of values through operations.

## Hindi Explanation

Lambda chhota behavior express karta hai. Stream data par filter aur transform jaise steps lagata hai.

## Marathi Explanation

Lambda lahan behavior vyakta karto. Stream data var filter ani transform sarkhya kriya karto.

## Hinglish Explanation

Lambda callback ka compact form hai; stream collection data ko declarative steps mein process karti hai.

## Why Use It?

Lambdas simplify callbacks and streams make common transformations and aggregations readable.

## Syntax and Example

```java
import java.util.List;

List<Integer> marks = List.of(35, 82, 91, 67);
List<Integer> passing = marks.stream()
        .filter(mark -> mark >= 40)
        .sorted()
        .toList();
System.out.println(passing);
```

## Output

```text
[67, 82, 91]
```

## Code Breakdown

`mark -> mark >= 40` is a lambda implementing a predicate. `filter` retains matching elements; `sorted` orders them; `toList` collects the result into an unmodifiable list. Intermediate operations are lazy until a terminal operation runs.

## Another Practical Example

```java
int total = marks.stream().mapToInt(Integer::intValue).sum();
System.out.println(total);
```

Method references such as `Integer::intValue` are compact lambdas when they improve clarity.

## Common Mistakes

- Adding side effects inside a stream pipeline when a simple loop would be clearer.
- Reusing a stream after a terminal operation; streams are single-use.
- Assuming parallel streams automatically run faster or preserve every ordering behavior.

## Important Notes

Use streams for clear transformations and reductions; use loops when mutation, early exit, or step-by-step debugging reads better. Avoid modifying the source collection during a stream operation.

## Real-World Usage

Streams filter search results, map database records to view data, and aggregate totals.

## Try It Yourself

Given a list of prices, keep prices above a threshold and calculate their sum.

## Mini Challenge

Group words by their first letter using `Collectors.groupingBy`; compare with a loop-based solution.

## Related Topics

[Collections](11-collections.md) · [Methods](08-methods.md)

## Navigation

[Previous: Files](20-file-input-and-output.md) | [Home](00-README.md) | [Next: Dates and Time](22-dates-and-time.md)
