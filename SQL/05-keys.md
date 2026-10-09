---
layout: default
title: "05 keys"
---

# 🔑 SQL Keys & Database Integrity

> 🟢 Beginner

## 📖 Definition

In a Relational Database Management System (RDBMS), a **SQL Key** is a single column or combination of columns used to uniquely identify individual table rows, construct relationships between parent and child tables, and enforce data integrity rules.

Without keys, relational databases would degenerate into unstructured spreadsheets containing duplicate records, invalid references, and orphaned data rows.

> 💡 **Design Concepts vs SQL Keywords:** Terms like *Candidate Key*, *Alternate Key*, *Super Key*, *Surrogate Key*, and *Natural Key* are **relational database design concepts** rather than explicit SQL commands. In SQL statements, you implement these design concepts using constraints like `PRIMARY KEY`, `UNIQUE`, `FOREIGN KEY`, and `AUTO_INCREMENT`.

---

## 🇮🇳 Hindi (Roman Script)

Relational database mein **Keys** har row ko uniquely identify karne aur tables ke beech rishta (relationship) banane ke liye zaroori hote hain. **Primary Key** ek unique identifier hai jo kabhi `NULL` nahi ho sakta. **Foreign Key** ek child table ko parent table ki Primary Key se link karti hai taaki invalid IDs enter na ho sakein. Concept jaise Candidate Key aur Alternate Key database design samajhne ke liye hote hain, jabki SQL mein hum `PRIMARY KEY`, `UNIQUE`, aur `FOREIGN KEY` constraints ka use karte hain.

---

## 🚩 Marathi (Roman Script)

Relational database madhye **Keys** mhanje pratyek row la vegli olakh (unique identity) denari aani don tables madhye sambandh tayar karnari paddhat ahe. **Primary Key** mule pratyek record unique rahto aani to kunitahik `NULL` rahu shakat nahi. **Foreign Key** mule child table ha parent table sobat jodla jato, jyamule chukicha data enter hot nahi. Candidate Key kiva Alternate Key he database design che mahatvache bhag ahet.

---

## 🤔 Why Do We Use It?

Keys are the foundational building blocks of relational database design because they enforce:

- **Entity Integrity:** Ensures every record in a table has a unique, non-NULL primary identifier.
- **Referential Integrity:** Guarantees that relationships between tables remain valid (e.g., stopping an order from referencing a customer ID that does not exist).
- **Data Deduplication:** Prevents duplicate rows from being inserted into the database.
- **High-Performance Querying:** Serves as the default underlying index structure for fast point lookups and table `JOIN` operations.

---

## 🧠 Simple Analogy: University Student System

Imagine a **University Administration Office**:

- **Student Roll Number (`student_id`):** Primary Key $\rightarrow$ Uniquely identifies you. No two students share the same Roll Number, and every student must have one.
- **Email & Passport Number:** Candidate / Alternate Keys $\rightarrow$ Both uniquely identify you, but the university chose Roll Number as your main Primary Key. The others are enforced using `UNIQUE` constraints.
- **Library Card Record (`student_id`):** Foreign Key $\rightarrow$ Links your library borrow log back to your official Student Roll Number in the main registry.

---

## 🔑 Key Types Comparison Matrix

Below is a complete breakdown of all 8 relational key concepts:

| Key Type | Design Concept or SQL Keyword? | Purpose & Uniqueness Rules | Realistic Example |
| :--- | :---: | :--- | :--- |
| **Primary Key** | **SQL Keyword** (`PRIMARY KEY`) | Uniquely identifies each row. Must be `UNIQUE` and `NOT NULL`. Exactly 1 Primary Key constraint per table. | `student_id INT PRIMARY KEY` |
| **Foreign Key** | **SQL Keyword** (`FOREIGN KEY`) | References a Primary Key in a parent table to enforce referential integrity between child and parent. | `dept_id` in `employees` referencing `dept_id` in `departments` |
| **Super Key** | Design Concept | Any set of columns that uniquely identifies a row (including sets with redundant extra columns). | `{emp_id}`, `{emp_id, first_name}`, `{emp_id, email}` |
| **Candidate Key** | Design Concept | A minimal Super Key with no unnecessary extra columns. Eligible to become Primary Key. | `{emp_id}`, `{email}`, `{vehicle_vin}` |
| **Alternate Key** | Design Concept | Candidate Keys that were **not** selected as the Primary Key. Enforced in SQL using `UNIQUE`. | `email VARCHAR(100) UNIQUE` |
| **Composite Key** | SQL Constraint / Design | A key formed by combining 2 or more columns when a single column is not unique alone. | `PRIMARY KEY (student_id, course_id)` |
| **Surrogate Key** | SQL Feature (`AUTO_INCREMENT`) | A system-generated artificial integer key with no real-world business meaning. | `id INT AUTO_INCREMENT` |
| **Natural Key** | Design Concept | A unique key formed from a real-world business attribute with domain meaning. | Vehicle VIN (`vin VARCHAR(17)`), Product ISBN (`isbn CHAR(13)`) |

