---
layout: default
title: "20 views"
---

# Chapter 20 — Views & Virtual Tables in SQL

> 🟡 Intermediate

---

## 📖 Definition

An **SQL View** is a named virtual table defined by a stored `SELECT` query. Unlike physical tables, a standard (regular) view does not store a separate copy of data rows on disk. Instead, whenever a query is executed against a view, the database engine evaluates the underlying `SELECT` statement dynamically according to current transaction isolation and data visibility rules.

Views allow developers and database administrators to:
- **Simplify Complex Queries**: Encapsulate multi-table joins, aggregations, and business logic behind a clean table-like interface.
- **Expose Selected Columns & Rows**: Present tailored subsets of data to specific application modules or user groups.
- **Provide Interface Stability**: Decouple client applications from changes in underlying physical schema designs.

> [!IMPORTANT]
> **Security Clarification**: Hiding sensitive columns (such as `salary` or `ssn`) in a view definition is **not sufficient on its own** to enforce security. If database users hold direct `SELECT` privileges on underlying base tables, they can still query sensitive data directly. True access control requires combining views with database privilege management (`GRANT` / `REVOKE`) and view security attributes (`SQL SECURITY DEFINER` or `INVOKER`).

---

## 🌐 Multilingual Explanation

### English
A standard view acts as a virtual window over physical tables. It stores the query definition rather than result data. When you query a view, the database processes the view's query against base tables, providing query simplification, column restriction, and schema abstraction.

### Hindi (Roman Script)
SQL View ek virtual table hoti hai jo kisi stored `SELECT` query par aadharit hoti hai. Yeh disk par alag se data rows store nahi karti. Jab bhi aap view ko query karte hain, database background mein original base tables se data fetch karta hai. Views complex joins ko aasan banane aur specific columns dikhane ke liye use hote hain.

### Marathi (Roman Script)
SQL View mhanje ek virtual table ji साठवलेल्या (stored) `SELECT` query var aadharit aste. Ti disk var veglatha data store karat nahi. Jevha tumhi view query karta, tevha database original base tables madhun ch data dakhawto. Complex joins sopa karnyasathi aani thavik columns dakhawnyasathi views cha vapar hoto.

---

## 🤔 Why Do We Use Views?

1. **Query Simplification & Code Reuse**: Encapsulate multi-table `JOIN` statements, `GROUP BY` aggregations, and complex filters into a single reusable object (`SELECT * FROM view_name`).
2. **Column-Level & Row-Level Abstraction**: Present tailored views containing only public columns or active rows while omitting restricted fields.
3. **Schema Independence**: Refactor physical base tables (e.g. splitting or renaming columns) without breaking legacy queries that access the original view name.
4. **Standardized Business Rules**: Ensure all reporting tools and developers use identical, centralized calculations (such as tax formulas or lifetime value).

---

## 📝 Types of Views in SQL

| View Type | Storage Mechanism | Support in MySQL | Use Case |
| :--- | :--- | :--- | :--- |
| **Standard (Virtual) View** | Stores only the `SELECT` query definition. | ✅ Full Support (`CREATE VIEW`) | Query simplification, abstraction, column restriction. |
| **Updatable View** | Maps modifications to underlying base tables. | ✅ Supported (for eligible 1-to-1 rows) | Updating base table data through simplified views. |
| **Materialized View** | Stores pre-computed query results on disk. | ❌ No Native Support (Manual workaround needed) | Caching heavy reporting queries in Data Warehousing. |

> [!NOTE]
> **MySQL Materialized View Clarification**: MySQL does **not** provide native `CREATE MATERIALIZED VIEW` syntax. In MySQL environments (such as WampServer or phpMyAdmin), developers approximate materialized views by creating a physical summary table and refreshing it periodically using a stored procedure or an Event Scheduler.

---

## 📊 Reproducible Sample Setup Data

Run this setup script to create sample tables (`employees`, `customers`, `orders`) for the examples in this chapter.

