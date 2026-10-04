---
layout: default
title: "11 collections"
---

# Collections: Lists, Sets, and Maps

## Definition

The Collections Framework provides reusable data structures. Common interfaces include `List`, `Set`, and `Map`.

## Hindi Explanation

Collections multiple values manage karne ke ready-made structures hain. List order rakhti hai, Set unique values rakhta hai, aur Map key se value dhoondhta hai.

## Marathi Explanation

Collections anek values hatalnyasathi tayar rachana detat. List kram thevte, Set unique values thevto ani Map key madhun value shodhto.

## Hinglish Explanation

Need ke hisaab se structure chuno: ordered items ke liye List, uniqueness ke liye Set, key-based lookup ke liye Map.

## Why Use It?

Collections can grow dynamically and provide operations beyond fixed-length arrays.

## Syntax and Example

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

List<String> tasks = new ArrayList<>();
tasks.add("Study");
tasks.add("Walk");
tasks.remove("Walk");
System.out.println(tasks.get(0));

Set<String> tags = new HashSet<>(List.of("java", "study", "java"));
Map<String, Integer> marks = new HashMap<>();
marks.put("Asha", 91);
System.out.println(marks.get("Asha"));
```

## Output

```text
Study
91
```

## Code Breakdown

`List` preserves positional order and allows duplicates. `Set` contains unique elements; `HashSet` does not promise iteration order. `Map` stores unique keys mapped to values; `HashMap` does not promise iteration order. Generics, such as `<String>`, describe element types and prevent many invalid insertions.

## Another Practical Example

```java
Map<String, Integer> inventory = new HashMap<>();
inventory.put("Notebook", 12);
inventory.merge("Notebook", -2, Integer::sum);
System.out.println(inventory.getOrDefault("Notebook", 0));
```

## Common Mistakes

- Using `list.length` instead of `list.size()`.
- Assuming a `HashSet` or `HashMap` has a stable display order.
- Modifying a collection structurally during an enhanced `for` loop.
- Using a mutable object as a hash key and then changing its equality-relevant fields.

## Important Notes

`ArrayList` is a common default list. `LinkedHashSet` and `LinkedHashMap` preserve insertion order. Map keys must obey stable `equals` and `hashCode` behavior. `List.copyOf` creates an unmodifiable shallow copy, not a deep copy.

## Real-World Usage

Lists hold search results, sets remove duplicate IDs, and maps index users or inventory by keys.

## Try It Yourself

Track a shopping list, a set of unique product categories, and a map of product names to quantities.

## Mini Challenge

Count how often each word appears in a sentence using a `Map<String, Integer>`.

## Related Topics

[Generics](13-generics.md) · [Strings](10-strings.md) · [Files](20-file-input-and-output.md)

## Navigation

[Previous: Strings](10-strings.md) | [Home](00-README.md) | [Next: Enums and Records](12-enums-and-records.md)

