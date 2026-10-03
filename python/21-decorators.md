# Decorators

## Definition

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.

## Hindi Explanation

Decorator function ke around behavior jodta hai; wraps metadata bachata hai.

## Marathi Explanation

Decorator function bhovati behavior jodto; wraps metadata japto.

## Hinglish Explanation

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

Decorator function ke around behavior jodta hai; wraps metadata bachata hai.

## Syntax

```python
from functools import wraps
def deco(fn):
    @wraps(fn)
    def wrapper(*a,**k): return fn(*a,**k)
    return wrapper
```

## Example

```python
from functools import wraps
def deco(fn):
    @wraps(fn)
    def wrapper(*a,**k): return fn(*a,**k)
    return wrapper
```

## Code Breakdown

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
Wrapped function result
```

## Another Practical Example

Create a decorator that counts calls and preserves function metadata.

## Common Mistakes

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.. Inputs aur boundary cases check karein.

## Important Notes

Functions as objects, higher-order/wrapper functions, @ syntax, functools.wraps, practical use.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Add a simple timing or logging wrapper around a function.

## Mini Challenge

Make sure the wrapper forwards arguments and returns the wrapped value.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 20 Iterators and Generators](20-iterators-and-generators.md)  
[Home](00-README.md)  
[Next: 22 Lambda, Map, Filter, and Reduce](22-lambda-map-filter-reduce.md)
