# Comprehensive C Mini Projects

> 🔴 Advanced

## 📖 Definition

Mini projects combine pointers, dynamic memory allocation, file streams, structs, CLI parsing, and error handling into functional software.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Practice C by building dynamic data structures and persisting binary records to disk storage.
> - **Hindi:** सीखे गए सी कॉन्सेप्ट्स (पॉइंटर्स, `malloc`, `FILE*`) की प्रेक्टिस के लिए बाइनरी स्टूडेंट डेटाबेस बनाएं।
> - **Marathi:** प्रॅक्टिससाठी `malloc` आणि फाईल्स हाताळून बायनरी डाटाबेस प्रोजेक्ट बनवा.
> - **Hinglish:** Real C skills test karne ke liye Heap memory allocation, struct arrays, aur binary disk file persistence combine karke project banao.

## 🏗️ Project: Dynamic Persistent Student Database

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float gpa;
} Student;

void saveToDisk(Student *db, int count) {
    FILE *fp = fopen("students.bin", "wb");
    if (!fp) {
        perror("Disk save failed");
        return;
    }
    fwrite(&count, sizeof(int), 1, fp);
    fwrite(db, sizeof(Student), count, fp);
    fclose(fp);
    printf("Successfully saved %d records.\n", count);
}

int main(void) {
    int count = 0;
    Student *db = (Student*) malloc(2 * sizeof(Student));
    if (!db) return 1;

    db[count].id = 1;
    strcpy(db[count].name, "Alice");
    db[count].gpa = 3.9f;
    count++;

    saveToDisk(db, count);
    free(db);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md)
