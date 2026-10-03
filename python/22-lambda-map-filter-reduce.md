# Lambda, Map, Filter, and Reduce

## Definition

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.

## Hindi Explanation

map transform, filter select, reduce combine karta hai; loops aksar clear hote hain.

## Marathi Explanation

map rupantar, filter nivad, reduce ekatra karte; loops anekda spashta astat.

## Hinglish Explanation

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

map transform, filter select, reduce combine karta hai; loops aksar clear hote hain.

## Syntax

```python
from functools import reduce
nums=[1,2,3,4]
print(list(map(lambda n:n*2,nums))); print(list(filter(lambda n:n%2==0,nums))); print(reduce(lambda a,b:a+b,nums,0))
```

## Example

```python
from functools import reduce
nums=[1,2,3,4]
print(list(map(lambda n:n*2,nums))); print(list(filter(lambda n:n%2==0,nums))); print(reduce(lambda a,b:a+b,nums,0))
```

## Code Breakdown

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
[2,4,6]; [2,4]; 10
```

## Another Practical Example

Compare a for loop, comprehension, map, and filter for price conversion.

## Common Mistakes

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.. Inputs aur boundary cases check karein.

## Important Notes

lambda/map/filter/functools.reduce, loop equivalents, readability; not always better than loops.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Use reduce with an initial value and compare with sum.

## Mini Challenge

Choose the clearest approach for filtering and transforming student scores.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 21 Decorators](21-decorators.md)  
[Home](00-README.md)  
[Next: 23 Regular Expressions](23-regular-expressions.md)