---

## 1. Primary Keys (`PRIMARY KEY`)

A **Primary Key** is the primary unique identifier for a table. It strictly enforces two rules:
1. Every value must be **unique**.
2. No value can ever be **`NULL`**.

```sql
-- Creating a table with a Primary Key
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL
);

-- Valid Inserts:
INSERT INTO students (student_id, student_name) VALUES (101, 'Rahul');
INSERT INTO students (student_id, student_name) VALUES (102, 'Priya');
```

### 🚫 Why Primary Key Rules Reject Invalid Inserts:

```sql
-- ❌ Error 1: Duplicate Primary Key value (101 already exists)
INSERT INTO students (student_id, student_name) VALUES (101, 'Amit');
-- ERROR 1062 (23000): Duplicate entry '101' for key 'PRIMARY'

-- ❌ Error 2: Primary Key cannot be NULL
INSERT INTO students (student_id, student_name) VALUES (NULL, 'Neha');
-- ERROR 1048 (23000): Column 'student_id' cannot be null
```

> 📌 **Important Constraint Rule:** A table can have **only ONE Primary Key constraint**. However, that single constraint can be placed on a single column OR span multiple columns (Composite Primary Key).

---

## 2. Foreign Keys & Referential Integrity

A **Foreign Key** is a column (or combination of columns) in a **child table** that references a **Primary Key** (or Unique Key) in a **parent table**.

### Parent-Child Table Setup:

To create a Foreign Key relationship, the **parent table must be created FIRST**:

```sql
-- 1. PARENT TABLE (Created First)
CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL UNIQUE
);

-- 2. CHILD TABLE (Created Second, referencing departments)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    dept_id INT, -- Foreign Key column (Nullable)
    
    CONSTRAINT fk_emp_dept
        FOREIGN KEY (dept_id)
        REFERENCES departments(dept_id)
);
```

### How Referential Integrity Works:

```sql
-- Step A: Insert valid departments into parent table
INSERT INTO departments (dept_id, dept_name) VALUES (10, 'Engineering'), (20, 'Design');

-- Step B: Valid Child Insert (dept_id 10 exists in parent table)
INSERT INTO employees (first_name, dept_id) VALUES ('Rahul', 10);

-- Step C: Valid Child Insert with NULL (Represents an unassigned employee)
INSERT INTO employees (first_name, dept_id) VALUES ('Priya', NULL);

-- ❌ Step D: INVALID Child Insert (dept_id 999 DOES NOT exist in departments!)
INSERT INTO employees (first_name, dept_id) VALUES ('Amit', 999);
-- ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails
```

> 🌐 **Data Type Compatibility Rule:** The Foreign Key column in the child table (`dept_id INT`) must have a data type compatible with the referenced Primary Key column in the parent table (`dept_id INT`).

---

## 3. Referential Actions: `ON DELETE` & `ON UPDATE`

