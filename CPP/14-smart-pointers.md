# Smart Pointers (`std::unique_ptr`, `std::shared_ptr`)

> 🔴 Advanced

## 📖 Definition

Smart Pointers in `<memory>` manage dynamically allocated heap memory automatically, eliminating manual `delete` calls and preventing memory leaks.

---

## 📝 Types of Smart Pointers

1. **`std::unique_ptr<T>`:** Exclusive ownership model (cannot be copied, only moved). Automatically deletes object when `unique_ptr` goes out of scope.
2. **`std::shared_ptr<T>`:** Shared ownership model (uses reference counting; object is deleted when last `shared_ptr` is destroyed).
3. **`std::weak_ptr<T>`:** Non-owning reference to an object managed by `shared_ptr` (prevents circular dependency memory leaks).

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource acquired" << endl; }
    ~Resource() { cout << "Resource destroyed automatically" << endl; }
    void doWork() { cout << "Resource in use" << endl; }
};

int main() {
    // 1. std::unique_ptr usage (Preferred for single ownership)
    {
        unique_ptr<Resource> res1 = make_unique<Resource>();
        res1->doWork();
        // res1 destructor automatically cleans up memory here!
    }

    cout << "--- Shared Pointer Demo ---" << endl;

    // 2. std::shared_ptr usage
    shared_ptr<Resource> sp1 = make_shared<Resource>();
    cout << "Use count: " << sp1.use_count() << endl; // 1
    {
        shared_ptr<Resource> sp2 = sp1; // Shared ownership
        cout << "Use count inside scope: " << sp1.use_count() << endl; // 2
    }
    cout << "Use count outside scope: " << sp1.use_count() << endl; // 1

    return 0;
}
```

---

## 👀 Output

```text
Resource acquired
Resource in use
Resource destroyed automatically
--- Shared Pointer Demo ---
Resource acquired
Use count: 1
Use count inside scope: 2
Use count outside scope: 1
Resource destroyed automatically
```

---

## 🧪 Try It Yourself

Create a `unique_ptr<int>` initialized with `make_unique<int>(100)` and print its value.

## 🎯 Mini Challenge

Demonstrate moving a `unique_ptr` from one variable to another using `std::move()`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Operator Overloading](13-operator-overloading.md) | [Next: STL Containers →](15-stl-containers.md)
