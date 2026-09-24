# Unions & Bit Fields in C

> 🔴 Advanced

## 📖 Definition

- **Union:** A user-defined data type where **all members share the exact same memory location**. The size of a `union` equals the size of its largest member.
- **Bit Fields:** Explicit bit-width specifications inside structures or unions (`unsigned int flag : 1;`) that pack integer data into exact numbers of bits to conserve memory.

## 🌐 Multilingual Explanation

### English
A `union` allows storing different data types in the same shared memory location, but only one member can contain a valid value at any given time. `struct` allocates separate memory for every member, whereas `union` overlaps memory. Bit fields allow specifying exact bit counts for fields, which is essential for hardware registers and low-level protocols.

### Hindi
`union` mein sabhi members ek hi shared memory location share karte hain, isliye ek samay par sirf ek hi member valid value hold kar sakta hai. `struct` har member ko alag memory deta hai jabki `union` memory overlap karta hai. Bit fields (`flag : 1`) exact bit counts set karke memory bachate hain.

### Marathi
`union` madhye sarv members ekach memory location var sathavle jatat. Ekach veli fakt ekach member chi value vaprata yete. `struct` madhye pratyek member sathi vegli memory aste. Bit fields mulhe garjenusar bits (`: 1` bit) tharavun memory vachavta yete.

### Hinglish
`struct` aur `union` mein main difference memory allocation ka hota hai. `struct` size = sum of all member sizes (+ padding). `union` size = size of largest member. Bit fields hardware status flags pack karne ke liye use hote hain.

## 🤔 Why Do We Use Them?

When working with memory-constrained embedded systems, hardware device drivers, or network protocols, memory must be used with extreme efficiency. Unions allow representing variant types in shared buffers, while Bit Fields pack multiple boolean flags into a single byte.

## 🧠 Simple Explanation

- **`struct`:** A house with 3 separate bedrooms (for `int`, `float`, `char`). Everyone can sleep in their own room simultaneously.
- **`union`:** A hotel room with 1 bed. `int`, `float`, and `char` must take turns using the room one at a time.
- **Bit Field:** A light switch box with 8 tiny on/off toggle switches packed inside a single 1-byte container.

## 📝 Syntax & Declarations

### 1. `union` Definition
```c
typedef union {
    int intVal;
    float floatVal;
    char charVal;
} DataVariant; // Size = 4 bytes (size of int/float)
```

### 2. Bit Field Definition
```c
typedef struct {
    unsigned int isReady    : 1; // 1 bit (0 or 1)
    unsigned int isError    : 1; // 1 bit
    unsigned int mode       : 3; // 3 bits (values 0 to 7)
    unsigned int reserved   : 3; // 3 bits reserved
} HardwareRegister; // Total = 8 bits = 1 byte!
```

## 💡 Practical Example

Here is a practical program demonstrating Union memory sharing vs Struct memory allocation, and Bit Field flag manipulation:

```c
#include <stdio.h>

// 1. Struct definition
typedef struct {
    int id;
    float rating;
    char code;
} StructData;

// 2. Union definition (shares memory)
typedef union {
    int id;
    float rating;
    char code;
} UnionData;

// 3. Bit Field for Hardware Flags
typedef struct {
    unsigned int powerOn   : 1;
    unsigned int wifiConnected : 1;
    unsigned int batteryLow : 1;
    unsigned int errorCode : 5; // 5 bits (0 to 31)
} StatusFlags;

int main(void) {
    printf("--- 1. STRUCT VS UNION MEMORY COMPARISON ---\n");
    printf("Size of StructData: %zu bytes (separate memory)\n", sizeof(StructData));
    printf("Size of UnionData : %zu bytes (shared memory!)\n\n", sizeof(UnionData));

    // 2. Union Usage Demonstration
    printf("--- 2. UNION SHARED MEMORY BEHAVIOR ---\n");
    UnionData uVal;

    uVal.id = 1000;
    printf("Assigned id = 1000  -> uVal.id = %d\n", uVal.id);

    uVal.rating = 98.5f; // Overwrites shared memory!
    printf("Assigned rating = 98.5 -> uVal.rating = %.1f\n", uVal.rating);
    printf("Reading old uVal.id after float overwrite -> %d (CORRUPTED GARBAGE!)\n\n", uVal.id);

    // 3. Bit Field Usage Demonstration
    printf("--- 3. BIT FIELD HARDWARE FLAGS ---\n");
    StatusFlags deviceStatus = {0}; // Initialize all bits to 0

    deviceStatus.powerOn = 1;
    deviceStatus.wifiConnected = 1;
    deviceStatus.batteryLow = 0;
    deviceStatus.errorCode = 18; // Value fits in 5 bits (max 31)

    printf("Size of StatusFlags struct: %zu byte(s)\n", sizeof(StatusFlags));
    printf("Power On      : %u\n", deviceStatus.powerOn);
    printf("WiFi Connected: %u\n", deviceStatus.wifiConnected);
    printf("Battery Low   : %u\n", deviceStatus.batteryLow);
    printf("Error Code    : %u\n", deviceStatus.errorCode);

    return 0;
}
```

