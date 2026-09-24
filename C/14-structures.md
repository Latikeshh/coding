# Structures (`struct`) & `typedef`

> 🟡 Intermediate

## 📖 Definition

A **Structure** (`struct`) is a composite user-defined data type in C that groups logically related variables of different data types together under a single custom type name.

## 🌐 Multilingual Explanation

### English
Structures group heterogeneous data variables together. Use the dot operator (`.`) to access struct members from a direct variable, and the arrow operator (`->`) when accessing members through a struct pointer. `typedef` creates clean type aliases for structures, eliminating the need to write `struct Keyword` repeatedly.

### Hindi
`struct` alag-alag data types ke variables ko ek sath group karne ke liye use hota hai. Direct struct variable se members access karne ke liye dot operator (`.`) use karein, aur struct pointer ke sath arrow operator (`->`) ka upyog karein. `typedef` se struct ko ek clean short type name diya jata hai.

### Marathi
`struct` mule vegveglaya data types che variables ekatra sathavata yetat. Direct variable sathi dot operator (`.`) aani pointer sathi arrow operator (`->`) vaparava. `typedef` mule struct la naveen short naav deta yete.

### Hinglish
Heterogeneous variables ko single custom data record mein pack karne ke liye `struct` use hota hai. Pointer dereferencing + member access ko simplify karne ke liye `ptr->member` syntax syntax provided hai. Large structs ko functions mein pass karte waqt value copy karne ke bajaye pointer pass karna performance-wise fast hota hai.

## 🤔 Why Do We Use Them?

Real-world entities cannot be represented by a single primitive integer or float. An **Employee** record has an ID (`int`), Name (`char[]`), Salary (`double`), and Department (`char[]`). A `struct` encapsulates all these fields into a single `Employee` type.

## 🧠 Simple Explanation

Think of a `struct` as an ID card or a paper form with multiple fields:
- Top Field: Name (Text)
- Second Field: Age (Number)
- Third Field: Salary (Decimal)
The entire form represents a single Person record.

## 📝 Syntax & Declarations

```c
// 1. Defining a Structure with typedef
typedef struct {
    int id;
    char name[50];
    double salary;
} Employee; // 'Employee' is now a custom data type!

// 2. Variable Initialization
Employee emp1 = {101, "Anand Kumar", 65000.00};

// 3. Accessing Members
emp1.salary = 70000.00; // Dot operator for direct struct variables
```

### Direct Access vs Pointer Access
- Direct struct variable: `emp.salary` (Dot `.` operator)
- Pointer to struct variable: `pEmp->salary` (Arrow `->` operator, equivalent to `(*pEmp).salary`)

## 💡 Practical Example

Here is a practical employee record database demonstrating nested structures, arrays of structs, typedefs, and struct pointers passed to functions:

```c
#include <stdio.h>
#include <string.h>

// Nested Structure for Date
typedef struct {
    int day;
    int month;
    int year;
} Date;

// Main Employee Structure
typedef struct {
    int id;
    char name[40];
    double salary;
    Date joinDate; // Nested struct member
} Employee;

// Function Prototypes - Passing struct pointers for efficiency
void printEmployee(const Employee *emp);
void giveRaise(Employee *emp, double percentage);

int main(void) {
    // 1. Initializing Array of Structures
    Employee staff[2] = {
        {101, "Sarah Connor", 75000.00, {15, 6, 2021}},
        {102, "John Matrix", 82000.00, {1, 10, 2019}}
    };

    printf("--- INITIAL EMPLOYEE RECORDS ---\n");
    for (int i = 0; i < 2; i++) {
        printEmployee(&staff[i]); // Pass address to avoid copying struct bytes
    }

    // 2. Modifying struct via pointer function
    printf("\nApplying 10%% salary raise to Employee ID #101...\n");
    giveRaise(&staff[0], 10.0);

    printf("\n--- UPDATED EMPLOYEE RECORDS ---\n");
    printEmployee(&staff[0]);

    return 0;
}

// --- FUNCTION DEFINITIONS ---

// Use const Employee *emp to prevent copying large struct and guard against unwanted edits
void printEmployee(const Employee *emp) {
    // Use arrow operator -> with struct pointers
    printf("ID: #%d | Name: %-15s | Salary: $%.2lf | Joined: %02d/%02d/%d\n",
           emp->id, emp->name, emp->salary, 
           emp->joinDate.day, emp->joinDate.month, emp->joinDate.year);
}

void giveRaise(Employee *emp, double percentage) {
    if (emp != NULL && percentage > 0) {
        emp->salary += emp->salary * (percentage / 100.0);
    }
}
```

## 🔍 Code Breakdown

- `typedef struct { ... } Employee;`: Combines struct definition with `typedef`, allowing creation of variables using `Employee emp1;` without needing `struct Employee emp1;`.
- `emp->joinDate.day`: Demonstrates accessing nested struct members. `emp->joinDate` accesses the `Date` struct member via arrow operator, and `.day` accesses the `day` integer field inside `Date`.
- `void printEmployee(const Employee *emp)`: Passing `const Employee*` passes a 8-byte memory address rather than making a full byte copy of the entire structure on the Stack, improving performance.

## 👀 Output

```text
--- INITIAL EMPLOYEE RECORDS ---
ID: #101 | Name: Sarah Connor    | Salary: $75000.00 | Joined: 15/06/2021
ID: #102 | Name: John Matrix     | Salary: $82000.00 | Joined: 01/10/2019

Applying 10% salary raise to Employee ID #101...

--- UPDATED EMPLOYEE RECORDS ---
ID: #101 | Name: Sarah Connor    | Salary: $82500.00 | Joined: 15/06/2021
```

## ⚠️ Common Mistakes

- **Confusing Dot `.` and Arrow `->` Operators:** Using `emp.salary` when `emp` is a pointer (`Employee *emp`). Must use `emp->salary` or `(*emp).salary`.
- **Comparing Structs with `==`:** Writing `if (emp1 == emp2)` causes compilation errors! C does NOT support direct `==` comparison for structures because structures may contain internal alignment padding bytes. Compare struct fields individually or use `memcmp()`.
- **Passing Large Structs by Value:** Passing large structs directly to functions (`void process(Employee e)`) copies every byte onto the Stack. Always pass struct pointers (`const Employee *e`) for efficiency.

## 🛡️ Structure Padding & Alignment Note

Compilers insert hidden **padding bytes** between struct members to align data types on natural hardware memory boundaries (e.g. 4-byte boundaries for `int`, 8-byte boundaries for `double`). As a result, `sizeof(struct)` is often larger than the sum of its individual member sizes!

## 🌍 Real-World Usage

Structures are used to define database record schemas, operating system file handles, network packet headers (TCP/IP headers), graphics mesh vertices, and device configuration descriptors.

## 🧪 Try It Yourself

1. Define a `struct Student` containing `rollNumber` (`int`), `name` (`char[30]`), and `gpa` (`float`).
2. Create a student variable, initialize it, and print its fields.

## 🎯 Mini Challenge

Write a program that creates an array of 3 `struct Book` items (`title`, `author`, `price`), reads book data using a loop, finds the book with the highest price, and prints its details using a pointer function.

## 🔗 Related Topics

- [Pointers Basics](10-pointers-basics.md)
- [Dynamic Memory Allocation](13-dynamic-memory-allocation.md)
- [Unions and Bit Fields](15-unions-and-bit-fields.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Dynamic Memory Allocation](13-dynamic-memory-allocation.md) | [Next: Unions & Bit Fields →](15-unions-and-bit-fields.md)
