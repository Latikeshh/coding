---
layout: default
title: "19 normalization"
---

# Database Relationships & Normalization

> 🟡 Intermediate

---

## 📖 Definition

**Database Normalization** is a systematic database design methodology used to organize tables, columns, and relationships in a Relational Database Management System (RDBMS). Its primary goals are to **minimize data redundancy** (unnecessary duplicate facts) and **eliminate data anomalies** during data operations.

Normalization guides how real-world facts are divided across tables using Primary Keys, Foreign Keys, and Functional Dependencies.

> 💡 **Design Process vs SQL Commands:** Normalization is a **schema design methodology**, not a single SQL command. You apply normalization rules when designing your database structure with `CREATE TABLE` and `FOREIGN KEY` constraints.

---

## 🚨 Understanding Data Anomalies

When a database table is not normalized, data is repeated across hundreds of rows, leading to three classic **Data Anomalies**:

1. **Insertion Anomaly:** Unable to record a new department's details unless at least one employee is hired into that department.
2. **Update Anomaly:** Updating a department name requires editing hundreds of employee rows. If even one row is missed, the database becomes inconsistent.
3. **Deletion Anomaly:** Deleting the last employee in a department accidentally wipes out the entire department's record from the database.

```text
UNNORMALIZED SPREADSHEET TABLE (Exhibits all 3 Anomalies):
+--------+------------+-----------------+-------------------+
| emp_id | emp_name   | department_name | department_head   |
+--------+------------+-----------------+-------------------+
|    101 | Rahul      | Engineering     | Dr. Roy           |
|    102 | Priya      | Engineering     | Dr. Roy           | <-- Duplicate Dept Head!
|    103 | Amit       | Marketing       | Sarah Jenkins     |
+--------+------------+-----------------+-------------------+
```

---

## 🇮🇳 Hindi (Roman Script)

**Database Normalization** ek systematic table design technique hai jisse database mein faltu ki data duplication (redundancy) khatam hoti hai aur data update karte waqt hone waali galtiyan (anomalies) rukti hain. Normalization mein hum ek bade spreadsheet-style table ko chote related tables mein todte hain aur unhe **Primary Keys** aur **Foreign Keys** se connect karte hain. Isse data ki accuracy bani rehti hai aur ek jagah badlav karne par poore database mein consistency rehti hai.

---

## 🚩 Marathi (Roman Script)

**Database Normalization** mhanje database chya tables chi ashhi rachana karne jyamule duplicate data (redundancy) kami hoto aani data update kartana ho-naarya chukya (anomalies) taltat. Normalization madhye ekach mothya table madhye mahiti bharanya aivaji, sambandhit mahiti veglya tables madhye thevun tyanla **Primary Keys** aani **Foreign Keys** ne jodle jate. Tyamule data eka thikani badallyas sarvatra consistency rahte.

---

## 🤔 Why Do We Use It?

A well-normalized relational database schema provides key architectural benefits:

- **Single Source of Truth:** Every business fact (e.g. a customer's email or a department's name) is stored in exactly **one** place on disk.
- **Data Integrity:** Prevents orphaned records and mismatched department names.
- **Storage Efficiency:** Replaces long repeated text strings (`"Human Resources Department"`) with small 4-byte integer Foreign Keys (`dept_id = 40`).
- **Simpler Maintenance:** Modifying a customer's address requires updating only 1 row in `customers` rather than thousands of historical order rows.

---

## 🧠 Simple Analogy: Company Employee ID Badges

Imagine printing employee ID badges at a corporate office:

- ❌ **Unnormalized Approach:**
  Printing the entire department address, floor map, and department manager's full biography on **every single employee's ID badge**. If the department moves to the 4th floor, you must re-print 500 employee ID badges!

- ✅ **Normalized Approach:**
  Printing only a simple **Department ID Code** (`DEPT-10`) on the employee's ID badge. The floor map and manager biography are stored in **one single Master Department Directory** on the wall. If the department moves, you update only the master directory on the wall!

---

## 📐 The Normal Forms (1NF, 2NF, 3NF)