## 🔍 Code Breakdown

- `sizeof(UnionData)`: Evaluates to `4` bytes (the size of `float` or `int`), whereas `sizeof(StructData)` is `12` bytes (due to member sum plus alignment padding).
- `uVal.rating = 98.5f;`: Writing to `uVal.rating` overwrites the exact memory bytes previously held by `uVal.id`. Reading `uVal.id` afterwards yields garbage data.
- `unsigned int powerOn : 1;`: The `: 1` instructs the compiler to allocate exactly 1 bit for `powerOn`.

## 👀 Output

```text
--- 1. STRUCT VS UNION MEMORY COMPARISON ---
Size of StructData: 12 bytes (separate memory)
Size of UnionData : 4 bytes (shared memory!)

--- 2. UNION SHARED MEMORY BEHAVIOR ---
Assigned id = 1000  -> uVal.id = 1000
Assigned rating = 98.5 -> uVal.rating = 98.5
Reading old uVal.id after float overwrite -> 1120403456 (CORRUPTED GARBAGE!)

--- 3. BIT FIELD HARDWARE FLAGS ---
Size of StatusFlags struct: 4 byte(s)
Power On      : 1
WiFi Connected: 1
Battery Low   : 0
Error Code    : 18
```

## ⚠️ Common Mistakes

- **Reading Inactive Union Members:** Storing a value in `uVal.rating` and expecting `uVal.id` to retain its previous value. A `union` can only store ONE active member at a time.
- **Bit Field Overflow:** Assigning a value larger than the bit width capacity (e.g. assigning `35` to a 5-bit field whose max capacity is $2^5 - 1 = 31$) truncates higher bits, causing silent data corruption!
- **Assuming Bit Field Layout is Portable:** Bit field layout ordering (least-significant bit vs most-significant bit first) and alignment boundaries are implementation-defined and compiler-dependent. Do not rely on bit fields for binary file formats that cross different CPU architectures.

## 🛡️ Safety / Important Notes

- Always document or track which union member is currently active (e.g., wrap the union in a `tagged union` struct containing an `enum type` field).

## 🌍 Real-World Usage

Unions parse network protocol packets (IP/UDP packet variant headers), implement variant types in interpreter engines, and save memory in embedded microcontrollers. Bit fields control hardware status registers in microcontrollers and automotive CAN-bus protocols.

## 🧪 Try It Yourself

1. Create a `union Value` containing `int i` and `char str[4]`.
2. Assign an integer value, print it, then assign a 3-character string and print `str`.

## 🎯 Mini Challenge

Write a tagged union structure `typedef struct { int type; union { int i; float f; char c; } data; } Variant;` where `type` stores `1` for `int`, `2` for `float`, and `3` for `char`. Write a function to print the correct active variant data based on `type`.

## 🔗 Related Topics

- [Structures](14-structures.md)
- [Enumerations](16-enums.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Structures](14-structures.md) | [Next: Enumerations →](16-enums.md)
