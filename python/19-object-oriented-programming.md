# Object-Oriented Programming

## Definition

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.

## Hindi Explanation

Class object ka design hai; instance apni state rakhta hai.

## Marathi Explanation

Class object cha aakar aahe; instance swatachi state thevto.

## Hinglish Explanation

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

Class object ka design hai; instance apni state rakhta hai.

## Syntax

```python
class BankAccount:
    def __init__(self,owner,balance=0): self.owner,self.balance=owner,balance
    def deposit(self,amount): self.balance += amount
```

## Example

```python
class BankAccount:
    def __init__(self,owner,balance=0): self.owner,self.balance=owner,balance
    def deposit(self,amount): self.balance += amount
```

## Code Breakdown

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
Account balance changes
```

## Another Practical Example

Extend BankAccount with deposit, withdraw, and transaction history.

## Common Mistakes

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.. Inputs aur boundary cases check karein.

## Important Notes

Classes, objects, attributes, methods, __init__, self, class/instance attrs, class/static/instance methods, encapsulation, inheritance, polymorphism, composition.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Create two accounts and ensure instance balances remain independent.

## Mini Challenge

Use composition to attach a statement/history object.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 18 Exception Handling](18-exception-handling.md)  
[Home](00-README.md)  
[Next: 20 Iterators and Generators](20-iterators-and-generators.md)