When a record in the parent table (`departments`) is deleted or updated, what should happen to the corresponding records in the child table (`employees`)? You specify this using referential actions:

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    dept_id INT,
    
    CONSTRAINT fk_emp_dept
        FOREIGN KEY (dept_id)
        REFERENCES departments(dept_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
```

### Referential Action Behaviors:

- **`ON DELETE RESTRICT` / `NO ACTION` (Default):** Prevents deletion of a parent record if matching child records exist. Attempts to delete `dept_id = 10` while Rahul is assigned to it will throw an error.
- **`ON DELETE CASCADE`:** Deleting a parent record automatically deletes **all** matching child records. *(Use with caution: deleting department 10 deletes all employees in department 10!)*
- **`ON DELETE SET NULL`:** Deleting a parent record sets the child `dept_id` column to `NULL` for all affected employees. *(Requires `dept_id` to be a nullable column!)*
- **`ON UPDATE CASCADE`:** Updating `dept_id` in the parent table automatically updates all corresponding `dept_id` values in the child table.

---

## 4. Composite Keys

A **Composite Key** is a key constructed by combining **two or more columns** to guarantee uniqueness when no single column is unique on its own.

### Practical Example: Course Enrollments

In a university, a student can enroll in multiple courses, and a course contains multiple students. Neither `student_id` nor `course_id` is unique individually in the enrollment table, but the **combination `(student_id, course_id)` is unique**.

```sql
-- Parent Table 1
CREATE TABLE students_list (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL
);

-- Parent Table 2
CREATE TABLE courses_list (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

-- Child Table with Composite Primary Key
CREATE TABLE course_enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    
    -- Composite Primary Key spanning student_id AND course_id
    PRIMARY KEY (student_id, course_id),
    
    FOREIGN KEY (student_id) REFERENCES students_list(student_id),
    FOREIGN KEY (course_id) REFERENCES courses_list(course_id)
);
```

### Valid vs Duplicate Composite Inserts:

```sql
-- Valid Inserts:
INSERT INTO course_enrollments (student_id, course_id) VALUES (1, 101); -- Student 1 in Course 101
INSERT INTO course_enrollments (student_id, course_id) VALUES (1, 102); -- Student 1 in Course 102 (Allowed!)
INSERT INTO course_enrollments (student_id, course_id) VALUES (2, 101); -- Student 2 in Course 101 (Allowed!)

-- ❌ Duplicate Insert Error (Student 1 is ALREADY enrolled in Course 101):
INSERT INTO course_enrollments (student_id, course_id) VALUES (1, 101);
-- ERROR 1062 (23000): Duplicate entry '1-101' for key 'PRIMARY'
```

---

## 5. Candidate, Alternate, and Super Keys

Let's examine how key selection works during database design for an `employees` table containing: `emp_id`, `email`, `vehicle_vin`, `first_name`, and `salary`.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SUPER KEYS                                        │
│  {emp_id}, {email}, {vehicle_vin}, {emp_id, first_name}, {email, salary}... │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    CANDIDATE KEYS                                   │   │
│   │               {emp_id}, {email}, {vehicle_vin}                      │   │
│   │                                                                     │   │
│   │   ┌──────────────────────────┐   ┌──────────────────────────────┐   │   │
│   │   │       PRIMARY KEY        │   │        ALTERNATE KEYS        │   │   │
│   │   │        {emp_id}          │   │  {email}, {vehicle_vin}      │   │   │
│   │   └──────────────────────────┘   └──────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Super Key:** Any combination of columns that uniquely identifies a row. `{emp_id, first_name}` is a Super Key because `emp_id` makes the set unique, even though `first_name` is redundant.
2. **Candidate Key:** A minimal Super Key with zero redundant columns. In this table, `{emp_id}`, `{email}`, and `{vehicle_vin}` are all Candidate Keys.
3. **Primary Key:** The single Candidate Key chosen by the database architect as the main identifier (`emp_id`).
4. **Alternate Key:** Candidate Keys that were **not** chosen as the Primary Key (`email` and `vehicle_vin`). In SQL, Alternate Keys are enforced using `UNIQUE` constraints.

```sql
CREATE TABLE staff (
    emp_id INT PRIMARY KEY,                  -- Chosen Primary Key
    email VARCHAR(100) NOT NULL UNIQUE,       -- Alternate Key 1 (Enforced via UNIQUE)
    vehicle_vin CHAR(17) UNIQUE,             -- Alternate Key 2 (Enforced via UNIQUE)
    first_name VARCHAR(50) NOT NULL
);
```

---

## 6. Surrogate Keys vs Natural Keys

- **Surrogate Key:** An artificially generated numeric key (e.g., `id INT AUTO_INCREMENT`) created by the database engine. It carries no real-world business meaning.
- **Natural Key:** A key formed from a real-world business attribute (e.g., Vehicle VIN `vehicle_vin CHAR(17)`, Product ISBN `isbn CHAR(13)`).

```sql
-- Surrogate Key Example (Recommended for stability and join performance)
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT, -- Surrogate Key
    order_date DATE NOT NULL
);
```

> ⚠️ **Why Natural Keys like Email or Phone Numbers can be problematic:** Real-world business attributes like email addresses or phone numbers can change when a user updates their account. Changing a Primary Key value requires updating every Foreign Key in all child tables! Using a Surrogate Key (`AUTO_INCREMENT`) keeps Primary Keys stable and immutable.

> 🌐 **Engine Note on `AUTO_INCREMENT`:** `AUTO_INCREMENT` is MySQL/MariaDB syntax. **PostgreSQL** uses `SERIAL` or `GENERATED ALWAYS AS IDENTITY`. **SQLite** uses `AUTOINCREMENT`.

---

## 🛠️ Complete E-Commerce Schema (Mini Challenge Solution)

Here is a 4-table coherent E-Commerce schema built in correct dependency order:

```sql
-- 1. Parent Table 1: Customers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT, -- Surrogate Primary Key
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE          -- Alternate Key (UNIQUE)
);

-- 2. Parent Table 2: Products
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,  -- Surrogate Primary Key
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price > 0) -- Positive price constraint
);

-- 3. Parent Table 3 (Child of Customers): Orders
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,    -- Surrogate Primary Key
    customer_id INT NOT NULL,
    order_date DATE DEFAULT (CURRENT_DATE),
    
    CONSTRAINT fk_orders_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
        ON DELETE RESTRICT
);

