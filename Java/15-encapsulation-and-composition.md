---
layout: default
title: "Encapsulation and Composition"
---

# Encapsulation and Composition in Java

> 🟡 Intermediate

## 📖 Definition

- **Encapsulation:** The OOP principle of bundling data fields and methods into a single class while restricting direct external access to internal state using `private` access modifiers and public getter/setter methods.
- **Composition:** Designing complex objects by combining smaller collaborating object instances ("Has-A" relationship), preferred over inheritance ("Is-A" relationship).

## 🇮🇳 Hindi

Encapsulation se data fields ko `private` rakha jata hai aur controlled access ke liye Getters/Setters ya validation methods diye jaate hain. Composition mein ek main object doosre smaller objects ka use karke larger functionality banata hai (**"Has-A" Relationship**).

## 🚩 Marathi

Encapsulation cha wapar data `private` thevun public methods dware validation karnyasathi hoto. Composition madhye ek object dusrya objects cha wapar karto.

## 📝 1. Access Modifiers Matrix

Java provides 4 levels of access control:

| Modifier | Same Class | Same Package | Subclass (Outside Pkg) | World (Anywhere) |
|---|---|---|---|---|
| `private` | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Default (Package-Private) | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| `protected` | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| `public` | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

## 📝 2. Defensive Copying in Getters and Setters

> ⚠️ **CRITICAL SECURITY CONCEPT:** Simply returning a mutable reference (like `List` or `Date`) in a getter breaks encapsulation! Outside code can mutate your internal state directly without calling setters!
>
> **Solution:** Use **Defensive Copying** by returning an unmodifiable view or a new object copy.

```java
public class SecureClass {
    private final List<String> items;

    public SecureClass(List<String> items) {
        // Defensive Copy on Constructor
        this.items = new ArrayList<>(items); 
    }

    // Defensive Getter (Prevents external mutation!)
    public List<String> getItems() {
        return Collections.unmodifiableList(items);
    }
}
```

## 📝 3. Composition ("Has-A") vs Inheritance ("Is-A")

> 💡 **Design Principle:** **"Favor Composition over Inheritance"**
> - Inheritance (`extends`) creates tight coupling between parent and child classes.
> - Composition delegates work to contained component objects, enabling loose coupling and flexible runtime swapping.

```text
INHERITANCE ("Is-A")           COMPOSITION ("Has-A")
+-------------------+          +-------------------+       +-------------------+
| Vehicle           |          | Car               | ----> | Engine            |
+---------+---------+          +-------------------+       +-------------------+
          |                                                | Transmission      |
+---------+---------+                                      +-------------------+
| Car               |
+-------------------+
```

## 💡 Complete Example: E-Commerce Shopping Cart Composition

```java
import java.util.*;

// Component 1: Product Class (Encapsulated)
class Product {
    private final String id;
    private final String name;
    private double price;

    public Product(String id, String name, double price) {
        this.id = id;
        this.name = name;
        setPrice(price); // Using setter for validation
    }

    public String getName() { return name; }
    public double getPrice() { return price; }

    public void setPrice(double price) {
        if (price <= 0) {
            throw new IllegalArgumentException("Price must be greater than zero.");
        }
        this.price = price;
    }
}

// Component 2: CartItem (Composition of Product + Quantity)
class CartItem {
    private final Product product;
    private int quantity;

    public CartItem(Product product, int quantity) {
        this.product = product;
        setQuantity(quantity);
    }

    public Product getProduct() { return product; }
    public int getQuantity() { return quantity; }

    public void setQuantity(int quantity) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be at least 1.");
        }
        this.quantity = quantity;
    }

    public double getItemSubtotal() {
        return product.getPrice() * quantity;
    }
}

// Main Composite Class: ShoppingCart ("Has-A" List of CartItems)
public class ShoppingCart {
    private final List<CartItem> items = new ArrayList<>();

    public void addItem(Product product, int quantity) {
        items.add(new CartItem(product, quantity));
    }

    public double calculateCartTotal() {
        double total = 0.0;
        for (CartItem item : items) {
            total += item.getItemSubtotal();
        }
        return total;
    }

    // Defensive Copy Getter
    public List<CartItem> getItems() {
        return Collections.unmodifiableList(items);
    }

    public static void main(String[] args) {
        Product p1 = new Product("P-101", "Mechanical Keyboard", 4500.00);
        Product p2 = new Product("P-102", "Ergonomic Mouse", 1800.00);

        ShoppingCart cart = new ShoppingCart();
        cart.addItem(p1, 1);
        cart.addItem(p2, 2);

        System.out.println("=== SHOPPING CART SUMMARY ===");
        for (CartItem item : cart.getItems()) {
            System.out.printf(" - %s (x%d) : ₹%.2f%n", 
                    item.getProduct().getName(), item.getQuantity(), item.getItemSubtotal());
        }
        System.out.printf("Total Cart Payable : ₹%.2f%n", cart.calculateCartTotal());
    }
}
```

## 👀 Output

```text
=== SHOPPING CART SUMMARY ===
 - Mechanical Keyboard (x1) : ₹4500.00
 - Ergonomic Mouse (x2) : ₹3600.00
Total Cart Payable : ₹8100.00
```

## ⚠️ Common Mistakes

- Making fields `public` directly without getters/setters, allowing invalid data (e.g. `price = -500.00`).
- Returning raw mutable references (`Date`, `List`, `Map`) in getters without defensive copying.
- Using inheritance (`extends`) when composition ("Has-A") is a much cleaner architecture fit.

## 🛡️ Safety / Important Notes

Always keep access modifiers as restrictive as possible (`private` first, then default/`protected`, and `public` only for intended public APIs).

## 🌍 Real-World Usage

Enterprise application architectures: Order containing OrderItems, User containing Address, Computer containing Processor and RAM components.

## 🧪 Try It Yourself

1. Create a `Processor` class and a `Computer` class that uses composition (`Computer` Has-A `Processor`).
2. Add validation to setter methods to prevent invalid values.

## 🎯 Mini Challenge

Build a `Library` class that contains a `List<Book>` using composition and provides a defensive getter returning an unmodifiable list of books.

## 🔗 Related Topics

- [Classes and Objects](14-classes-and-objects.md)
- [Inheritance and Polymorphism](16-inheritance-and-polymorphism.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Classes and Objects](14-classes-and-objects.md) | [Next: Inheritance and Polymorphism →](16-inheritance-and-polymorphism.md)
