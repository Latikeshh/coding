# Comprehensive C Mini Projects

> 🔴 Advanced

## 📖 Definition

This lesson presents **Comprehensive C Mini Projects** designed to synthesize all core C concepts — control flow, functions, pointers, dynamic memory allocation (`malloc`/`free`), structures (`struct`), file I/O (`FILE*`), error handling (`errno`), and modular architecture — into production-grade functional software.

## 🌐 Multilingual Explanation

### English
Mini projects bridge theoretical C knowledge with real-world software development. By building applications of increasing complexity (Beginner: Menu-driven banking calculator, Intermediate: Inventory management system with struct arrays, Advanced: Persistent binary file database with dynamic memory allocation), learners gain practical muscle memory for low-level memory safety, file persistence, and robust error handling.

### Hindi
Mini projects C concepts ko practical software mein badalte hain. Teen alag difficulty levels ke projects (Beginner: Menu-driven calculator, Intermediate: Struct array inventory system, Advanced: Persistent binary file database with dynamic heap memory) ke zariye pointer safety, memory management, aur file handling ki strong practice hoti hai.

### Marathi
Mini projects mule shiklele C concepts kharya software madhye vaparta yetat. Teen difficulty levels (Beginner, Intermediate, Advanced) chya projects dware pointers, dynamic memory allocation (`malloc`/`free`), aani binary file handling chi changli practice hote.

### Hinglish
Mini projects real C programming skills test karte hain. Beginner level par interactive console CLI logic, Intermediate level par structured record management, aur Advanced level par Heap memory allocation + binary file disk persistence synthesize hoti hai.

---

## 🟢 PROJECT 1 (Beginner): Interactive Banking ATM Manager

### 🎯 Goal
Build an interactive menu-driven CLI banking console that manages account balance, processes deposits and withdrawals with input validation, and enforces daily withdrawal limits.

### 🧠 Concepts Used
- Input / Output (`printf`, `scanf`)
- Conditionals (`if-else`, `switch`)
- Loops (`do-while` menu loop)
- Functions & Pointers (`pass-by-address`)

### 📝 Requirements
1. Display a menu with 4 choices: Check Balance, Deposit, Withdraw, Exit.
2. Validate deposit/withdrawal inputs (reject negative or zero values).
3. Reject withdrawals exceeding available account balance.
4. Keep running until the user selects choice `4` (Exit).

### 💡 Complete Code Solution

```c
#include <stdio.h>

// Function Prototypes
void displayMenu(void);
void checkBalance(double balance);
void deposit(double *balance);
void withdraw(double *balance);

int main(void) {
    double accountBalance = 1000.00; // Starting initial balance
    int choice = 0;

    printf("=========================================\n");
    printf("     WELCOME TO APEX BANK ATM SYSTEM     \n");
    printf("=========================================\n");

    do {
        displayMenu();
        printf("Enter your choice (1-4): ");
        if (scanf("%d", &choice) != 1) {
            printf("Error: Invalid numeric input! Exiting program.\n");
            break;
        }

        switch (choice) {
            case 1:
                checkBalance(accountBalance);
                break;
            case 2:
                deposit(&accountBalance); // Pass address to modify balance
                break;
            case 3:
                withdraw(&accountBalance);
                break;
            case 4:
                printf("\nThank you for banking with Apex Bank. Goodbye!\n");
                break;
            default:
                printf("\nError: Invalid choice! Please select an option between 1 and 4.\n");
                break;
        }
    } while (choice != 4);

    return 0;
}

void displayMenu(void) {
    printf("\n---------------- MENU ----------------\n");
    printf("1. Check Account Balance\n");
    printf("2. Deposit Money\n");
    printf("3. Withdraw Money\n");
    printf("4. Exit\n");
    printf("--------------------------------------\n");
}

void checkBalance(double balance) {
    printf("\n[BALANCE ENQUIRY] Current Balance: $%.2lf\n", balance);
}

void deposit(double *balance) {
    double amount = 0.0;
    printf("\nEnter deposit amount ($): ");
    if (scanf("%lf", &amount) == 1 && amount > 0) {
        *balance += amount;
        printf("Success: $%.2lf deposited. New Balance: $%.2lf\n", amount, *balance);
    } else {
        printf("Error: Invalid deposit amount!\n");
    }
}

void withdraw(double *balance) {
    double amount = 0.0;
    printf("\nEnter withdrawal amount ($): ");
    if (scanf("%lf", &amount) == 1 && amount > 0) {
        if (amount <= *balance) {
            *balance -= amount;
            printf("Success: $%.2lf withdrawn. Remaining Balance: $%.2lf\n", amount, *balance);
        } else {
            printf("Error: Insufficient funds! Current Balance is $%.2lf\n", *balance);
        }
    } else {
        printf("Error: Invalid withdrawal amount!\n");
    }
}
```

