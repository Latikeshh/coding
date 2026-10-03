# Advanced Functions

## Definition

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.

## Hindi Explanation

Mutable default calls ke beech reuse hota hai; None se fresh list banayein.

## Marathi Explanation

Mutable default calls madhye reuse hoto; None vaprun navi list banva.

## Hinglish Explanation

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

Mutable default calls ke beech reuse hota hai; None se fresh list banayein.

## Syntax

```python
def add_item(item, items=None):
    if items is None: items=[]
    items.append(item)
    return items
```

## Example

```python
def add_item(item, items=None):
    if items is None: items=[]
    items.append(item)
    return items
```

## Code Breakdown

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
Fresh list for each call
```

## Another Practical Example

Accept any number of scores and return their average; define empty-input behavior.

## Common Mistakes

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.. Inputs aur boundary cases check karein.

## Important Notes

*args/**kwargs, positional-only /, keyword-only *, defaults, LEGB, nested functions, closures, mutable default trap and None fix.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Write a closure that creates a tax calculator for a chosen rate.

## Mini Challenge

Demonstrate why a mutable default leaks state, then fix it with None.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 14 List Comprehensions](14-list-comprehensions.md)  
[Home](00-README.md)  
[Next: 16 Modules and Packages](16-modules-and-packages.md)
