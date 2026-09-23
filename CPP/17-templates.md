# Generic Programming & Templates

> 🔴 Advanced

## 📖 Definition

**Templates** enable generic programming in C++, allowing functions and classes to operate on any data type without duplicating code.

---

## 1. Function Templates

```cpp
#include <iostream>
#include <string>
using namespace std;

// Template function accepting generic type T
template <typename T>
T getMaximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << "Max Int: " << getMaximum(10, 25) << endl;         // T inferred as int
    cout << "Max Double: " << getMaximum(3.14, 2.71) << endl;   // T inferred as double
    cout << "Max String: " << getMaximum<string>("Apple", "Zebra") << endl; // Explicit T
    return 0;
}
```

---

## 2. Class Templates

```cpp
#include <iostream>
using namespace std;

template <typename T, int SIZE>
class FixedArray {
private:
    T arr[SIZE];

public:
    void set(int index, T value) {
        if (index >= 0 && index < SIZE) arr[index] = value;
    }

    T get(int index) const {
        return arr[index];
    }
};

int main() {
    FixedArray<int, 5> intArray;
    intArray.set(0, 100);

    FixedArray<string, 3> strArray;
    strArray.set(0, "C++ Templates");

    cout << intArray.get(0) << " | " << strArray.get(0) << endl;
    return 0;
}
```

---

## 🧪 Try It Yourself

Write a function template `void swapValues(T &a, T &b)` that swaps two variables of any type.

## 🎯 Mini Challenge

Create a template class `Pair<T1, T2>` that holds two elements of different types with `getFirst()` and `getSecond()` methods.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: STL Algorithms](16-stl-algorithms.md) | [Next: Lambdas →](18-lambdas.md)