---

## 🟡 PROJECT 2 (Intermediate): Student Record Management System

### 🎯 Goal
Build a structured Student Management System that manages student records using arrays of structures, calculates grade point averages (GPA), sorts students by GPA, and searches for students by ID.

### 🧠 Concepts Used
- Structures & `typedef` (`struct Student`)
- Arrays of Structs
- Functions & Pointers
- Sorting & Searching Algorithms (Bubble Sort, Linear Search)
- String Manipulation (`fgets`, `strcspn`)

### 📝 Requirements
1. Define a `Student` struct with fields: `id` (`int`), `name` (`char[40]`), `gpa` (`float`).
2. Implement functions to Add Student, Display All Students, Search Student by ID, and Sort Students by GPA descending.
3. Validate student inputs.

### 💡 Complete Code Solution

```c
#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 50

typedef struct {
    int id;
    char name[40];
    float gpa;
} Student;

// Function Prototypes
void addStudent(Student database[], int *count);
void displayAll(const Student database[], int count);
void searchStudent(const Student database[], int count, int searchId);
void sortByGPA(Student database[], int count);

int main(void) {
    Student database[MAX_STUDENTS];
    int count = 0;
    int choice = 0;

    do {
        printf("\n=== STUDENT RECORD MANAGEMENT SYSTEM ===\n");
        printf("1. Add New Student\n");
        printf("2. Display All Students\n");
        printf("3. Search Student by ID\n");
        printf("4. Sort Students by GPA (Descending)\n");
        printf("5. Exit\n");
        printf("Choose option: ");

        if (scanf("%d", &choice) != 1) break;
        while (getchar() != '\n'); // Clear input buffer

        switch (choice) {
            case 1:
                addStudent(database, &count);
                break;
            case 2:
                displayAll(database, count);
                break;
            case 3: {
                int searchId;
                printf("Enter Student ID to search: ");
                scanf("%d", &searchId);
                searchStudent(database, count, searchId);
                break;
            }
            case 4:
                sortByGPA(database, count);
                printf("Database sorted successfully by GPA!\n");
                displayAll(database, count);
                break;
            case 5:
                printf("Exiting Student Record System.\n");
                break;
            default:
                printf("Invalid choice!\n");
                break;
        }
    } while (choice != 5);

    return 0;
}

void addStudent(Student database[], int *count) {
    if (*count >= MAX_STUDENTS) {
        printf("Error: Database capacity reached (%d students max)!\n", MAX_STUDENTS);
        return;
    }

    Student s;
    printf("\nEnter Student ID: ");
    scanf("%d", &s.id);
    while (getchar() != '\n'); // Clear newline

    printf("Enter Student Full Name: ");
    if (fgets(s.name, sizeof(s.name), stdin) != NULL) {
        s.name[strcspn(s.name, "\n")] = '\0'; // Strip newline
    }

    printf("Enter Student GPA (0.0 - 4.0): ");
    scanf("%f", &s.gpa);

    database[*count] = s;
    (*count)++;
    printf("Success: Student '%s' added successfully!\n", s.name);
}

void displayAll(const Student database[], int count) {
    if (count == 0) {
        printf("\nNo student records found in database.\n");
        return;
    }

    printf("\n%-10s | %-25s | %-8s\n", "ID", "Name", "GPA");
    printf("--------------------------------------------------\n");
    for (int i = 0; i < count; i++) {
        printf("%-10d | %-25s | %-8.2f\n", database[i].id, database[i].name, database[i].gpa);
    }
}

void searchStudent(const Student database[], int count, int searchId) {
    for (int i = 0; i < count; i++) {
        if (database[i].id == searchId) {
            printf("\nStudent Found: ID #%d | Name: %s | GPA: %.2f\n",
                   database[i].id, database[i].name, database[i].gpa);
            return;
        }
    }
    printf("\nStudent with ID #%d not found.\n", searchId);
}

void sortByGPA(Student database[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (database[j].gpa < database[j + 1].gpa) { // Descending
                Student temp = database[j];
                database[j] = database[j + 1];
                database[j + 1] = temp;
            }
        }
    }
}
```

---

## 🔴 PROJECT 3 (Advanced): Persistent Binary File Database Engine with Dynamic Heap Resizing

### 🎯 Goal
Build a high-performance **Persistent Binary File Database Engine** in C that dynamically allocates memory on the Heap (`malloc`/`realloc`), resizes capacity automatically when full, serializes struct data directly to disk as binary files (`fwrite`/`fread`), and restores database state seamlessly across application restarts.