Database normalization progresses through sequential stages called **Normal Forms**. A table must satisfy the requirements of each preceding normal form before advancing to the next.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                            THIRD NORMAL FORM (3NF)                          │
│               No Transitive Dependencies (Non-key -> Non-key)               │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                       SECOND NORMAL FORM (2NF)                      │   │
│   │            No Partial Dependencies (Part of Key -> Non-key)        │   │
│   │                                                                     │   │
│   │   ┌─────────────────────────────────────────────────────────────┐   │   │
│   │   │                  FIRST NORMAL FORM (1NF)                    │   │   │
│   │   │            Atomic Values & No Repeating Groups              │   │   │
│   │   └─────────────────────────────────────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 1️⃣ First Normal Form (1NF) — Atomicity & No Repeating Groups

#### 📜 Rules for 1NF:
1. Every table column must contain **atomic** (indivisible) scalar values.
2. There must be **no repeating groups** or comma-separated lists stored inside a single cell (e.g. `phone_numbers = '9876543210, 9123456789'`).
3. Each row must be uniquely identifiable (Primary Key).

#### ❌ Before 1NF (Violates 1NF — Comma-Separated List):

```text
students_unnormalized
+------------+--------------+----------------──────────────────+
| student_id | student_name | enrolled_courses                 |
+------------+--------------+----------------──────────────────+
|          1 | Rahul        | Database Systems, Web Dev, Java  | <-- Non-atomic list!
|          2 | Priya        | Database Systems, Python         |
+------------+--------------+----------------──────────────────+
```

#### ✅ After 1NF (Atomic Rows):

```text
students_1nf
+------------+--------------+------------------+
| student_id | student_name | course_name      |
+------------+--------------+------------------+
|          1 | Rahul        | Database Systems |
|          1 | Rahul        | Web Dev          |
|          1 | Rahul        | Java             |
|          2 | Priya        | Database Systems |
|          2 | Priya        | Python           |
+------------+--------------+------------------+
```

> 💡 **Understanding Atomicity:** Atomicity depends on your business requirements. Storing `full_name = 'Rahul Dravid'` is atomic if your application never queries first and last names separately. If you need to search or sort by last name, split `full_name` into `first_name` and `last_name`.

---

### 2️⃣ Second Normal Form (2NF) — No Partial Dependencies

#### 📜 Rules for 2NF:
1. The table must already be in **1NF**.
2. **No Partial Dependency:** Every non-key column must depend on the **entire candidate key**, not just a part of a composite primary key.

#### ❌ Before 2NF (Violates 2NF — Partial Dependency):
Consider `course_enrollments` with Composite Primary Key **`(student_id, course_id)`**:

```text
course_enrollments_1nf
+------------+-----------+------------------+------------------+-------+
| student_id | course_id | student_name     | course_name      | score |
+------------+-----------+------------------+------------------+-------+
|          1 |       101 | Rahul            | Database Systems |    85 |
|          1 |       102 | Rahul            | Web Dev          |    90 |
|          2 |       101 | Priya            | Database Systems |    92 |
+------------+-----------+------------------+------------------+-------+
```

#### 🔍 Partial Dependency Analysis:
- `student_name` depends **only** on `student_id` (Part of the key!).
- `course_name` depends **only** on `course_id` (Part of the key!).
- Only `score` depends on **both** `(student_id, course_id)`.

#### ✅ After 2NF (Decomposed into 3 Tables):

```sql
-- Table 1: Students
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL
);

-- Table 2: Courses
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

-- Table 3: Course Enrollments (Junction Table in 2NF)
CREATE TABLE course_enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    score INT CHECK (score BETWEEN 0 AND 100),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

> 📌 **Single-Column Primary Key Rule:** Any table that has a **single-column Primary Key** and is in 1NF is **automatically in 2NF** (because partial key dependencies cannot exist without a composite key)!

---

### 3️⃣ Third Normal Form (3NF) — No Transitive Dependencies

#### 📜 Rules for 3NF:
1. The table must already be in **2NF**.
2. **No Transitive Dependency:** No non-key column can depend on another non-key column ($A \rightarrow B \rightarrow C$).

#### ❌ Before 3NF (Violates 3NF — Transitive Dependency):

```text
employees_2nf
+--------+------------+---------------+-----------------+
| emp_id | first_name | department_id | department_name |
+--------+------------+---------------+-----------------+
|      1 | Rahul      |            10 | Engineering     |
|      2 | Priya      |            20 | Marketing       |
|      3 | Amit       |            10 | Engineering     | <-- Transitive Dependency!
+--------+------------+---------------+-----------------+
```

#### 🔍 Transitive Dependency Analysis:
- `emp_id` (Primary Key) determines `department_id` ($A \rightarrow B$).
- `department_id` determines `department_name` ($B \rightarrow C$).
- Therefore, `department_name` depends on `department_id`, which is a non-key attribute!

#### ✅ After 3NF (Decomposed into 2 Tables):

```sql
-- Table 1: Departments (3NF)
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL UNIQUE
);

