---
layout: default
title: "Arrays"
---

# Arrays in Java

> 🟢 Beginner

## 📖 Definition

An **Array** is a fixed-size, zero-indexed reference data structure stored in heap memory that holds a contiguous collection of elements of the **same data type**. Arrays can store primitive values or object references.

## 🇮🇳 Hindi

Array same data type ki values ko continuous memory mein store karta hai. Array ki size fixed hoti hai jo creation ke waqt decide hoti hai (`new int[5]`). Indexing `0` se shuru hoti hai (`array[0]`). Array size badhane ke liye Collections (`ArrayList`) ka use kiya jata hai.

## 🚩 Marathi

Array madhye ekach data type che multiple elements sequential memory madhye sathavle jatat. Array chi size badalta yet nahi. Index `0` pasun suru hoto.

## 🤔 Why Do We Use Them?

Instead of declaring 50 separate variables for 50 student test scores (`score1`, `score2`, ...), an array lets you store all 50 scores under a single variable name (`int[] scores = new int[50];`) and process them using loops.

## 🧠 Simple Explanation

Think of an array as an egg carton with numbered slots from `0` to `N-1`. You can place eggs (values) into specific slot numbers, but once manufactured, the carton size cannot expand or shrink.

## 📝 1. Array Declarations & Memory Allocation

```java
// Declaration & Memory Allocation (elements initialized to default 0)
int[] numbers = new int[5];

// Direct Literal Initialization
int[] scores = {85, 92, 78, 64, 90};

// Accessing & Modifying Elements
scores[0] = 88; // Replaces first element
System.out.println("Array Length : " + scores.length); // 5 (.length is a property, NOT a method!)
```

## 📝 2. Multidimensional Arrays (Matrices & Jagged Arrays)

A 2D array is an "array of arrays":

```java
// 2D Matrix (3 rows, 3 columns)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Jagged Array (Rows have different lengths)
int[][] jagged = new int[2][];
jagged[0] = new int[3]; // Row 0 has 3 columns
jagged[1] = new int[5]; // Row 1 has 5 columns
```

## 📝 3. Essential Utility Methods (`java.util.Arrays`)

- `Arrays.toString(array)`: Converts 1D array to formatted string `"[1, 2, 3]"`.
- `Arrays.deepToString(2dArray)`: Converts multidimensional array to string.
- `Arrays.sort(array)`: Sorts array elements in ascending order in-place.
- `Arrays.binarySearch(sortedArray, key)`: Fast binary search (requires array to be sorted first!).
- `Arrays.copyOf(array, newLength)`: Creates a new resized copy of the array.

## 💡 Complete Example: Student Score Analytics Engine

```java
import java.util.Arrays;

public class ScoreAnalytics {
    public static void main(String[] args) {
        int[] testScores = {78, 92, 45, 88, 63, 95, 52};

        System.out.println("Original Scores : " + Arrays.toString(testScores));

        // 1. Calculate Sum & Average
        int totalSum = 0;
        int maxScore = testScores[0];
        int minScore = testScores[0];

        for (int score : testScores) {
            totalSum += score;
            if (score > maxScore) maxScore = score;
            if (score < minScore) minScore = score;
        }

        double averageScore = (double) totalSum / testScores.length;

        // 2. Sorting the array in-place
        int[] sortedScores = Arrays.copyOf(testScores, testScores.length);
        Arrays.sort(sortedScores);

        // 3. Binary Search for target score
        int searchTarget = 88;
        int targetIndex = Arrays.binarySearch(sortedScores, searchTarget);

        System.out.printf("Total Marks     : %d%n", totalSum);
        System.out.printf("Average Score   : %.2f%n", averageScore);
        System.out.printf("Highest Score   : %d%n", maxScore);
        System.out.printf("Lowest Score    : %d%n", minScore);
        System.out.println("Sorted Scores   : " + Arrays.toString(sortedScores));
        System.out.printf("Target (%d) Index: %d%n", searchTarget, targetIndex);
    }
}
```

## 👀 Output

```text
Original Scores : [78, 92, 45, 88, 63, 95, 52]
Total Marks     : 513
Average Score   : 73.29
Highest Score   : 95
Lowest Score    : 45
Sorted Scores   : [45, 52, 63, 78, 88, 92, 95]
Target (88) Index: 4
```

## ⚠️ Common Mistakes

- **`ArrayIndexOutOfBoundsException`:** Attempting to access `array[array.length]`. Valid indices are `0` to `length - 1`!
- **Confusing `.length` with `.length()`:** Arrays use property `arr.length`, while `String` uses method `str.length()`.
- **Calling `Arrays.binarySearch()` on an unsorted array**, which leads to undefined search results!

## 🛡️ Safety / Important Notes

Array variables hold object references. Writing `int[] copy = original;` creates an alias to the **same underlying array** in heap memory. To create a separate independent clone, use `Arrays.copyOf()` or `.clone()`.

## 🌍 Real-World Usage

Low-level audio buffer processing, matrix math in graphics/gaming, pixel grid manipulation in image processing, and data packet buffers in network drivers.

## 🧪 Try It Yourself

1. Create an array of 5 product prices. Calculate and print the average price.
2. Sort the prices in ascending order using `Arrays.sort()`.

## 🎯 Mini Challenge

Write a program that takes an integer array and reverses its elements in-place without creating a second array (using two-pointer swapping).

## 🔗 Related Topics

- [Methods](08-methods.html)
- [Collections](11-collections.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Methods](08-methods.html) | [Next: Strings →](10-strings.html)

