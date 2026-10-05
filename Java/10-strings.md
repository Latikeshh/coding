---
layout: default
title: "Strings"
---

# Strings in Java

> 🟡 Intermediate

## 📖 Definition

A **`String`** in Java is an immutable reference object that represents a sequence of UTF-16 code units (characters). Because String objects are **immutable**, any operation that appears to modify a String actually creates a brand-new String object in memory.

## 🇮🇳 Hindi

Java mein `String` **Immutable** (non-changeable) hota hai. String operations (jaise `.toUpperCase()` ya `.replace()`) purani string ko change karne ke bajaye nayi String return karte hain. Strings compare karne ke liye `==` ke bajaye hamesha `.equals()` ka use karein.

## 🚩 Marathi

Java madhye `String` **Immutable** aste. String operations navin String object tayar kartat. Values compare karnyasathi `==` na vaparta `.equals()` vapara.

## 🧠 String Constant Pool (SCP) Mechanics

To optimize memory usage, Java maintains a special area inside heap memory called the **String Constant Pool (SCP)**.

- When you declare a string literal `String s1 = "Java";`, Java checks if `"Java"` exists in the SCP. If yes, it reuses the existing reference!
- When you use `new String("Java")`, Java explicitly creates a brand-new object in general Heap memory outside the SCP!

```java
String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

System.out.println(s1 == s2); // true  (Points to same SCP memory location!)
System.out.println(s1 == s3); // false (s3 is a separate object in Heap!)
System.out.println(s1.equals(s3)); // true (Compares actual character content!)
```

```text
HEAP MEMORY
+--------------------------------------------+
|  s3 -------> [ Object: "Java" ]            |
|                                            |
|  STRING CONSTANT POOL (SCP)                |
|  s1 -------> [ "Java" ] <------- s2        |
+--------------------------------------------+
```

## 📝 Essential `String` Methods

| Method | What It Does |
|---|---|
| `.length()` | Returns number of characters |
| `.charAt(index)` | Returns character at specific zero-based index |
| `.substring(begin, end)` | Returns extracted portion (end index excluded) |
| `.equals(other)` | Compares character content for exact equality |
| `.equalsIgnoreCase(other)`| Compares content ignoring uppercase/lowercase |
| `.contains(seq)` | Checks if string contains substring (`true`/`false`) |
| `.startsWith(prefix)` / `.endsWith(suffix)` | Checks prefix or suffix |
| `.replace(old, new)` | Replaces character or sequence |
| `.strip()` / `.trim()` | Removes leading and trailing whitespace |
| `.split(regex)` | Splits string into array by delimiter |
| `String.join(delim, arr)`| Joins array elements into single string |

## 📝 `String` vs `StringBuilder` vs `StringBuffer`

| Feature | `String` | `StringBuilder` | `StringBuffer` |
|---|---|---|---|
| Mutability | ❌ Immutable | ✅ Mutable | ✅ Immutable/Mutable |
| Thread Safety | ✅ Thread-safe | ❌ Not Thread-safe | ✅ Thread-safe (`synchronized`) |
| Performance | Slower for loops | 🚀 Fastest | Moderate |

```java
// Fast string manipulation inside heavy loops
StringBuilder sb = new StringBuilder("Hello");
sb.append(" ");
sb.append("World!");
String result = sb.toString(); // "Hello World!"
```

## 📝 Modern Java 15+ Text Blocks (`"""..."""`)

Multi-line strings without ugly string concatenation or `\n` escape characters:

```java
String jsonQuery = """
    {
      "name": "Aarav",
      "role": "Developer",
      "status": "Active"
    }
    """;
```

## 💡 Complete Example: Text Processing & Sanitization

```java
public class TextProcessor {
    public static void main(String[] args) {
        String rawInput = "  user_name: Rahul Verma , role: Developer  ";

        // 1. Cleaning whitespace
        String cleaned = rawInput.strip();

        // 2. Splitting and processing
        String[] attributes = cleaned.split(",");
        StringBuilder formattedSummary = new StringBuilder("User Details:\n");

        for (String attr : attributes) {
            String[] keyVal = attr.split(":");
            if (keyVal.length == 2) {
                String key = keyVal[0].strip().toUpperCase();
                String val = keyVal[1].strip();
                formattedSummary.append(" - ").append(key).append(" -> ").append(val).append("\n");
            }
        }

        System.out.println(formattedSummary.toString());

        // 3. String formatting
        String formattedLine = String.format("Status Code: %d | Message: %s", 200, "SUCCESS");
        System.out.println(formattedLine);
    }
}
```

## 👀 Output

```text
User Details:
 - USER_NAME -> Rahul Verma
 - ROLE -> Developer

Status Code: 200 | Message: SUCCESS
```

## ⚠️ Common Mistakes

- Using `==` instead of `.equals()` to compare String text content.
- Expecting string modification methods to mutate the original string in-place without capturing the returned new string (`str.toUpperCase();` does nothing to `str` unless assigned: `str = str.toUpperCase();`).
- Using String concatenation (`+`) inside large loops instead of `StringBuilder`.

## 🛡️ Safety / Important Notes

Use `.strip()` instead of `.trim()` in modern Java (Java 11+) because `.strip()` is Unicode-aware and correctly removes Unicode whitespace characters.

## 🌍 Real-World Usage

Parsing CSV files, formatting REST API JSON payloads, sanitizing user form inputs, logging application events, and constructing database queries.

## 🧪 Try It Yourself

1. Create string `"  hello java programmer  "`. Clean its whitespace, convert it to uppercase, and check if it contains `"JAVA"`.
2. Extract substring `"java"` from `"hello java programmer"`.

## 🎯 Mini Challenge

Write a program that takes a sentence string and counts the total number of vowels (`a`, `e`, `i`, `o`, `u`) present using a loop and `.charAt()`.

## 🔗 Related Topics

- [Arrays](09-arrays.html)
- [Collections](11-collections.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Arrays](09-arrays.html) | [Next: Collections →](11-collections.html)