```sql
-- Clean up pre-existing tables
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS employees;

-- 1. Create employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department_id INT NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    ssn VARCHAR(11) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- 2. Populate employees
INSERT INTO employees 
(emp_id, first_name, last_name, email, department_id, job_title, salary, ssn, is_active) 
VALUES
(1, 'Rahul', 'Sharma', 'rahul@example.com', 4, 'Software Engineer', 85000.00, '123-45-6789', TRUE),
(2, 'Priya', 'Patel', 'priya@example.com', 4, 'Senior Developer', 95000.00, '234-56-7890', TRUE),
(3, 'Amit', 'Verma', 'amit@example.com', 2, 'Marketing Specialist', 60000.00, '345-67-8901', TRUE),
(4, 'Neha', 'Gupta', 'neha@example.com', 4, 'QA Engineer', 70000.00, '456-78-9012', FALSE),
(5, 'Vikram', 'Singh', 'vikram@example.com', 1, 'HR Manager', 75000.00, '567-89-0123', TRUE);

-- 3. Create customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

-- 4. Create orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 5. Populate customers
INSERT INTO customers (customer_id, first_name, last_name, country) VALUES
(101, 'Aarav', 'Mehta', 'India'),
(102, 'Sophia', 'Miller', 'USA'),
(103, 'Karan', 'Johar', 'India'),
(104, 'Emma', 'Wilson', 'UK'); -- Customer 104 has 0 orders

-- 6. Populate orders
INSERT INTO orders (order_id, customer_id, order_date, total_amount) VALUES
(5001, 101, '2026-01-15', 250.00),
(5002, 101, '2026-02-10', 450.00),
(5003, 102, '2026-01-20', 1200.00),
(5004, 103, '2026-02-01', 800.00),
(5005, 101, '2026-02-28', 350.00);
```

---

## 💡 Practical Examples

### Example 1: Creating an Employee Directory View (Column & Row Restriction)

Expose active employee contact details while omitting sensitive `salary` and `ssn` columns:

```sql
-- Create or replace employee directory view
CREATE OR REPLACE VIEW public_employee_directory AS
SELECT 
    emp_id,
    first_name,
    last_name,
    email,
    department_id,
    job_title
FROM employees
WHERE is_active = TRUE;

-- Query the view with a filter and ordering
SELECT first_name, last_name, email, job_title
FROM public_employee_directory
WHERE department_id = 4
ORDER BY last_name ASC;
```

#### Output
| first_name | last_name | email | job_title |
| :--- | :--- | :--- | :--- |
| Priya | Patel | priya@example.com | Senior Developer |
| Rahul | Sharma | rahul@example.com | Software Engineer |

#### Explanation
- `public_employee_directory` filters out inactive employees (`is_active = FALSE`, omitting Neha Gupta) and excludes sensitive `salary` and `ssn` fields.
- **Enforcing Security**: Restricting columns in a view prevents those columns from being requested through the view. To enforce complete security, grant application users `SELECT` privileges on `public_employee_directory` while revoking direct `SELECT` access on the base `employees` table:
  ```sql
  -- Example MySQL Privilege Commands (Requires Administrative Rights)
  REVOKE SELECT ON app_db.employees FROM 'app_user'@'localhost';
  GRANT SELECT ON app_db.public_employee_directory TO 'app_user'@'localhost';
  ```

---

### Example 2: Encapsulating Customer Sales Aggregations

Simplify multi-table reporting across `customers` and `orders`:

```sql
CREATE OR REPLACE VIEW customer_sales_summary AS
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.country,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0.00) AS lifetime_spend,
    MAX(o.order_date) AS last_order_date
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country;

-- Query high-value customers directly from the view
SELECT customer_name, country, total_orders, lifetime_spend, last_order_date
FROM customer_sales_summary
WHERE lifetime_spend > 500.00
ORDER BY lifetime_spend DESC;
```

#### Output
| customer_name | country | total_orders | lifetime_spend | last_order_date |
| :--- | :--- | :---: | :---: | :--- |
| Sophia Miller | USA | 1 | 1200.00 | 2026-01-20 |
| Aarav Mehta | India | 3 | 1050.00 | 2026-02-28 |
| Karan Johar | India | 1 | 800.00 | 2026-02-01 |

#### Explanation
- **`LEFT JOIN` & `COUNT(o.order_id)`**: `COUNT(o.order_id)` counts non-NULL order IDs. For customer 104 (Emma Wilson, who has no orders), `COUNT(o.order_id)` evaluates to `0` and `COALESCE(SUM(...), 0.00)` evaluates to `0.00`. Using `COUNT(*)` would incorrectly report `1` order for unmatched customers because `LEFT JOIN` produces 1 combined row with NULLs.

---

## ✏️ Updatable Views in MySQL

In MySQL, data modifications (`UPDATE`, `DELETE`, `INSERT`) can be executed through a view to alter underlying base tables under specific conditions.

### Rules for Updatable Views in MySQL:
1. **One-to-One Row Mapping**: The view must have a direct 1-to-1 relationship with rows in the base table.
2. **Disallowed Clauses**: The view definition **CANNOT** contain:
   - Aggregate functions (`SUM`, `COUNT`, `AVG`, `MIN`, `MAX`)
   - `GROUP BY` or `HAVING`
   - `DISTINCT`
   - `UNION` or `UNION ALL`
   - Subqueries in the `SELECT` list
