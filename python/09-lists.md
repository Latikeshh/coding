---
layout: default
title: "09 lists"
---

# Lists

## Definition

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.

## Hindi Explanation

List mutable hai; b=a same list hai, copy() alag outer list deta hai.

## Marathi Explanation

List mutable aahe; b=a ti same list, copy() vegli baherchi list dete.

## Hinglish Explanation

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

List mutable hai; b=a same list hai, copy() alag outer list deta hai.

## Syntax

```python
a=[1,2,3]; b=a; c=a.copy(); b.append(4); print(a,c)
```

## Example

```python
a=[1,2,3]; b=a; c=a.copy(); b.append(4); print(a,c)
```

## Code Breakdown

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
[1, 2, 3, 4] [1, 2, 3]
```

## Another Practical Example

Store expenses, add one, remove a mistaken value, and calculate the sum.

## Common Mistakes

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.. Inputs aur boundary cases check karein.

## Important Notes

Create, indexing, negative indexing, slicing, update, iterate, nested; append extend insert remove pop clear index count sort reverse; mutable and copies.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Demonstrate negative indexing, slicing, extend, sort, and pop.

## Mini Challenge

Show aliasing with b=a, then compare with a shallow copy.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

### Aliasing and Copying

`b = a` binds a second name to the same list, so changes through either name are visible through both. `b = a.copy()` makes a shallow copy of the outer list. Nested mutable values are still shared; use `copy.deepcopy(a)` only when a recursive independent copy is needed.
## Navigation

[Previous: 08 Functions](08-functions.md)  
[Home](00-README.md)  
[Next: 10 Tuples](10-tuples.md)

