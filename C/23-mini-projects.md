# Comprehensive C Mini Projects

> 🔴 Advanced

Apply dynamic memory allocation, file I/O, structs, CLI arguments, and error handling to build complete C software.

---

## 🏗️ Project 1: Dynamic Student Database with File Persistence

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;

void saveDatabase(Student *db, int count) {
    FILE *fp = fopen("students.bin", "wb");
    if (!fp) return;
    fwrite(&count, sizeof(int), 1, fp);
    fwrite(db, sizeof(Student), count, fp);
    fclose(fp);
    printf("Saved %d records to disk.\n", count);
}

int main() {
    int capacity = 2;
    int count = 0;
    Student *db = (Student*) malloc(capacity * sizeof(Student));

    // Add Student 1
    db[count].id = 1;
    strcpy(db[count].name, "Alice");
    db[count].gpa = 3.9f;
    count++;

    // Add Student 2
    db[count].id = 2;
    strcpy(db[count].name, "Bob");
    db[count].gpa = 3.7f;
    count++;

    saveDatabase(db, count);

    free(db);
    return 0;
}
```

---

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md)
