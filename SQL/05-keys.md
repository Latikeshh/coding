---
layout: default
title: "05 keys"
---

# 🔑 SQL Keys & Database Integrity (Primary, Foreign, Candidate, Composite, Super & Surrogate Keys)

> 🟢 Beginner

## 📖 Definition

In relational databases (RDBMS), a **SQL Key** is a column or a combination of columns used to uniquely identify individual table records, establish relational links between tables, and enforce data integrity. Keys prevent duplicate entries, ensure referential consistency, and form the backbone of relational database design.

---

## 🌐 Multilingual Explanation

### English
Database keys define relationships and unique constraints across relational tables. A **Primary Key** uniquely identifies each row in a table. A **Foreign Key** connects a child table to a parent table's Primary Key. Additional key types—such as Candidate, Alternate, Composite, Super, and Surrogate Keys—provide precise control over data architecture.

### Hindi (Roman Script)
Relational database mein Keys ka use rows ko uniquely identify karne aur tables ke beech rishta (relationship) banane ke liye hota hai. `PRIMARY KEY` har record ko unique ID deti hai, `FOREIGN KEY` do tables ko link karti hai, aur `COMPOSITE KEY` do ya do se zyada columns ko mila kar unique key banati hai.

### Marathi (Roman Script)
Database madhye Keys cha wapar pratyek row la unique identity dhenyasathi aani tables madhye relationship tayar karnyasathi hoto. `PRIMARY KEY` mhanje main unique ID, `FOREIGN KEY` mhanje dusrya table cha reference, aani `COMPOSITE KEY` mhanje ekahun adhik columns ekatra karun banvleli key.

### Hinglish
Relational databases (MySQL, PostgreSQL, Oracle, SQLite) bina Keys ke kaam nahi kar sakte. Database Keys data redundancy aur orphan records ko rokti hain. Keys seekhna table design aur `JOIN` queries samajhne ke liye pehla sabse zaroori step hai.

---

## 🔑 Complete Breakdown of All SQL Key Types

| Key Type | Description | Key Characteristic | Real-World Example |
| :--- | :--- | :--- | :--- |
| **Primary Key** | Uniquely identifies each row in a table. | Cannot be `NULL`, must be `UNIQUE`. Only 1 per table. | `emp_id`, `student_id` |
| **Foreign Key** | References the Primary Key of another table. | Enforces referential integrity between parent and child. | `dept_id` in `employees` |
| **Super Key** | Any set of columns that uniquely identifies a row. | Contains extra unnecessary attributes. | `{emp_id, email, name}` |
| **Candidate Key** | Minimal Super Key eligible to become Primary Key. | No redundant columns. Can be selected as Primary Key. | `{emp_id}`, `{email}`, `{ssn}` |
| **Alternate Key** | Candidate Keys NOT chosen as the Primary Key. | Function as secondary unique keys. | `email` or `passport_no` |
| **Composite Key** | Primary Key formed by combining 2 or more columns. | Used when a single column isn't unique alone. | `{student_id, course_id}` |
| **Surrogate Key** | System-generated artificial unique identifier. | Has no real-world business meaning (`AUTO_INCREMENT`). | `id INT AUTO_INCREMENT` |
| **Natural Key** | Unique key derived from real-world business attributes. | Has real-world domain meaning. | `SSN`, `PAN_Number`, `VIN` |

---

## 🔬 Detailed Analysis of Every Key Type with SQL Examples

### 1. Primary Key (`PRIMARY KEY`)
A Primary Key uniquely identifies every record in a table. It strictly prohibits `NULL` values and duplicate entries.

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT, -- Primary Key
    username VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. Foreign Key (`FOREIGN KEY`)
A Foreign Key in a child table references the Primary Key of a parent table, establishing a relational constraint.

```sql
-- Parent Table
CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL UNIQUE
);

-- Child Table with Foreign Key
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) CHECK (salary > 0),
    dept_id INT, -- Foreign Key Column
    
    CONSTRAINT fk_emp_dept 
        FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
```

#### Referential Integrity Actions (`ON DELETE` / `ON UPDATE`):
- **`ON DELETE CASCADE`**: Deletes child rows automatically when the parent row is deleted.
- **`ON DELETE SET NULL`**: Sets the child foreign key column to `NULL` when parent row is deleted.
- **`ON DELETE RESTRICT`**: Rejects parent row deletion if child records exist (Default behavior).

---

### 3. Composite Key (Compound Primary Key)
A Composite Key uses two or more columns together to guarantee row uniqueness.

```sql
-- Student Course Enrollment Table
CREATE TABLE course_enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    grade VARCHAR(2),
    
    -- Composite Primary Key combining student_id + course_id
    PRIMARY KEY (student_id, course_id),
    
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

---

### 4. Candidate Key vs Alternate Key
Suppose an `employees` table has columns `emp_id`, `email`, and `passport_number`. All three uniquely identify an employee:
- **Candidate Keys**: `{emp_id}`, `{email}`, `{passport_number}`
- **Primary Key Selected**: `{emp_id}`
- **Alternate Keys (Secondary Unique Keys)**: `{email}`, `{passport_number}`

```sql
CREATE TABLE employee_profiles (
    emp_id INT PRIMARY KEY,               -- Chosen Primary Key
    email VARCHAR(100) UNIQUE NOT NULL,    -- Alternate Key 1
    passport_no VARCHAR(20) UNIQUE NOT NULL -- Alternate Key 2
);
```

---

### 5. Surrogate Key vs Natural Key
- **Surrogate Key**: An artificial auto-incrementing integer (`id INT AUTO_INCREMENT`) generated by the database engine.
- **Natural Key**: A real-world unique attribute (e.g. `US_SSN VARCHAR(11)` or `Vehicle_VIN VARCHAR(17)`).

```sql
-- Surrogate Key Example (Recommended for performance & stability)
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT, -- Surrogate Key
    customer_id INT NOT NULL,
    order_date DATE NOT NULL
);
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Creating Child Foreign Keys Before Parent Tables**: You cannot reference a parent table or column that does not exist yet. Always create parent tables first!
- **Data Type Mismatches on Foreign Keys**: A Foreign Key column MUST match the exact data type of the parent Primary Key column (`INT` to `INT`, `BIGINT` to `BIGINT`).
- **Inserting Invalid Foreign Key IDs**: Attempting to insert a `dept_id` into `employees` that does not exist in `departments` triggers a `FOREIGN KEY constraint failed` error.
- **Using Unstable Natural Keys as Primary Keys**: Using volatile attributes like `email` or `phone_number` as Primary Keys causes major refactoring problems if a user updates their email or phone number later. Use a Surrogate Key (`id`) as Primary Key instead!

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a `CREATE TABLE` statement for a `categories` table with `category_id` as a Surrogate Primary Key (`AUTO_INCREMENT`).
2. Write a `CREATE TABLE` statement for a `student_grades` table using a Composite Primary Key composed of `student_id` and `exam_id`.

---

## 🎯 Mini Challenge

Design an E-Commerce schema with 3 tables: `customers`, `products`, and `order_items`:
- `customers`: Primary Key `customer_id`, Alternate Key `email`.
- `products`: Primary Key `product_id`, `price CHECK (price > 0)`.
- `order_items`: Composite Primary Key `(order_id, product_id)`, with Foreign Keys referencing `orders` and `products`.

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [`INSERT` – Adding Data to Tables with Keys](06-insert.html)
- [SQL Joins & Table Relationships](14-joins.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Data Types & NULL](04-data-types-and-null.html) | [Next: INSERT Data →](06-insert.html)