-- Table 2: Employees (3NF)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
```

> 🎓 **Formal Definition of 3NF:** A relation is in 3NF if, for every functional dependency $X \rightarrow A$, at least one of the following holds:
> 1. $X \rightarrow A$ is a trivial functional dependency ($A \subseteq X$).
> 2. $X$ is a **Super Key**.
> 3. $A$ is a **Prime Attribute** (part of a candidate key).

---

## 🏗️ Complete Before-and-After E-Commerce Normalization Example

Let's normalize an unnormalized e-commerce order spreadsheet into a clean 4-table 3NF relational database.

### ❌ Unnormalized Order Record:
`flat_orders (order_id, customer_name, customer_email, order_date, product_name, catalog_price, purchased_unit_price, quantity)`

### ✅ Normalized 3NF MySQL Schema:

```sql
-- 1. Drop existing sample tables in reverse dependency order
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;

-- 2. Customers Table (Stores customer-specific facts)
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- 3. Products Table (Stores current catalog facts)
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    catalog_price DECIMAL(10, 2) NOT NULL CHECK (catalog_price > 0)
) ENGINE=InnoDB;

-- 4. Orders Table (Stores order header facts)
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    CONSTRAINT fk_orders_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- 5. Order Items Table (Junction Table for Line Items)
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    purchased_unit_price DECIMAL(10, 2) NOT NULL CHECK (purchased_unit_price >= 0),
    
    -- Composite Primary Key preventing duplicate product lines per order
    PRIMARY KEY (order_id, product_id),
    
    CONSTRAINT fk_items_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        
    CONSTRAINT fk_items_product
        FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB;
```

### 💡 Crucial Business Rule: Historical Point-in-Time Price vs Normalization
Notice that `purchased_unit_price` is stored inside `order_items`, while `catalog_price` is stored inside `products`.

**This is NOT a normalization flaw!** 
- `catalog_price` in `products` is the **current live price** of the item today.
- `purchased_unit_price` in `order_items` records the **historical price** charged at the exact moment the customer placed the order. If the product price increases next month, historical invoice totals must remain unchanged. Preserving historical point-in-time facts is a correct business rule.

---

## 🔗 Table Relationships & Junction Tables

Relational database tables connect using three cardinality patterns:

1. **One-to-One (1:1):** A row in Table A connects to at most one row in Table B (e.g. `users` and `user_portraits`).
2. **One-to-Many (1:N):** A row in Table A connects to multiple rows in Table B (e.g. `departments` to `employees`). Implemented by putting `department_id` Foreign Key in `employees`.
3. **Many-to-Many (N:M):** Multiple rows in Table A connect to multiple rows in Table B (e.g. `students` and `courses`).

### 🌉 Many-to-Many Junction Table (`student_courses`)

A Many-to-Many relationship **cannot** be implemented with a single foreign key column! It requires a **Junction Table / Linking Table** containing Foreign Keys referencing both parent tables.

```sql
-- Querying a Many-to-Many relationship using 2 INNER JOINs:
SELECT 
    s.student_name,
    c.course_name,
    e.score
