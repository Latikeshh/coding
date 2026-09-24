# Enumerations (`enum`)

> 🟡 Intermediate

## 📖 Definition

An **Enumeration** (`enum`) is a custom user-defined data type in C consisting of a set of named integer constants. Enums replace raw "magic numbers" in code with self-documenting human-readable labels.

## 🌐 Multilingual Explanation

### English
An `enum` defines custom symbolic names for integer constants. By default, compiler assigns integer values starting from `0` incrementing by `1` (`0, 1, 2...`), but custom integer values can also be explicitly assigned. Enums improve code readability, simplify switch statements, and eliminate hardcoded magic numbers.

### Hindi
`enum` integer constants ko readable names dene ke liye use hota hai. Default rup se compiler `0` se ginti shuru karta hai (`0, 1, 2...`), par hum custom integer values (jaise `STATUS_OK = 200`) bhi assign kar sakte hain. `enum` se code readable banta hai aur magic numbers hat jaate hain.

### Marathi
`enum` mhanje numbers la manus-samjel ashi naave dene. Default value `0` pasun shuru hote (`0, 1, 2...`). Garaz aslyas aapan swatachi value (jase `200`) deu shakto. Code vachanasathi sopa honyasathi `enum` vapartat.

### Hinglish
Raw integer numbers (`0`, `1`, `2`) ko code mein hardcode karne ke bajaye `enum` (`PENDING = 0`, `PROCESSING = 1`, `COMPLETED = 2`) use karo. `switch` statement ke saath `enum` combine karne par code highly readable aur maintainable ban jata hai.

## 🤔 Why Do We Use Them?

Reading `if (orderStatus == 3)` tells a developer nothing about what state `3` represents. Reading `if (orderStatus == ORDER_SHIPPED)` makes the business logic immediately clear and prevents bugs caused by mistyping integer constants.

## 🧠 Simple Explanation

Think of an `enum` like traffic signal lights:
- Instead of remembering `0 = Red`, `1 = Yellow`, `2 = Green`, you define `enum TrafficLight { RED, YELLOW, GREEN };`.
- The code uses meaningful words (`RED`, `GREEN`) while the CPU handles the underlying numbers (`0`, `2`).

## 📝 Syntax & Declarations

```c
// 1. Default enum (values: RED=0, YELLOW=1, GREEN=2)
typedef enum {
    RED,
    YELLOW,
    GREEN
} TrafficLight;

// 2. Custom value enum
typedef enum {
    HTTP_OK = 200,
    HTTP_BAD_REQUEST = 400,
    HTTP_NOT_FOUND = 404,
    HTTP_SERVER_ERROR = 500
} HttpStatus;
```

## 💡 Practical Example

Here is an e-commerce order processing state machine demonstrating `enum` declarations, custom integer assignments, and integration with `switch` statements:

```c
#include <stdio.h>

// 1. Defining Order Status Enumeration
typedef enum {
    ORDER_PENDING = 1,
    ORDER_PROCESSING, // Automatically assigned 2
    ORDER_SHIPPED,    // Automatically assigned 3
    ORDER_DELIVERED,  // Automatically assigned 4
    ORDER_CANCELLED   // Automatically assigned 5
} OrderStatus;

// Function Prototype
void displayOrderStatus(OrderStatus status);

int main(void) {
    // Declaring enum variables
    OrderStatus currentOrder = ORDER_PENDING;

    printf("--- E-COMMERCE ORDER TRACKING SYSTEM ---\n");
    printf("Initial State:\n");
    displayOrderStatus(currentOrder);

    // Simulating order progression
    printf("\nUpdating order status to SHIPPED...\n");
    currentOrder = ORDER_SHIPPED;
    displayOrderStatus(currentOrder);

    // Printing underlying integer value
    printf("\nUnderlying Integer Value of ORDER_SHIPPED: %d\n", currentOrder);

    return 0;
}

void displayOrderStatus(OrderStatus status) {
    printf("Order Status [%d]: ", status);
    switch (status) {
        case ORDER_PENDING:
            printf("Payment received. Awaiting warehouse fulfillment.\n");
            break;
        case ORDER_PROCESSING:
            printf("Package is being packed at warehouse.\n");
            break;
        case ORDER_SHIPPED:
            printf("Package handed over to courier. In transit.\n");
            break;
        case ORDER_DELIVERED:
            printf("Package successfully delivered to customer.\n");
            break;
        case ORDER_CANCELLED:
            printf("Order has been cancelled and refunded.\n");
            break;
        default:
            printf("Unknown order status!\n");
            break;
    }
}
```

## 🔍 Code Breakdown

- `typedef enum { ORDER_PENDING = 1, ... } OrderStatus;`: Explicitly sets `ORDER_PENDING` to `1`. The compiler automatically assigns subsequent constants incremental values (`ORDER_PROCESSING = 2`, `ORDER_SHIPPED = 3`, etc.).
- `switch (status)`: Enums integrate seamlessly with `switch` statements, allowing clean branching based on named state labels.

## 👀 Output

```text
--- E-COMMERCE ORDER TRACKING SYSTEM ---
Initial State:
Order Status [1]: Payment received. Awaiting warehouse fulfillment.

Updating order status to SHIPPED...
Order Status [3]: Package handed over to courier. In transit.

Underlying Integer Value of ORDER_SHIPPED: 3
```

## ⚠️ Common Mistakes

- **Assuming Strong Type Safety in C:** Unlike C++ or Java, C treats `enum` types as basic integers. C will allow assigning raw integers or invalid numbers to an enum variable without triggering compile errors. Always validate enum inputs!
- **Duplicate Enum Name Conflicts:** Enum constant names reside in the global scope within C. Defining `enum Light { RED, GREEN };` and `enum Color { RED, BLUE };` causes a compiler error due to duplicate `RED` definitions. Prefix constants with enum names (e.g., `LIGHT_RED`, `COLOR_RED`).

## 🛡️ Safety / Important Notes

- Group state constants logically using prefix names (e.g. `STATUS_PENDING`, `STATUS_APPROVED`, `STATUS_REJECTED`) to avoid naming collisions across header files.

## 🌍 Real-World Usage

Enums define state machine transitions in game development, HTTP response status codes in web servers, system process states (`TASK_RUNNING`, `TASK_STOPPED` in operating system kernels), and protocol message types.

## 🧪 Try It Yourself

1. Define an `enum Days { MON = 1, TUE, WED, THU, FRI, SAT, SUN };`.
2. Write a program that prints whether a day is a weekday or weekend using `switch`.

## 🎯 Mini Challenge

Write a program defining an `enum UserRole { ROLE_GUEST, ROLE_USER, ROLE_ADMIN };`. Write a function `void checkAccess(UserRole role)` that displays access privileges based on the role.

## 🔗 Related Topics

- [Conditionals](06-conditionals.md)
- [Structures](14-structures.md)
- [Unions and Bit Fields](15-unions-and-bit-fields.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Unions](15-unions-and-bit-fields.md) | [Next: File Handling →](17-file-handling.md)
