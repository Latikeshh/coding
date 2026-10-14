---
layout: default
title: "Collections"
---

# Java Collections Framework (List, Set, Map & Queue)

> 🟡 Intermediate

## 📖 Definition

The **Java Collections Framework (JCF)** provides a unified architecture for storing, organizing, and manipulating groups of objects. It includes core interfaces (`List`, `Set`, `Map`, `Queue`, `Deque`) and high-performance implementation classes (`ArrayList`, `LinkedList`, `HashSet`, `TreeSet`, `HashMap`, `TreeMap`).

## 🇮🇳 Hindi

Java Collections Framework dynamic data management ke liye ready-made data structures provide karta hai. `List` ordered items duplicate allow karta hai, `Set` unique items store karta hai, `Map` key-value pairs store karta hai, aur `Queue` processing order (FIFO/LIFO) manage karta hai.

## 🚩 Marathi

Collections Framework dynamic data saathi data structures deto. `List` kramawar data, `Set` unique items, aani `Map` key-value pairs sathavto.

## 📝 1. Collections Framework Hierarchy

```text
               +--------------------+

               | Collection (I)     |
               +---------+----------+

                         |
      +------------------+------------------+

      |                  |                  |
+-----+------+    +------+-----+    +-------+----+

|  List (I)  |    |   Set (I)  |    | Queue (I)  |
+-----+------+    +------+-----+    +-------+----+

      |                  |                  |
  ArrayList          HashSet            ArrayDeque
  LinkedList         LinkedHashSet      LinkedList
                     TreeSet            PriorityQueue

               +--------------------+

               |   Map (Interface)  |
               +---------+----------+

                         |
            +------------+------------+

            |                         |
      +-----+------+            +-----+------+

      | HashMap    |            | TreeMap    |
      +------------+            +------------+
```

## 📝 2. Core Interface Breakdown

### A. `List<E>` (Ordered, Allows Duplicates, Zero-Indexed)
- `ArrayList<E>`: Resizable array. **Fast $O(1)$ random access (`get(i)`)**, slower insertions/deletions in middle ($O(N)$).
- `LinkedList<E>`: Doubly-linked list. **Fast $O(1)$ insertions/deletions**, slower $O(N)$ random access.

### B. `Set<E>` (Unique Elements Only, Discards Duplicates)
- `HashSet<E>`: Fast $O(1)$ lookup via hashing. No guaranteed order.
- `LinkedHashSet<E>`: Maintains **insertion order**.
- `TreeSet<E>`: Self-balancing Red-Black tree. Elements stored in **sorted natural order** ($O(\log N)$).

### C. `Map<K, V>` (Key-Value Pairs, Unique Keys)
- `HashMap<K, V>`: Fast $O(1)$ key lookups using `hashCode()`.
- `LinkedHashMap<K, V>`: Preserves **key insertion order**.
- `TreeMap<K, V>`: Sorted by **keys** in natural/comparator order.

### D. `Queue<E>` & `Deque<E>` (Processing Pipelines)
- `ArrayDeque<E>`: High-performance double-ended queue. Faster than `Stack` and `LinkedList` for LIFO/FIFO stacks and queues.

## 📝 3. Safe Iteration & `removeIf()`

> ⚠️ **CRITICAL WARNING:** Modifying a collection structurally inside an enhanced `for-each` loop throws a `ConcurrentModificationException`! Use `collection.removeIf()` or an `Iterator` instead.

```java
List<Integer> scores = new ArrayList<>(List.of(45, 82, 30, 91, 60));

// Safe removal using removeIf predicate
scores.removeIf(score -> score < 50); // Removes 45 and 30 safely!
```

## 💡 Complete Example: Student Enrollment & Grade Tracker

```java
import java.util.*;

public class CollectionMaster {
    public static void main(String[] args) {
        // 1. List: Maintaining ordered student names
        List<String> studentList = new ArrayList<>();
        studentList.add("Rahul");
        studentList.add("Ananya");
        studentList.add("Rahul"); // Duplicate allowed in List

        System.out.println("Student List (Ordered)  : " + studentList);

        // 2. Set: Deduplicating skills
        Set<String> uniqueSkills = new HashSet<>();
        uniqueSkills.add("Java");
        uniqueSkills.add("SQL");
        uniqueSkills.add("Java"); // Duplicate ignored silently
        uniqueSkills.add("Spring");

        System.out.println("Unique Skills (Set)    : " + uniqueSkills);

        // 3. Map: Indexing Student ID to Grade Result
        Map<Integer, String> gradeMap = new HashMap<>();
        gradeMap.put(101, "A+");
        gradeMap.put(102, "B");
        gradeMap.put(103, "A");

        // Safe retrieval with default fallback
        String student104Grade = gradeMap.getOrDefault(104, "NOT FOUND");

        System.out.println("Grade Map              : " + gradeMap);
        System.out.println("Student 104 Grade      : " + student104Grade);

        // 4. Queue: Managing Support Tickets (FIFO)
        Queue<String> supportQueue = new ArrayDeque<>();
        supportQueue.offer("Ticket #1001");
        supportQueue.offer("Ticket #1002");

        System.out.println("Serving Ticket          : " + supportQueue.poll()); // Removes Ticket #1001
        System.out.println("Remaining Queue         : " + supportQueue);
    }
}
```

## 👀 Output

```text
Student List (Ordered)  : [Rahul, Ananya, Rahul]
Unique Skills (Set)    : [Java, Spring, SQL]
Grade Map              : {101=A+, 102=B, 103=A}
Student 104 Grade      : NOT FOUND
Serving Ticket          : Ticket #1001
Remaining Queue         : [Ticket #1002]
```

## ⚠️ Common Mistakes

- Using `list.length` or `map.length` instead of `.size()`.
- Expecting `HashSet` or `HashMap` to maintain predictable element iteration order (use `LinkedHashSet`/`LinkedHashMap` if order matters!).
- Using mutable objects with changing `equals()`/`hashCode()` properties as `HashMap` keys.

## 🛡️ Safety / Important Notes

Always override **both** `equals()` and `hashCode()` when using custom class objects inside `HashSet` or as `HashMap` keys!

## 🌍 Real-World Usage

E-commerce shopping carts (`List`), unique tag filtering (`Set`), user session/cache stores (`Map`), message queues (`Queue`), and database ORM result sets.

## 🧪 Try It Yourself

1. Create a `List<String>` of 5 grocery items and sort them alphabetically using `Collections.sort()`.
2. Deduplicate a list of numbers containing duplicates by passing it into a `HashSet`.

## 🎯 Mini Challenge

Write a program that takes a text sentence string and uses a `Map<String, Integer>` to compute the frequency count of each unique word in the sentence.

## 🔗 Related Topics

- [Arrays](09-arrays.html)
- [Generics](13-generics.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Strings](10-strings.html) | [Next: Enums and Records →](12-enums-and-records.html)