FROM students AS s
INNER JOIN course_enrollments AS e ON s.student_id = e.student_id
INNER JOIN courses AS c ON e.course_id = c.course_id
WHERE s.student_id = 1;
```

---

## 🛠️ Common Mistakes & Denormalization Trade-offs

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **Storing Comma-Separated Values (1NF Violation)** | Storing `courses = 'Java, SQL, Web'` in a single cell. | Create a junction table with individual atomic rows per course. |
| **Partial Key Dependencies (2NF Violation)** | Including `student_name` in a table with composite key `(student_id, course_id)`. | Move `student_name` to a standalone `students` table. |
| **Transitive Dependencies (3NF Violation)** | Storing `department_name` alongside `department_id` in `employees`. | Move `department_name` to a standalone `departments` table. |
| **Confusing Historical Facts with Redundancy** | Deleting `purchased_price` from order items assuming it duplicates `catalog_price`. | Keep `purchased_price` on `order_items` to preserve point-in-time financial records. |
| **Over-Normalization** | Splitting simple attributes into dozens of micro-tables, causing slow 10-table `JOIN` queries. | Normalize to 3NF for transactional databases; use selective Denormalization for read-heavy Data Warehouses. |

---

## 🌍 Real-World Usage

- **OLTP Transactional Systems:** E-commerce applications, banking systems, and healthcare platforms normalize database schemas to 3NF to guarantee high write performance and zero data anomalies.
- **OLAP Data Warehouses:** Analytical reporting systems (e.g. Snowflake, Amazon Redshift) deliberately **denormalize** data into Star Schemas / Snowflake Schemas to speed up complex analytical aggregation queries.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Identifying 1NF Violation
A `contacts` table stores `full_name` and `phone_numbers = '9876543210, 9123456789'`. Explain why this violates 1NF and propose a normalized 1NF schema.

### Exercise 2: Identifying 2NF Partial Dependency
A `project_assignments` table has a Composite Primary Key `(emp_id, project_id)` and columns `project_name`, `hours_worked`. Identify the partial dependency and show the 2NF solution.

### Exercise 3: Identifying 3NF Transitive Dependency
An `inventory` table has Primary Key `item_id`, and columns `item_name`, `supplier_id`, `supplier_phone`. Identify the transitive dependency and write the 3NF SQL schema.

### Exercise 4: Designing a Junction Table
Write the `CREATE TABLE` statement for a junction table `doctor_patients` connecting `doctors (doctor_id)` and `patients (patient_id)`.

---

## 🎯 Mini Challenge: Order Item Dependency Analysis

Analyze the unnormalized table below:

`order_line (order_id, product_id, product_name, quantity, product_catalog_price, purchased_price)`

Assume the composite key is **`(order_id, product_id)`**.

**Your Tasks:**
1. Identify attributes dependent on `order_id` alone.
2. Identify attributes dependent on `product_id` alone.
3. Identify attributes dependent on the complete composite key `(order_id, product_id)`.
4. Provide the normalized 3NF schema tables.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
- **Violation:** Comma-separated `phone_numbers` are non-atomic.
- **1NF Fix:** Create a `customer_phones` table: `(phone_id INT PK, customer_id INT FK, phone_number VARCHAR(15))`.

#### Exercise 2 Solution:
- **Partial Dependency:** `project_name` depends *only* on `project_id` (part of key).
- **2NF Fix:** Split into `projects (project_id PK, project_name)` and `project_assignments (emp_id, project_id, hours_worked)`.

#### Exercise 3 Solution:
- **Transitive Dependency:** `item_id` $\rightarrow$ `supplier_id` $\rightarrow$ `supplier_phone`. `supplier_phone` depends on `supplier_id` (non-key).
- **3NF Fix:** Split into `suppliers (supplier_id PK, supplier_phone)` and `inventory (item_id PK, item_name, supplier_id FK)`.

#### Exercise 4 Solution:
```sql
CREATE TABLE doctor_patients (
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    PRIMARY KEY (doctor_id, patient_id, appointment_date),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);
```

#### Mini Challenge Solution:

1. **Order Attributes (`order_id` alone):** `order_date` (Header facts).
2. **Product Attributes (`product_id` alone):** `product_name`, `product_catalog_price`.
3. **Composite Key Attributes `(order_id, product_id)`:** `quantity`, `purchased_price` (Line item facts).
4. **Normalized 3NF Schema:**
   - `orders (order_id PK, customer_id FK, order_date)`
   - `products (product_id PK, product_name, product_catalog_price)`
   - `order_items (order_id FK, product_id FK, quantity, purchased_price, PRIMARY KEY (order_id, product_id))`

</details>

---

## 🔗 Related Topics

- [Primary Keys & Foreign Keys](05-keys.html)
- [Set Operations: `UNION` & `EXCEPT`](18-set-operations.html)
- [SQL Views & Virtual Tables](20-views.html)

---

## 🧭 Navigation

[← Previous: Set Operations](18-set-operations.html) | [SQL Home](./) | [Next: Views →](20-views.html)
