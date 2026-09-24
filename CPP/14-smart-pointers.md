# Smart Pointers (`std::unique_ptr`, `std::shared_ptr`)

> 🔴 Advanced

## 📖 Definition

Smart Pointers in `<memory>` implement RAII for dynamic heap memory. They manage object destruction automatically, eliminating manual `delete` statements and preventing memory leaks.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Smart pointers (`unique_ptr`, `shared_ptr`) manage heap memory automatically. They destroy allocated objects when scope ends.
> - **Hindi:** स्मार्ट पॉइंटर्स (`unique_ptr`, `shared_ptr`) हीप मेमोरी को ऑटोमेटिक फ्री करते हैं, जिससे `delete` लिखने की जरूरत नहीं पड़ती।
> - **Marathi:** स्मार्ट पॉइंटर्समुळे मेमरी आपोआप फ्री होते आणि `delete` लिहायची गरज पडत नाही.
> - **Hinglish:** Smart Pointers (`unique_ptr`, `shared_ptr`) auto memory management karte hain. Manual `delete` calls ki zaroorat nahi rehti.

---

## 📝 Types of Smart Pointers

1. **`std::unique_ptr<T>`:** Single/Exclusive ownership model. Cannot be copied, only moved (`std::move`).
2. **`std::shared_ptr<T>`:** Shared ownership model using reference counting. Deletes object when last reference goes out of scope.
3. **`std::weak_ptr<T>`:** Non-owning reference to `shared_ptr` to break circular reference memory leaks.

```cpp
#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource acquired" << endl; }
    ~Resource() { cout << "Resource auto-destroyed" << endl; }
    void doWork() { cout << "Working..." << endl; }
};

int main() {
    // 1. std::unique_ptr usage (Exclusive ownership)
    {
        unique_ptr<Resource> res1 = make_unique<Resource>();
        res1->doWork();
    } // res1 destroyed and freed here automatically!

    cout << "--- Shared Pointer Demo ---" << endl;

    // 2. std::shared_ptr usage
    shared_ptr<Resource> sp1 = make_shared<Resource>();
    cout << "Reference count: " << sp1.use_count() << endl; // 1
    {
        shared_ptr<Resource> sp2 = sp1; // Shared ownership
        cout << "Count inside inner scope: " << sp1.use_count() << endl; // 2
    }
    cout << "Count outside inner scope: " << sp1.use_count() << endl; // 1

    return 0; // sp1 destroyed and freed here automatically!
}
```

---

## 👀 Output

```text
Resource acquired
Working...
Resource auto-destroyed
--- Shared Pointer Demo ---
Resource acquired
Reference count: 1
Count inside inner scope: 2
Count outside inner scope: 1
Resource auto-destroyed
```

---

## 🧪 Try It Yourself

Create a `unique_ptr<int>` initialized with `make_unique<int>(100)` and print its dereferenced value.

## 🎯 Mini Challenge

Demonstrate moving a `unique_ptr` from one variable to another using `std::move()`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Operator Overloading](13-operator-overloading.md) | [Next: STL Containers →](15-stl-containers.md)
