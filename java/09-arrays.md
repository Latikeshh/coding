---
layout: default
title: "09 arrays"
---

# Arrays

## Definition

An array is a fixed-length object that stores indexed elements of one component type.

## Hindi Explanation

Array ek fixed-size collection hai jisme same type ke elements index ke saath store hote hain.

## Marathi Explanation

Array ha fixed-size sanch aahe jyat ekach type che elements index nusar sathavle jatat.

## Hinglish Explanation

Array ko numbered slots ki row samjho; indexing zero se shuru hoti hai.

## Why Use It?

Arrays are useful when the number of elements is known and direct indexed access is needed.

## Syntax and Example

```java
int[] scores = {82, 91, 76};
scores[0] = 85;
System.out.println(scores.length);
System.out.println(scores[0]);
```

## Output

```text
3
85
```

## Code Breakdown

`int[]` is an array of integers. Indexes range from `0` to `length - 1`. Arrays use `.length` (not a method call). A newly allocated numeric array is initialized with zeros; reference arrays begin with `null` elements.

## Another Practical Example

```java
int[] attendance = {1, 1, 0, 1};
int present = 0;
for (int day : attendance) {
    present += day;
}
System.out.println("Present days: " + present);
```

Arrays can be nested, for example `int[][] grid`. `Arrays.copyOf(scores, scores.length)` makes a shallow array copy; for primitive elements this copies values, while object elements still refer to the same objects.

## Common Mistakes

- Accessing an invalid index causes `ArrayIndexOutOfBoundsException`.
- Writing `scores.length()` instead of `scores.length`.
- Assuming an array grows when an element is added; use a collection such as `ArrayList` for resizing.

## Important Notes

An array variable is a reference. Assigning `int[] other = scores` aliases the same array; changing an element through either reference is visible through both. `Arrays.copyOf` makes a separate one-dimensional copy.

## Real-World Usage

Arrays represent fixed-size sensor samples, grids, or data exchanged with APIs that require arrays.

## Try It Yourself

Find the largest value in an integer array.

## Mini Challenge

Create a 3-by-3 multiplication table using a two-dimensional array and nested loops.

## Related Topics

[Methods](08-methods.md) · [Collections](11-collections.md)

## Navigation

[Previous: Methods](08-methods.md) | [Home](00-README.md) | [Next: Strings](10-strings.md)

