# Arrays in C

> 🟡 Intermediate

## 📖 Definition

An **array** is a fixed-size, contiguous sequence of elements of the same data type stored sequentially in computer memory. Individual elements are accessed using zero-based indices (`0` to `size - 1`).

## 🌐 Multilingual Explanation

### English
Arrays store multiple values of the same type in consecutive memory locations. In C, array indexing starts at `0`. Arrays decay into pointers when passed to functions, meaning array sizes cannot be calculated inside functions using `sizeof` and must be passed as an explicit parameter. Arrays cannot automatically resize.

### Hindi
Array ek hi data type ke multiple elements ko consecutive memory locations mein store karta hai. C mein array indexing `0` se shuru hoti hai. Function mein array paas karne par woh pointer mein decay ho jata hai, isliye function ke andar size alag se paas karna zaroori hai. Array ka size fixed hota hai.

### Marathi
Array ekach data type che anek values salag memory madhye sathavato. Indexing `0` pasun shuru hote. Function madhye array dilyas to pointer banato, mhanun array cha size veglach paas karava lagto. Array cha size badalta yet nahi.

### Hinglish
Array contiguous memory allocation follow karta hai. Element access karne ke liye index `0` se `size - 1` tak hota hai. Valid bounds ke bahar access karne par garbage value milti hai ya Segmentation Fault crash ho jata hai. Arrays fixed size ke hote hain aur dynamic resize nahi ho sakte.

## 🤔 Why Do We Use Them?

If you need to store test scores for 50 students, declaring 50 individual variables (`score1`, `score2`, ... `score50`) is impossible to maintain. An array `int scores[50]` lets you store, loop through, search, and sort all 50 scores in a few clean lines of code.

## 🧠 Simple Explanation

Think of an array as a row of connected post office boxes numbered starting from `0`.
- The **Array Name** (`marks`) is the street address.
- The **Index** (`[0]`, `[1]`, `[2]`) is the box number written on the door.
- All boxes in the row must hold the same type of items (e.g. integer scores).

## 📝 Syntax & Initialization

```c
// 1. Declaration without initialization (contains garbage values!)
int prices[5];

// 2. Explicit initialization
int scores[5] = {88, 92, 79, 95, 84};

// 3. Partial zero-initialization (sets ALL elements to 0)
int totals[100] = {0};

// 4. Inferred size initialization
char vowels[] = {'a', 'e', 'i', 'o', 'u'}; // Compiler infers size = 5
```

## 💡 Practical Example

Here is a comprehensive student score analyzer demonstrating 1D arrays, 2D arrays (subject matrix), passing arrays to functions, linear search, and bubble sort:

```c
#include <stdio.h>

// Function Prototypes - Size MUST be passed as an explicit parameter!
void printArray(const int arr[], int size);
double calculateAverage(const int arr[], int size);
int linearSearch(const int arr[], int size, int target);
void bubbleSort(int arr[], int size);

int main(void) {
    // 1. 1D Array of Student Marks
    int studentMarks[6] = {78, 92, 85, 64, 95, 88};
    int count = sizeof(studentMarks) / sizeof(studentMarks[0]); // 24 / 4 = 6 elements

    printf("--- 1D ARRAY MARKS REPORT ---\n");
    printf("Original Marks: ");
    printArray(studentMarks, count);

    double avg = calculateAverage(studentMarks, count);
    printf("Class Average : %.2lf\n", avg);

    // 2. Searching in Array
    int targetScore = 85;
    int foundIndex = linearSearch(studentMarks, count, targetScore);
    if (foundIndex != -1) {
        printf("Score %d found at Index [%d]\n", targetScore, foundIndex);
    } else {
        printf("Score %d not found in records.\n", targetScore);
    }

    // 3. Sorting Array in ascending order
    bubbleSort(studentMarks, count);
    printf("Sorted Marks  : ");
    printArray(studentMarks, count);

    // 4. 2D Array: Student Marks across 3 Subjects
    printf("\n--- 2D ARRAY: STUDENT SUBJECT MATRIX ---\n");
    // 3 Students, 2 Subjects each
    int markMatrix[3][2] = {
        {85, 90}, // Student 1: Math, Science
        {78, 82}, // Student 2: Math, Science
        {92, 95}  // Student 3: Math, Science
    };

    for (int student = 0; student < 3; student++) {
        int studentTotal = 0;
        for (int subject = 0; subject < 2; subject++) {
            studentTotal += markMatrix[student][subject];
        }
        printf("Student %d Total: %d / 200\n", student + 1, studentTotal);
    }

    return 0;
}

// --- FUNCTION DEFINITIONS ---

// Array parameter decays to pointer (const int *arr)
void printArray(const int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

double calculateAverage(const int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (double)sum / size;
}

int linearSearch(const int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Return matching index
        }
    }
    return -1; // Target not found
}

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

## 🔍 Code Breakdown

- `sizeof(studentMarks) / sizeof(studentMarks[0])`: Calculates total element count in caller scope (`24 bytes total / 4 bytes per int = 6 elements`).
- **Array Decay in Functions:** When passing `studentMarks` to `printArray(studentMarks, count)`, C converts `studentMarks` to a pointer to its first element (`int *`). Inside `printArray`, `sizeof(arr)` returns pointer size (8 bytes on 64-bit), NOT array size! Thus, array size **must** be passed as an explicit second argument.
- **2D Arrays:** `markMatrix[3][2]` allocates 3 rows and 2 columns in row-major contiguous memory.

## 👀 Output

```text
--- 1D ARRAY MARKS REPORT ---
Original Marks: 78 92 85 64 95 88 
Class Average : 83.67
Score 85 found at Index [2]
Sorted Marks  : 64 78 85 88 92 95 

--- 2D ARRAY: STUDENT SUBJECT MATRIX ---
Student 1 Total: 175 / 200
Student 2 Total: 160 / 200
Student 3 Total: 187 / 200
```

## ⚠️ Common Mistakes

- **Buffer Overflow / Out-of-Bounds Indexing:** Accessing `arr[6]` in an array declared as `int arr[6]` (valid indices are `0` to `5`). C does NOT perform runtime array bounds checking! Accessing out-of-bounds indices corrupts memory or causes Segmentation Faults.
- **Trying to Resize Arrays:** Arrays in C have fixed stack memory allocated at declaration time. You cannot "append" elements beyond declared capacity. Use Dynamic Memory Allocation (`malloc`/`realloc`) for dynamic resizing.
- **Comparing Arrays with `==`:** Writing `if (arr1 == arr2)` compares memory addresses of the two arrays, NOT their contents! Use a loop to compare element by element.

## 🛡️ Safety / Important Notes

- Always pass `const` qualifier for array parameters that should NOT be modified by the function (e.g., `void printArray(const int arr[], int size)`).
- Always keep track of array capacity vs actual filled element count.

## 🌍 Real-World Usage

Arrays store game grid boards, matrix transformations in graphics shaders, audio signal samples, network buffer queues, and lookup tables.

## 🧪 Try It Yourself

1. Create an integer array of 5 product prices.
2. Write a loop to find and print the maximum price in the array.

## 🎯 Mini Challenge

Write a program that takes a 3x3 matrix of integers, calculates the sum of elements on its main diagonal (`matrix[i][i]`), and prints the result.

## 🔗 Related Topics

- [Loops](07-loops.md)
- [Functions](08-functions.md)
- [Pointers Basics](10-pointers-basics.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Pointers Basics →](10-pointers-basics.md)