### 🧠 Concepts Used
- Dynamic Memory Allocation (`malloc`, `realloc`, `free`)
- Binary File Persistence (`fopen`, `fwrite`, `fread`, `fclose`)
- Pointers & Structs (`typedef struct`, arrow `->` operator)
- Error Handling (`errno`, `perror`)
- Defensive Heap Guardrails (checking `NULL`, safe `realloc` temp pointer pattern)

### 📝 Requirements
1. Store records in a dynamic array allocated on the Heap.
2. Automatically expand Heap memory capacity using `realloc` when database limit is reached.
3. Automatically load existing records from binary file `students.bin` at program startup.
4. Automatically save records to `students.bin` upon user command or application exit.
5. Safely deallocate Heap memory (`free`) without memory leaks.

### 💡 Complete Code Solution

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>

#define DB_FILE "students.bin"

typedef struct {
    int id;
    char name[40];
    double gpa;
} StudentRecord;

typedef struct {
    StudentRecord *records; // Dynamic array pointer on Heap
    int count;             // Number of active records
    int capacity;          // Current allocated capacity
} Database;

// Function Prototypes
Database* initDatabase(int initialCapacity);
void freeDatabase(Database *db);
int addRecord(Database *db, int id, const char *name, double gpa);
void listRecords(const Database *db);
int saveToDisk(const Database *db, const char *filename);
int loadFromDisk(Database *db, const char *filename);

int main(void) {
    printf("=====================================================\n");
    printf("   PERSISTENT BINARY FILE DATABASE ENGINE (ISO C11)  \n");
    printf("=====================================================\n");

    // 1. Initialize Heap Memory Database
    Database *db = initDatabase(2); // Start with small capacity = 2 to test dynamic expansion
    if (db == NULL) {
        fprintf(stderr, "Fatal: Failed to initialize database!\n");
        return 1;
    }

    // 2. Load Existing Binary Records from Disk if file exists
    printf("\nAttempting to load existing binary records from '%s'...\n", DB_FILE);
    if (loadFromDisk(db, DB_FILE)) {
        printf("Database restored successfully from disk! Loaded %d record(s).\n", db->count);
    } else {
        printf("No existing database file found. Starting fresh database.\n");
    }

    // Display loaded state
    listRecords(db);

    // 3. Adding New Records (Triggers dynamic realloc expansion!)
    printf("\nAdding new records to database...\n");
    addRecord(db, 101, "Priya Sharma", 3.92);
    addRecord(db, 102, "Rohan Gupta", 3.75);
    addRecord(db, 103, "Ananya Verma", 3.88); // Triggers realloc expansion beyond initial capacity = 2

    // Display updated state
    listRecords(db);

    // 4. Persisting Updated State to Disk
    printf("\nPersisting database to binary file '%s'...\n", DB_FILE);
    if (saveToDisk(db, DB_FILE)) {
        printf("Database successfully saved to disk!\n");
    } else {
        fprintf(stderr, "Error: Failed to save database to disk!\n");
    }

    // 5. Clean Heap Memory Deallocation
    freeDatabase(db);
    printf("\nDatabase memory cleaned up cleanly. Program terminated normally.\n");

    return 0;
}

// --- DATABASE ENGINE FUNCTION DEFINITIONS ---

Database* initDatabase(int initialCapacity) {
    Database *db = malloc(sizeof *db);
    if (db == NULL) return NULL;

    db->capacity = (initialCapacity > 0) ? initialCapacity : 4;
    db->count = 0;
    
    // Allocate Heap array for records
    db->records = malloc((size_t)db->capacity * sizeof *(db->records));
    if (db->records == NULL) {
        free(db);
        return NULL;
    }

    return db;
}

void freeDatabase(Database *db) {
    if (db != NULL) {
        if (db->records != NULL) {
            free(db->records);
            db->records = NULL;
        }
        free(db);
    }
}

int addRecord(Database *db, int id, const char *name, double gpa) {
    if (db == NULL || db->records == NULL) return 0;

    // Check if dynamic array capacity expansion is needed
    if (db->count >= db->capacity) {
        int newCapacity = db->capacity * 2; // Double capacity
        
        // SAFE REALLOC PATTERN with temporary pointer
        StudentRecord *temp = realloc(db->records, (size_t)newCapacity * sizeof *temp);
        if (temp == NULL) {
            perror("Reallocation failure");
            return 0; // Addition failed, original memory preserved
        }
        
        db->records = temp;
        db->capacity = newCapacity;
        printf("[ENGINE] Heap capacity expanded dynamically to %d slots.\n", newCapacity);
    }

    // Populate new record
    StudentRecord *rec = &db->records[db->count];
    rec->id = id;
    strncpy(rec->name, name, sizeof(rec->name) - 1);
    rec->name[sizeof(rec->name) - 1] = '\0';
    rec->gpa = gpa;

    db->count++;
    return 1; // Record added successfully
}