3. **Join Views**: A view containing a `JOIN` may be updated in MySQL **only** if the `UPDATE` statement modifies columns from a single key-preserved base table at a time.
4. **Insertability Restrictions**: Inserting rows through a view requires all non-nullable base table columns without default values to be present in the view.

### Demonstration: Updating Data Through a View

```sql
-- 1. Check Rahul's email in the base table before update
SELECT emp_id, first_name, email FROM employees WHERE emp_id = 1;
-- Result: rahul@example.com

-- 2. Issue UPDATE through the updatable view
UPDATE public_employee_directory
SET email = 'rahul.sharma@company.com'
WHERE emp_id = 1;

-- 3. Verify that the change was applied to the underlying 'employees' table
SELECT emp_id, first_name, email FROM employees WHERE emp_id = 1;
-- Result: rahul.sharma@company.com
```

---

## 🛡️ View Integrity with `WITH CHECK OPTION`

When updating or inserting data through a filtered view, `WITH CHECK OPTION` prevents modifications that would cause the affected rows to no longer satisfy the view's `WHERE` clause.

```sql
-- Create an active employees view with CHECK OPTION
CREATE OR REPLACE VIEW active_tech_staff AS
SELECT emp_id, first_name, last_name, email, department_id, is_active
FROM employees
WHERE department_id = 4 AND is_active = TRUE
WITH CHECK OPTION;

-- Attempting to update a row so it no longer satisfies 'is_active = TRUE':
UPDATE active_tech_staff
SET is_active = FALSE
WHERE emp_id = 1;
```

#### Behavior & Result
MySQL rejects the update and raises an error:
```text
ERROR 1369 (HY000): CHECK OPTION failed 'app_db.active_tech_staff'
```

---

## 🐘 Materialized Views Comparison (PostgreSQL Specific)

While MySQL does not support native materialized views, PostgreSQL provides built-in syntax to cache query results physically on disk:

```sql
-- PostgreSQL-Specific Syntax (NOT Executable in MySQL / WampServer)
CREATE MATERIALIZED VIEW mv_monthly_sales AS
SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    COUNT(order_id) AS total_orders,
    SUM(total_amount) AS total_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- Refreshing cached results in PostgreSQL:
REFRESH MATERIALIZED VIEW mv_monthly_sales;
```

> [!TIP]
> **MySQL Workaround**: In MySQL, create a physical summary table (e.g. `summary_monthly_sales`) and populate it using a `TRUNCATE TABLE` + `INSERT INTO ... SELECT` query executed via a MySQL Stored Procedure or Scheduled Event.

---

## ⚠️ Common Mistakes & Misconceptions

1. **Assuming Regular Views Store Data Copies**: Standard views store only the `SELECT` query definition. They execute against base tables dynamically upon every query.
2. **Assuming Views Automatically Secure Tables**: Creating a view that excludes sensitive columns does not prevent users from querying the base table directly unless underlying table permissions are revoked.
3. **Attempting to Insert into Aggregate Views**: Executing `INSERT` or `UPDATE` on views containing `GROUP BY` or aggregates fails with `The target table of the INSERT is not insertable-into`.
4. **Using PostgreSQL Materialized View Syntax in MySQL**: Running `CREATE MATERIALIZED VIEW` in MySQL / phpMyAdmin throws a syntax error.
5. **Using `COUNT(*)` in `LEFT JOIN` Summary Views**: `COUNT(*)` counts all join output rows, incorrectly returning `1` order for customers with 0 orders. Use `COUNT(o.order_id)` instead.
6. **Assuming Nested Views Always Benefit Performance**: Creating views on top of other views increases query complexity and can complicate query optimizer merging.

---

## 🧪 Step-by-Step Practice Exercises

Run the setup script provided in this chapter before attempting these exercises.

---

### Exercise 1: Create a Department View
**Task**: Create a view named `tech_department_view` that selects `emp_id`, `first_name`, `last_name`, `email`, and `job_title` for employees in `department_id = 4`.

```sql
-- Answer
CREATE OR REPLACE VIEW tech_department_view AS
SELECT emp_id, first_name, last_name, email, job_title
FROM employees
WHERE department_id = 4;
```

---

### Exercise 2: Query a View with Filtering and Sorting
**Task**: Query `tech_department_view` to find employees whose `job_title` contains `'Engineer'`, sorted by `first_name ASC`.

```sql
-- Answer
SELECT emp_id, first_name, last_name, job_title
FROM tech_department_view
WHERE job_title LIKE '%Engineer%'
ORDER BY first_name ASC;
```