-- 4. Child Table (Child of Orders and Products): Order Items
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10, 2) NOT NULL,
    
    -- Composite Primary Key preventing duplicate product line-items in same order
    PRIMARY KEY (order_id, product_id),
    
    CONSTRAINT fk_items_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_items_product
        FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE RESTRICT
);
```

> 💡 **Understanding the Composite Primary Key `(order_id, product_id)`:** This composite primary key ensures that product #501 can appear only once per order #1001. If the same product is ordered multiple times, its `quantity` column is updated rather than adding duplicate rows.

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Corrective Action |
| :--- | :--- | :--- |
| **`ERROR 1215 (HY000): Cannot add foreign key constraint`** | Parent table does not exist, or column data types do not match (`INT` vs `BIGINT`). | Create parent table first and ensure FK and PK columns have identical data types. |
| **`ERROR 1452 (23000): Cannot add or update a child row`** | Attempting to insert a child record with a Foreign Key ID that does not exist in parent table. | Insert valid parent records before inserting child rows referencing them. |
| **`ERROR 1062 (23000): Duplicate entry for key 'PRIMARY'`** | Attempting to insert a duplicate Primary Key value. | Use `AUTO_INCREMENT` or ensure inserted Primary Key integers are unique. |
| **Volatile Natural Primary Keys** | Using `email` or `phone_number` as Primary Keys. | Use a Surrogate Key (`id INT AUTO_INCREMENT`) as Primary Key and add a `UNIQUE` constraint to `email`. |
| **Creating Child Tables First** | Writing `CREATE TABLE orders` referencing `customers` before `customers` exists. | Execute `CREATE TABLE` for parent tables first before creating child tables. |

---

## 🌍 Real-World Usage

- **E-Commerce Databases:** Connects `customers` $\rightarrow$ `orders` $\rightarrow$ `order_items` $\rightarrow$ `products` using Primary and Foreign Keys to maintain exact transaction integrity.
- **Financial Banking Systems:** Uses `ON DELETE RESTRICT` on account foreign keys to prevent accounts with active transactions or balances from being accidentally deleted.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Surrogate Primary Key Creation
Write a `CREATE TABLE` statement for a `categories` table with a surrogate primary key `category_id` (`AUTO_INCREMENT`) and a unique `category_name` column.

### Exercise 2: Composite Primary Key Design
Write a `CREATE TABLE` statement for a `student_grades` table with a composite primary key formed by `student_id` and `exam_id`, along with a `score DECIMAL(5,2)` column.

### Exercise 3: Foreign Key Violation Scenario
Given a `departments` parent table containing `dept_id` values `10` and `20`, explain what happens when you execute:

```sql
INSERT INTO employees (first_name, dept_id) VALUES ('Rohan', 50);
```

### Exercise 4: Identify Key Types
Look at a `vehicles` table with columns: `id`, `vin`, `license_plate`, `color`, `model`.
1. Which column is best suited as a **Surrogate Primary Key**?
2. Which columns are **Candidate / Alternate Keys**?
3. Is `{id, model}` a valid **Super Key**? Explain why.

---

## 🎯 Mini Challenge

Design an SQL schema with 2 tables: `publishers` and `books`.
1. `publishers`: `publisher_id` (Primary Key, `AUTO_INCREMENT`), `publisher_name` (`VARCHAR(100)`, `NOT NULL`, `UNIQUE`).
2. `books`: `book_id` (Primary Key, `AUTO_INCREMENT`), `title` (`VARCHAR(150)`, `NOT NULL`), `publisher_id` (Foreign Key referencing `publishers`, with `ON DELETE SET NULL`).

<details>
<summary>🔍 Click to view Mini Challenge Solution</summary>

```sql
-- Step 1: Parent Table (Publishers)
CREATE TABLE publishers (
    publisher_id INT PRIMARY KEY AUTO_INCREMENT,
    publisher_name VARCHAR(100) NOT NULL UNIQUE
);

-- Step 2: Child Table (Books)
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    publisher_id INT, -- Nullable FK for ON DELETE SET NULL
    
    CONSTRAINT fk_books_publisher
        FOREIGN KEY (publisher_id)
        REFERENCES publishers(publisher_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Step 3: Test Inserts
INSERT INTO publishers (publisher_name) VALUES ('O''Reilly Media'), ('Penguin Books');
INSERT INTO books (title, publisher_id) VALUES ('Learning SQL', 1);
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [`INSERT` – Adding Data to Tables with Keys](06-insert.html)
- [SQL Joins & Table Relationships](14-joins.html)

---

## 🧭 Navigation

[← Previous: Data Types & NULL](04-data-types-and-null.html) | [SQL Home](./) | [Next: INSERT Data →](06-insert.html)