void listRecords(const Database *db) {
    if (db == NULL || db->count == 0) {
        printf("\n[DATABASE EMPTY] No records to display.\n");
        return;
    }

    printf("\n---------------- DATABASE RECORDS (%d / %d slots) ----------------\n", db->count, db->capacity);
    printf("%-8s | %-25s | %-6s\n", "ID", "Name", "GPA");
    printf("------------------------------------------------------------------\n");
    for (int i = 0; i < db->count; i++) {
        printf("%-8d | %-25s | %-6.2lf\n", db->records[i].id, db->records[i].name, db->records[i].gpa);
    }
    printf("------------------------------------------------------------------\n");
}

int saveToDisk(const Database *db, const char *filename) {
    if (db == NULL || filename == NULL) return 0;

    FILE *fp = fopen(filename, "wb"); // Binary write mode
    if (fp == NULL) {
        perror("Save to disk failed");
        return 0;
    }

    // Write record count first
    if (fwrite(&db->count, sizeof(int), 1, fp) != 1) {
        fclose(fp);
        return 0;
    }

    // Write all record structures in single contiguous binary block
    if (db->count > 0) {
        size_t written = fwrite(db->records, sizeof(StudentRecord), (size_t)db->count, fp);
        if (written != (size_t)db->count) {
            fclose(fp);
            return 0;
        }
    }

    fclose(fp);
    return 1; // Success
}

int loadFromDisk(Database *db, const char *filename) {
    if (db == NULL || filename == NULL) return 0;

    FILE *fp = fopen(filename, "rb"); // Binary read mode
    if (fp == NULL) return 0; // File does not exist yet

    int recordCount = 0;
    if (fread(&recordCount, sizeof(int), 1, fp) != 1 || recordCount <= 0) {
        fclose(fp);
        return 0;
    }

    // Ensure database capacity can hold loaded records
    if (recordCount > db->capacity) {
        StudentRecord *temp = realloc(db->records, (size_t)recordCount * sizeof *temp);
        if (temp == NULL) {
            fclose(fp);
            return 0;
        }
        db->records = temp;
        db->capacity = recordCount;
    }

    // Read binary records directly into Heap array
    size_t readCount = fread(db->records, sizeof(StudentRecord), (size_t)recordCount, fp);
    fclose(fp);

    if (readCount == (size_t)recordCount) {
        db->count = recordCount;
        return 1; // Load success
    }

    return 0;
}
```

## 🔍 Code Breakdown

- `Database* initDatabase(...)`: Allocates both the outer `Database` handle structure and the inner `StudentRecord` dynamic array on the Heap using `malloc`.
- `addRecord(...)`: Detects when `db->count >= db->capacity`, dynamically doubles the allocation capacity using safe `realloc`, and assigns the expanded memory back to `db->records`.
- `saveToDisk(...)` & `loadFromDisk(...)`: Serializes the entire dynamic array of structs directly to a binary file `students.bin` on disk using contiguous `fwrite` and `fread` operations.
- `freeDatabase(...)`: Explicitly deallocates inner array memory `free(db->records)` first, then deallocates outer structure `free(db)`.

## 👀 Output

```text
=====================================================
   PERSISTENT BINARY FILE DATABASE ENGINE (ISO C11)  
=====================================================

Attempting to load existing binary records from 'students.bin'...
No existing database file found. Starting fresh database.

[DATABASE EMPTY] No records to display.

Adding new records to database...
[ENGINE] Heap capacity expanded dynamically to 4 slots.

---------------- DATABASE RECORDS (3 / 4 slots) ----------------
ID       | Name                      | GPA   
------------------------------------------------------------------
101      | Priya Sharma              | 3.92  
102      | Rohan Gupta               | 3.75  
103      | Ananya Verma              | 3.88  
------------------------------------------------------------------

Persisting database to binary file 'students.bin'...
Database successfully saved to disk!

Database memory cleaned up cleanly. Program terminated normally.
```

## 🧪 Try It Yourself

1. Compile and run Project 3 once. Notice that 3 records are saved to `students.bin`.
2. Run Project 3 a second time. Notice that it restores the 3 existing records from `students.bin` at startup before adding new records!

## 🎯 Mini Challenge

Extend Project 3 by adding a `deleteRecord(Database *db, int id)` function that searches for a student by ID, removes their record by shifting adjacent elements left, decreases `db->count`, and persists the updated records to disk.

## 🔗 Related Topics

- [Dynamic Memory Allocation](13-dynamic-memory-allocation.md)
- [Structures](14-structures.md)
- [File Handling](17-file-handling.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md)
