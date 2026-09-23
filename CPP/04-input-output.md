# Input and Output in C++

> 🟢 Beginner

## 📖 Definition

C++ uses streams for input and output operations:
- `std::cout` (Character Output) with `<<` (insertion operator)
- `std::cin` (Character Input) with `>>` (extraction operator)

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your first name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    cout << "Hello, " << name << "! Next year you will be " << (age + 1) << " years old." << endl;

    return 0;
}
```

## 👀 Interactive Example

```text
Enter your first name: Lucas
Enter your age: 19
Hello, Lucas! Next year you will be 20 years old.
```

## 💡 Reading Full Lines of Text (`getline`)

`cin >>` stops reading at space characters. To read full sentences with spaces, use `getline(cin, variable)`:

```cpp
string fullName;
cout << "Enter full name: ";
cin.ignore(); // Clears trailing newline
getline(cin, fullName);
```

## ⚠️ Common Mistakes

- Reversing stream arrows: `cin << var` or `cout >> var` will cause a compilation error.
- Memory: `cin >>` reads up to space; use `getline()` for multi-word strings.

## 🧪 Try It Yourself

Write a C++ program that asks the user for their favorite movie title (using `getline`) and release year, then displays them.

## 🎯 Mini Challenge

Write a program that takes two floating-point numbers from the user and calculates their product and quotient.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators →](05-operators.md)