#### Expected Output
| emp_id | first_name | last_name | job_title |
| :--- | :--- | :--- | :--- |
| 1 | Rahul | Sharma | Software Engineer |

*(Note: Neha Gupta is inactive in sample data and excluded if filtered by active directory views).*

---

### Exercise 3: Country Sales Summary View
**Task**: Create a view named `country_sales_summary` that aggregates total customers, total orders, and total revenue grouped by `country`. Ensure countries with 0 orders report `0.00` total revenue.

```sql
-- Answer
CREATE OR REPLACE VIEW country_sales_summary AS
SELECT 
    c.country,
    COUNT(DISTINCT c.customer_id) AS total_customers,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0.00) AS total_revenue
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
GROUP BY c.country;
```

#### Expected Output
| country | total_customers | total_orders | total_revenue |
| :--- | :---: | :---: | :---: |
| India | 2 | 4 | 1850.00 |
| UK | 1 | 0 | 0.00 |
| USA | 1 | 1 | 1200.00 |

---

### Exercise 4: Update Data Through a View
**Task**: Update Priya Patel's (`emp_id = 2`) job title to `'Lead Software Architect'` using `public_employee_directory`.

```sql
-- Answer
UPDATE public_employee_directory
SET job_title = 'Lead Software Architect'
WHERE emp_id = 2;

-- Verify change on base table
SELECT emp_id, first_name, job_title FROM employees WHERE emp_id = 2;
```

#### Expected Output
| emp_id | first_name | job_title |
| :--- | :--- | :--- |
| 2 | Priya | Lead Software Architect |

---

### Exercise 5: Enforce Boundaries with `WITH CHECK OPTION`
**Task**: Create a view named `marketing_staff_view` for `department_id = 2` `WITH CHECK OPTION`. Demonstrate an update that succeeds and an update that fails.

```sql
-- Answer
CREATE OR REPLACE VIEW marketing_staff_view AS
SELECT emp_id, first_name, last_name, department_id, job_title
FROM employees
WHERE department_id = 2
WITH CHECK OPTION;

-- 1. Succeeds (Department ID remains 2)
UPDATE marketing_staff_view SET job_title = 'Senior Marketing Manager' WHERE emp_id = 3;

-- 2. Fails with CHECK OPTION error (Attempting to reassign to department_id = 1)
-- UPDATE marketing_staff_view SET department_id = 1 WHERE emp_id = 3;
```

---

## 🎯 Mini Challenge

Create a view named `department_salary_stats` that displays each department's ID, name, active employee count, average salary (rounded to 2 decimal places), and maximum salary.

### Setup Tables
```sql
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments VALUES
(1, 'HR'), (2, 'Marketing'), (4, 'Engineering');

INSERT INTO employees (emp_id, first_name, last_name, department_id, salary, is_active) VALUES
(1, 'Rahul', 'Sharma', 4, 85000.00, TRUE),
(2, 'Priya', 'Patel', 4, 95000.00, TRUE),
(3, 'Amit', 'Verma', 2, 60000.00, TRUE),
(4, 'Neha', 'Gupta', 4, 70000.00, FALSE),
(5, 'Vikram', 'Singh', 1, 75000.00, TRUE);
```

### Challenge Solution

```sql
CREATE OR REPLACE VIEW department_salary_stats AS
SELECT 
    d.department_id,
    d.department_name,
    COUNT(e.emp_id) AS emp_count,
    ROUND(AVG(e.salary), 2) AS avg_salary,
    MAX(e.salary) AS max_salary
FROM departments AS d
LEFT JOIN employees AS e 
    ON d.department_id = e.department_id AND e.is_active = TRUE
GROUP BY d.department_id, d.department_name;

-- Query the view
SELECT * FROM department_salary_stats ORDER BY department_id;
```

#### Expected Output
| department_id | department_name | emp_count | avg_salary | max_salary |
| :--- | :--- | :---: | :---: | :---: |
| 1 | HR | 1 | 75000.00 | 75000.00 |
| 2 | Marketing | 1 | 60000.00 | 60000.00 |
| 4 | Engineering | 2 | 90000.00 | 95000.00 |

> [!NOTE]
> **Why `department_salary_stats` Cannot Be Updated or Inserted**:
> This view contains aggregate functions (`COUNT`, `AVG`, `MAX`), a `GROUP BY` clause, and a `LEFT JOIN`. In MySQL, aggregate views do not have a 1-to-1 mapping to base table rows, so the database engine cannot determine how to assign inserted or updated row values to individual underlying records.

---

## 🔗 Related Topics

- [SQL Joins & Relationships](14-joins.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Normalization](19-normalization.html) | [Next: Indexes & Performance →](21-indexes-and-performance.html)
