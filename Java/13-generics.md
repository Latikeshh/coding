---
layout: default
title: "Generics"
---

# Generics in Java

> 🟡 Intermediate

## 📖 Definition

**Generics** enable classes, interfaces, and methods to take **types as parameters**. By parametrizing types (`List<String>` instead of raw `List`), Generics enforce compile-time type safety, eliminate manual type casting, and catch invalid type assignments at compile time.

## 🇮🇳 Hindi

Generics Java code ko Type-Safe banate hain. Pre-Generics Java mein `List` kisi bhi object ko accept kar leta tha, jisse runtime par `ClassCastException` aata tha. Generics `<T>` se compiler check karta hai ki sirf specific type ka data hi store ho.

## 🚩 Marathi

Generics mule code Type-Safe banto. Compile-time la chukiche types check kele jaatat.

## 🤔 Why Do We Use Them?

Without Generics, Java collection methods returned raw `Object` instances, requiring explicit type casting (`String s = (String) list.get(0);`) and risking catastrophic runtime `ClassCastException` crashes.

## 🧠 Simple Explanation

Think of a generic class like a labeled shipping container `Container<T>`. When you manufacture the container, you label it for Glassware `Container<Glass>`. The security inspector (the compiler) refuses to let anyone load Heavy Machinery into a container marked for Glass.

## 📝 1. Generic Classes & Generic Methods

```java
// Generic Class with Type Parameter 'T'
public class DataBox<T> {
    private T content;

    public void setContent(T content) { this.content = content; }
    public T getContent() { return content; }
}

// Generic Method
public static <E> void printArray(E[] elements) {
    for (E element : elements) {
        System.out.print(element + " ");
    }
    System.out.println();
}
```

## 📝 2. Bounded Type Parameters (`<T extends Number>`)

Restricts the allowed type arguments to a specific superclass or interface:

```java
// Accepts ONLY classes extending Number (Integer, Double, Float, Long)
public class StatsCalculator<T extends Number> {
    public double calculateAverage(T[] numbers) {
        double sum = 0.0;
        for (T num : numbers) {
            sum += num.doubleValue(); // Double.doubleValue() available!
        }
        return sum / numbers.length;
    }
}
```

## 📝 3. Wildcards & The PECS Principle

- **Unbounded Wildcard (`?`):** Accepts any type (`List<?>`).
- **Upper Bounded Wildcard (`? extends T`):** Read-only from producer.
- **Lower Bounded Wildcard (`? super T`):** Write-only to consumer.

> 💡 **The PECS Rule:** **Producer Extends, Consumer Super**
> - If your method reads/produces data from a collection, use `? extends T`.
> - If your method writes/consumes data into a collection, use `? super T`.

## 🧠 4. Type Erasure Mechanics

> ⚠️ **IMPORTANT INTERVIEW CONCEPT:** **Generics exist ONLY at Compile-Time!**
> During compilation, the Java compiler applies **Type Erasure**—removing all generic type parameters `<T>` and replacing them with `Object` (or bounded types like `Number`). This guarantees backward compatibility with older legacy JVM versions.

## 💡 Complete Example: Generic Result Wrapper & Repository

```java
import java.util.List;

// Generic Result Wrapper Class for API/Database Operations
public class ApiResponse<T> {
    private final boolean success;
    private final T data;
    private final String errorMessage;

    private ApiResponse(boolean success, T data, String errorMessage) {
        this.success = success;
        this.data = data;
        this.errorMessage = errorMessage;
    }

    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>(true, data, null);
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, null, message);
    }

    public boolean isSuccess() { return success; }
    public T getData() { return data; }
    public String getErrorMessage() { return errorMessage; }
}

public class GenericDemo {
    public static void main(String[] args) {
        // String Type Response
        ApiResponse<String> nameResponse = ApiResponse.success("Rahul Verma");
        
        // List Type Response
        List<String> cities = List.of("Mumbai", "Delhi", "Bengaluru");
        ApiResponse<List<String>> listResponse = ApiResponse.success(cities);

        // Error Response
        ApiResponse<User> errorResponse = ApiResponse.error("User ID 99 Not Found!");

        System.out.println("Name Response Success? : " + nameResponse.isSuccess());
        System.out.println("Data Received          : " + nameResponse.getData());
        System.out.println("List Received          : " + listResponse.getData());
        System.out.println("Error Message          : " + errorResponse.getErrorMessage());
    }

    record User(int id, String name) {}
}
```

## 👀 Output

```text
Name Response Success? : true
Data Received          : Rahul Verma
List Received          : [Mumbai, Delhi, Bengaluru]
Error Message          : User ID 99 Not Found!
```

## ⚠️ Common Mistakes

- Using Primitive types directly as generic parameters (`List<int>` is invalid; use `List<Integer>`).
- Using raw types (`List list = new ArrayList();`), which disables compile-time type safety checking.
- Over-complicating method signatures with excessive nested wildcards.

## 🛡️ Safety / Important Notes

Because of Type Erasure, you cannot instantiate generic arrays directly (`new T[10]` is invalid) or use `instanceof` with specific generic parameters (`obj instanceof List<String>` is invalid).

## 🌍 Real-World Usage

Java Collections Framework (`List<T>`, `Map<K,V>`), Spring Framework `ResponseEntity<T>`, Jackson JSON deserializers, and ORM repository interfaces (`Repository<T, ID>`).

## 🧪 Try It Yourself

1. Create a generic class `Pair<K, V>` holding a key and a value.
2. Instantiate `Pair<Integer, String>` for an employee ID and name.

## 🎯 Mini Challenge

Write a generic method `<T> void swapArrayElements(T[] array, int index1, int index2)` that swaps two elements in an array of any reference type.

## 🔗 Related Topics

- [Collections](11-collections.md)
- [Classes and Objects](14-classes-and-objects.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Enums and Records](12-enums-and-records.md) | [Next: Classes and Objects →](14-classes-and-objects.md)
