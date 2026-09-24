# STL Algorithms & Iterators

> 🟡 Intermediate

## 📖 Definition

The `<algorithm>` library provides generic functions to sort (`std::sort`), search (`std::binary_search`, `std::find`), and transform data ranges via **Iterators**.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Standard STL algorithms (`std::sort`, `std::find`, `std::accumulate`) work on iterator ranges (`vec.begin()`, `vec.end()`).
> - **Hindi:** STL एल्गोरिथम (`std::sort`, `std::find`) डेटा पर सॉर्टिंग और सर्चिंग करने के लिए इटरेटर रेंजों का उपयोग करते हैं।
> - **Marathi:** डाटा सॉर्ट आणि सर्च करण्यासाठी `<algorithm>` मधील `std::sort` वापरतात.
> - **Hinglish:** `<algorithm>` library se data container sorting (`std::sort(v.begin(), v.end())`) aur searching efficiently hoti hai.

## 📝 Syntax

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {40, 10, 30};
    sort(v.begin(), v.end()); // Sorts ascending: 10, 30, 40
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: STL Containers](15-stl-containers.md) | [Next: Templates →](17-templates.md)
