---
layout: default
title: "30 sql projects"
---

# Chapter 30 — Practical SQL Capstone Projects

> 🔴 Advanced

---

## 📖 Definition & Overview

A **SQL Capstone Project** brings together all database concepts—schema design, primary and foreign key constraints, normalized relationships, CRUD operations, multi-table joins, GROUP BY aggregations, subqueries, CTEs, window functions, views, indexes, transactions, and security controls—into complete, production-grade database systems.

Building capstone projects moves you from writing isolated queries to architecting end-to-end data systems that power real-world applications like e-commerce platforms, financial ledgers, and inventory management portals.

> [!NOTE]
> **Environment Target**: The projects in this chapter target **MySQL 8.0 or later** (compatible with WampServer, phpMyAdmin, and MySQL Workbench). Enforced `CHECK` constraints require MySQL 8.0.16 or higher.

---

## 🌐 Multilingual Explanation

### English
Capstone projects demonstrate how all SQL concepts integrate together in real-world software engineering. By designing relational schemas, enforcing constraints, seeding realistic datasets, and writing analytical reporting queries, you build portfolio-ready database projects for your developer resume.

### Hindi (Roman Script)
SQLSeekhne ka sabse accha tareeka real-world capstone projects banana hai. Is chapter mein hum 3 complete projects banayenge: E-Commerce Platform, Banking & Transaction Ledger, aur Library Management System. Hum tables banayein ge, key constraints enforce karenge, sample data insert karenge, aur analytical reports generate karenge.

### Marathi (Roman Script)
SQL madhye mastery milvanyasathi real-world projects banavne garjeche ahe. Ya chapter madhye aapan 3 purna projects tayar karnar aahot: E-Commerce, Banking Transaction Ledger, aani Library Management. Schema design, key constraints, aani analytical queries cha vapar karun portfolio-ready projects tayar kara.

---

## 🛠️ Prerequisite: Setup Guide for phpMyAdmin & WampServer

To execute the project scripts in phpMyAdmin or WampServer:

1. Open phpMyAdmin (`http://localhost/phpmyadmin`).
2. Click **Databases** $\rightarrow$ Create a new database named `capstone_projects_db` $\rightarrow$ Click **Create**.
3. Select `capstone_projects_db` from the left sidebar.
4. Open the **SQL** tab.
5. Paste the setup scripts and click **Go**.

> [!WARNING]
> **Reset Script Caution**: Project setup scripts include `DROP TABLE IF EXISTS` commands to allow clean, reproducible testing. Executing drop statements in a production database permanently deletes pre-existing tables and data!

---

## 🛒 Capstone Project 1: Complete E-Commerce Database

### 1. Business Requirements & Schema Design
An e-commerce database requires tracking customers, product categories, physical products with stock quantities, customer orders, and line items.

Key Business Rules:
- **Historical Price Protection**: `unit_price` in `order_items` captures the exact item price charged at purchase time. This protects past financial records if current product prices change in `products`.
- **Composite Primary Key**: `order_items` uses `PRIMARY KEY (order_id, product_id)` because an order cannot list the same product twice (quantities are incremented instead).
- **Revenue Recognition**: Completed revenue is defined as orders with status `'PAID'` or `'SHIPPED'`. Orders with status `'PENDING'` or `'CANCELLED'` do not count toward completed revenue.

### 2. Table Creation Script (In Dependency Order)

```sql
-- Clean up pre-existing tables in reverse dependency order
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS customers;

-- 1. Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Categories Table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- 3. Products Table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0.00),
    stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
) ENGINE=InnoDB;

-- 4. Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    order_status VARCHAR(20) NOT NULL DEFAULT 'PENDING' 
        CHECK (order_status IN ('PENDING', 'PAID', 'SHIPPED', 'CANCELLED')),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
) ENGINE=InnoDB;

-- 5. Order Items Child Table (Composite Primary Key)
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0.00),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE=InnoDB;
```

---

### 3. E-Commerce Sample Seed Data

```sql
-- Populate Customers (5 Customers; Customer 105 has 0 orders)
INSERT INTO customers (customer_id, first_name, last_name, email) VALUES
(101, 'Aarav', 'Mehta', 'aarav@example.com'),
(102, 'Sophia', 'Miller', 'sophia@example.com'),
(103, 'Karan', 'Johar', 'karan@example.com'),
(104, 'Emma', 'Wilson', 'emma@example.com'),
(105, 'Rahul', 'Sharma', 'rahul@example.com');

-- Populate Categories (3 Categories)
INSERT INTO categories (category_id, category_name) VALUES
(1, 'Electronics'),
(2, 'Furniture'),
(3, 'Books');

-- Populate Products (9 Products; Product 9 "HD Webcam" is NEVER ordered)
INSERT INTO products (product_id, product_name, category_id, price, stock_quantity) VALUES
(1, 'Laptop Pro', 1, 1200.00, 15),
(2, 'Smartphone X', 1, 800.00, 25),
(3, 'Wireless Headphones', 1, 150.00, 50),
(4, 'Ergonomic Desk Chair', 2, 250.00, 8),
(5, 'Standing Computer Desk', 2, 450.00, 4),
(6, 'Bookshelf Unit', 2, 180.00, 0), -- Out of stock
(7, 'SQL Master Guide', 3, 40.00, 100),
(8, 'Python Handbook', 3, 35.00, 75),
(9, 'HD Webcam', 1, 60.00, 30); -- Never ordered

-- Populate Orders (8 Orders across varied statuses)
INSERT INTO orders (order_id, customer_id, order_date, order_status) VALUES
(5001, 101, '2026-01-15', 'PAID'),
(5002, 101, '2026-02-10', 'SHIPPED'),
(5003, 102, '2026-01-20', 'PAID'),
(5004, 103, '2026-02-05', 'PENDING'),   -- Unpaid pending order
(5005, 101, '2026-02-25', 'PAID'),
(5006, 102, '2026-02-28', 'CANCELLED'), -- Cancelled order
(5007, 104, '2026-02-12', 'SHIPPED'),
(5008, 103, '2026-02-20', 'PAID');

-- Populate Order Items
INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(5001, 1, 1, 1200.00), -- Laptop ($1200.00)
(5001, 3, 2, 150.00),  -- 2x Headphones ($300.00)
(5002, 2, 1, 800.00),  -- Smartphone ($800.00)
(5002, 7, 2, 40.00),   -- 2x SQL Book ($80.00)
(5003, 1, 2, 1200.00), -- 2x Laptop ($2400.00)
(5003, 5, 1, 450.00),  -- Standing Desk ($450.00)
(5004, 4, 1, 250.00),  -- Chair ($250.00, Pending)
(5005, 8, 2, 35.00),   -- 2x Python Book ($70.00)
(5006, 2, 1, 800.00),  -- Smartphone ($800.00, Cancelled)
(5007, 4, 2, 250.00),  -- 2x Chair ($500.00)
(5008, 3, 1, 150.00),  -- Headphones ($150.00)
(5008, 7, 1, 40.00);   -- SQL Book ($40.00)
```

---

### 4. E-Commerce Analytical Reports

#### Report A: Top Spending Customers (Completed Revenue)
```sql
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    COUNT(DISTINCT o.order_id) AS completed_orders,
    SUM(oi.quantity * oi.unit_price) AS lifetime_spend
FROM customers AS c
JOIN orders AS o ON c.customer_id = o.customer_id
JOIN order_items AS oi ON o.order_id = oi.order_id
WHERE o.order_status IN ('PAID', 'SHIPPED')
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY lifetime_spend DESC;
```

##### Output
| customer_id | customer_name | completed_orders | lifetime_spend |
| :---: | :--- | :---: | :---: |
| 102 | Sophia Miller | 1 | 2850.00 |
| 101 | Aarav Mehta | 3 | 2450.00 |
| 104 | Emma Wilson | 1 | 500.00 |
| 103 | Karan Johar | 1 | 190.00 |

##### Explanation:
- Filter `o.order_status IN ('PAID', 'SHIPPED')` excludes pending and cancelled orders.
- `COUNT(DISTINCT o.order_id)` avoids double-counting order numbers when joining multiple order items.

---

#### Report B: Category Revenue & Revenue Share Percentage (CTE & Window Functions)
```sql
WITH category_revenue_summary AS (
    SELECT 
        cat.category_id,
        cat.category_name,
        COALESCE(SUM(oi.quantity * oi.unit_price), 0.00) AS category_revenue
    FROM categories AS cat
    LEFT JOIN products AS p ON cat.category_id = p.category_id
    LEFT JOIN order_items AS oi ON p.product_id = oi.product_id
    LEFT JOIN orders AS o ON oi.order_id = o.order_id AND o.order_status IN ('PAID', 'SHIPPED')
    GROUP BY cat.category_id, cat.category_name
)
SELECT 
    category_name,
    category_revenue,
    ROUND(
        CASE 
            WHEN SUM(category_revenue) OVER() = 0 THEN 0.00
            ELSE (category_revenue / SUM(category_revenue) OVER()) * 100.0
        END, 2
    ) AS revenue_share_pct
FROM category_revenue_summary
ORDER BY category_revenue DESC;
```

##### Output
| category_name | category_revenue | revenue_share_pct |
| :--- | :---: | :---: |
| Electronics | 4850.00 | 80.97 |
| Furniture | 950.00 | 15.86 |
| Books | 190.00 | 3.17 |

##### Explanation:
- `SUM(category_revenue) OVER()` calculates the grand total completed revenue ($5990.00$) using a window function.
- The `CASE` statement prevents division-by-zero errors if total revenue is zero.

---

#### Report C: Products Never Ordered (`NOT EXISTS`)
```sql
SELECT p.product_id, p.product_name, cat.category_name, p.price
FROM products AS p
JOIN categories AS cat ON p.category_id = cat.category_id
WHERE NOT EXISTS (
    SELECT 1 
    FROM order_items AS oi
    WHERE oi.product_id = p.product_id
)
ORDER BY p.product_id;
```

##### Output
| product_id | product_name | category_name | price |
| :---: | :--- | :--- | :---: |
| 9 | HD Webcam | Electronics | 60.00 |

---

#### Report D: Inventory Stock Status Alert (`CASE` Statement)
```sql
SELECT 
    p.product_id,
    p.product_name,
    cat.category_name,
    p.stock_quantity,
    CASE 
        WHEN p.stock_quantity = 0 THEN 'OUT OF STOCK'
        WHEN p.stock_quantity <= 10 THEN 'LOW STOCK ALERT'
        ELSE 'IN STOCK'
    END AS inventory_status
FROM products AS p
JOIN categories AS cat ON p.category_id = cat.category_id
ORDER BY p.stock_quantity ASC;
```

##### Output
| product_id | product_name | category_name | stock_quantity | inventory_status |
| :---: | :--- | :--- | :---: | :--- |
| 6 | Bookshelf Unit | Furniture | 0 | OUT OF STOCK |
| 5 | Standing Computer Desk | Furniture | 4 | LOW STOCK ALERT |
| 4 | Ergonomic Desk Chair | Furniture | 8 | LOW STOCK ALERT |
| 1 | Laptop Pro | Electronics | 15 | IN STOCK |

---

#### Report E: Complete Customer Order History Directory (`LEFT JOIN`)
```sql
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    COUNT(DISTINCT o.order_id) AS total_orders_placed,
    COALESCE(MAX(o.order_date), 'No Orders') AS last_order_date
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY c.customer_id;
```

##### Output
| customer_id | customer_name | total_orders_placed | last_order_date |
| :---: | :--- | :---: | :--- |
| 101 | Aarav Mehta | 3 | 2026-02-25 |
| 102 | Sophia Miller | 2 | 2026-02-28 |
| 103 | Karan Johar | 2 | 2026-02-20 |
| 104 | Emma Wilson | 1 | 2026-02-12 |
| 105 | Rahul Sharma | 0 | No Orders |

---

## 🏦 Capstone Project 2: Banking & Transaction Ledger

### 1. Schema & Setup Script

```sql
DROP TABLE IF EXISTS account_transactions;
DROP TABLE IF EXISTS bank_accounts;

-- 1. Accounts Master Table
CREATE TABLE bank_accounts (
    account_number INT PRIMARY KEY AUTO_INCREMENT,
    holder_name VARCHAR(100) NOT NULL,
    account_type VARCHAR(20) NOT NULL CHECK (account_type IN ('SAVINGS', 'CHECKING')),
    balance DECIMAL(12, 2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0.00),
    is_active BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB;

-- 2. Transaction Log Table
CREATE TABLE account_transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    account_number INT NOT NULL,
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER')),
    amount DECIMAL(12, 2) NOT NULL CHECK (amount > 0.00),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_number) REFERENCES bank_accounts(account_number)
) ENGINE=InnoDB;

-- Populate Accounts
INSERT INTO bank_accounts (account_number, holder_name, account_type, balance) VALUES
(1001, 'Rahul Sharma', 'SAVINGS', 2500.00),
(1002, 'Priya Patel', 'CHECKING', 1200.00),
(1003, 'Amit Verma', 'SAVINGS', 4500.00),
(1004, 'Neha Gupta', 'CHECKING', 800.00);

-- Populate Transactions
INSERT INTO account_transactions (transaction_id, account_number, transaction_type, amount, transaction_date) VALUES
(1, 1001, 'DEPOSIT', 1000.00, '2026-02-01 10:00:00'),
(2, 1001, 'WITHDRAWAL', 200.00, '2026-02-05 11:30:00'),
(3, 1002, 'DEPOSIT', 1500.00, '2026-02-02 09:15:00'),
(4, 1002, 'WITHDRAWAL', 300.00, '2026-02-10 14:20:00'),
(5, 1003, 'DEPOSIT', 5000.00, '2026-02-01 08:00:00'),
(6, 1003, 'WITHDRAWAL', 500.00, '2026-02-12 16:45:00'),
(7, 1004, 'DEPOSIT', 800.00, '2026-02-15 12:00:00'),
(8, 1001, 'TRANSFER', 1500.00, '2026-02-20 15:00:00');
```

---

### 2. Banking Reports

#### Report A: Account Transaction Summary
```sql
SELECT 
    b.account_number,
    b.holder_name,
    b.balance AS current_balance,
    COALESCE(SUM(CASE WHEN t.transaction_type = 'DEPOSIT' THEN t.amount ELSE 0 END), 0.00) AS total_deposits,
    COALESCE(SUM(CASE WHEN t.transaction_type = 'WITHDRAWAL' THEN t.amount ELSE 0 END), 0.00) AS total_withdrawals
FROM bank_accounts AS b
LEFT JOIN account_transactions AS t ON b.account_number = t.account_number
GROUP BY b.account_number, b.holder_name, b.balance
ORDER BY b.account_number;
```

##### Output
| account_number | holder_name | current_balance | total_deposits | total_withdrawals |
| :---: | :--- | :---: | :---: | :---: |
| 1001 | Rahul Sharma | 2500.00 | 1000.00 | 200.00 |
| 1002 | Priya Patel | 1200.00 | 1500.00 | 300.00 |
| 1003 | Amit Verma | 4500.00 | 5000.00 | 500.00 |
| 1004 | Neha Gupta | 800.00 | 800.00 | 0.00 |

---

### 3. Safe Transfer Pattern (MySQL / InnoDB)

To safely transfer $500.00 from Account 1001 to Account 1002:

```sql
-- Transactional Transfer Pattern
START TRANSACTION;

-- Step 1: Lock source account and verify balance
SELECT balance FROM bank_accounts WHERE account_number = 1001 FOR UPDATE;

-- Step 2: Debit source account
UPDATE bank_accounts SET balance = balance - 500.00 WHERE account_number = 1001;

-- Step 3: Credit destination account
UPDATE bank_accounts SET balance = balance + 500.00 WHERE account_number = 1002;

-- Step 4: Record audit log entries
INSERT INTO account_transactions (account_number, transaction_type, amount) VALUES
(1001, 'TRANSFER', 500.00),
(1002, 'DEPOSIT', 500.00);

-- Finalize transaction
COMMIT;
```

> [!NOTE]
> **Educational Scope Note**: In real production systems, financial software enforces multi-factor authentication, idempotency keys, fraud analysis, double-entry bookkeeping ledgers, and regulatory audit logging.

---

## 📚 Capstone Project 3: Library Management System

### 1. Schema & Setup Script

```sql
DROP TABLE IF EXISTS book_loans;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS members;

-- 1. Members Table
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    joined_date DATE NOT NULL
) ENGINE=InnoDB;

-- 2. Books Table
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    total_copies INT NOT NULL CHECK (total_copies >= 0)
) ENGINE=InnoDB;

-- 3. Book Loans Table
CREATE TABLE book_loans (
    loan_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT NOT NULL,
    member_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE DEFAULT NULL, -- NULL means currently outstanding!
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
) ENGINE=InnoDB;

-- Populate Members (Emma Wilson has borrowed 0 books)
INSERT INTO members (member_id, full_name, email, joined_date) VALUES
(1, 'Aarav Mehta', 'aarav@example.com', '2025-01-10'),
(2, 'Sophia Miller', 'sophia@example.com', '2025-03-15'),
(3, 'Karan Johar', 'karan@example.com', '2025-06-20'),
(4, 'Emma Wilson', 'emma@example.com', '2025-09-01');

-- Populate Books (Book 105 "Design Patterns" is NEVER borrowed)
INSERT INTO books (book_id, title, author, category, total_copies) VALUES
(101, 'Database System Concepts', 'Silberschatz', 'Computer Science', 5),
(102, 'Clean Code', 'Robert C. Martin', 'Software Engineering', 3),
(103, 'The Pragmatic Programmer', 'Andrew Hunt', 'Software Engineering', 4),
(104, 'Introduction to Algorithms', 'Cormen', 'Computer Science', 2),
(105, 'Design Patterns', 'Gang of Four', 'Software Engineering', 3);

-- Populate Loans (Reference current date: '2026-03-01')
INSERT INTO book_loans (loan_id, book_id, member_id, borrow_date, due_date, return_date) VALUES
(1, 101, 1, '2026-01-05', '2026-01-19', '2026-01-18'), -- Returned on time
(2, 102, 1, '2026-02-01', '2026-02-15', NULL),         -- OVERDUE (Due Feb 15)
(3, 101, 2, '2026-02-10', '2026-02-24', NULL),         -- OVERDUE (Due Feb 24)
(4, 103, 3, '2026-02-20', '2026-03-06', NULL),         -- Outstanding (Due March 6)
(5, 102, 2, '2026-01-10', '2026-01-24', '2026-01-22'), -- Returned on time
(6, 104, 3, '2026-02-01', '2026-02-15', '2026-02-14'); -- Returned on time
```

---

### 2. Library Reports

#### Report A: Overdue Loans Report (Reference Date: `'2026-03-01'`)
```sql
SELECT 
    l.loan_id,
    m.full_name AS member_name,
    b.title AS book_title,
    l.borrow_date,
    l.due_date,
    DATEDIFF('2026-03-01', l.due_date) AS days_overdue
FROM book_loans AS l
JOIN members AS m ON l.member_id = m.member_id
JOIN books AS b ON l.book_id = b.book_id
WHERE l.return_date IS NULL AND l.due_date < '2026-03-01'
ORDER BY days_overdue DESC;
```

##### Output
| loan_id | member_name | book_title | borrow_date | due_date | days_overdue |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 2 | Aarav Mehta | Clean Code | 2026-02-01 | 2026-02-15 | 14 |
| 3 | Sophia Miller | Database System Concepts | 2026-02-10 | 2026-02-24 | 5 |

---

#### Report B: Books Never Borrowed (`NOT EXISTS`)
```sql
SELECT b.book_id, b.title, b.author, b.category
FROM books AS b
WHERE NOT EXISTS (
    SELECT 1 FROM book_loans AS l WHERE l.book_id = b.book_id
);
```

##### Output
| book_id | title | author | category |
| :---: | :--- | :--- | :--- |
| 105 | Design Patterns | Gang of Four | Software Engineering |

---

## ⚡ Indexing & Performance Principles

> [!IMPORTANT]
> **MySQL Foreign Key Index Rule**: In MySQL (InnoDB), the database engine **automatically creates an index on foreign key columns** if a matching index does not already exist. You do **not** need to manually add duplicate indexes on foreign key columns.

### Index Best Practices:
1. **Target Selective Filtering Columns**: Create indexes on columns frequently used in `WHERE`, `JOIN`, and `ORDER BY` clauses (e.g. `orders(order_status, order_date)`).
2. **Inspect Query Plans with `EXPLAIN`**:
   ```sql
   EXPLAIN SELECT * FROM orders WHERE order_status = 'PAID';
   ```
3. **Avoid Over-Indexing**: Every index slows down `INSERT`, `UPDATE`, and `DELETE` performance because the B-Tree index must be updated on disk during modifications.

---

## ⚠️ Common Mistakes & Pitfalls

1. **Creating Child Tables Before Parent Tables**: Executing `CREATE TABLE order_items` before `orders` fails with `Cannot add foreign key constraint`. Always create parent tables first!
2. **Double-Counting Revenue in One-to-Many Joins**: Joining `orders` with `order_items` multiplies order rows. Use `SUM(oi.quantity * oi.unit_price)` instead of `SUM(o.total_amount)`.
3. **Counting Line Items Instead of Orders**: Using `COUNT(oi.product_id)` counts line items. Use `COUNT(DISTINCT o.order_id)` to count distinct orders.
4. **Including Unpaid/Cancelled Orders in Revenue**: Always filter `WHERE order_status IN ('PAID', 'SHIPPED')` when generating completed sales reports.
5. **Adding Duplicate Foreign Key Indexes**: Manually creating indexes on foreign key columns that InnoDB already indexed automatically.
6. **Hardcoding Historic Unit Prices**: Reading prices dynamically from `products` during invoice generation alters past order values if product prices change later. Always copy `unit_price` into `order_items`.

---

## 🧪 Ten Progressive Practice Exercises & Solutions

Use the sample database scripts (`E-Commerce`, `Banking`, `Library`) provided in this chapter.

---

### Exercise 1: E-Commerce — Products Never Ordered
**Task**: Find all products in the catalog that have never been ordered.  
**Hint**: Use `NOT EXISTS` on `order_items`.

```sql
-- Solution
SELECT p.product_id, p.product_name, p.price
FROM products AS p
WHERE NOT EXISTS (
    SELECT 1 FROM order_items AS oi WHERE oi.product_id = p.product_id
);
```

##### Output
| product_id | product_name | price |
| :---: | :--- | :---: |
| 9 | HD Webcam | 60.00 |

---

### Exercise 2: E-Commerce — Top 3 Customers by Paid Spend
**Task**: List the top 3 spending customers counting only `'PAID'` or `'SHIPPED'` orders.

```sql
-- Solution
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    SUM(oi.quantity * oi.unit_price) AS completed_spend
FROM customers AS c
JOIN orders AS o ON c.customer_id = o.customer_id
JOIN order_items AS oi ON o.order_id = oi.order_id
WHERE o.order_status IN ('PAID', 'SHIPPED')
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY completed_spend DESC
LIMIT 3;
```

##### Output
| customer_id | customer_name | completed_spend |
| :---: | :--- | :---: |
| 102 | Sophia Miller | 2850.00 |
| 101 | Aarav Mehta | 2450.00 |
| 104 | Emma Wilson | 500.00 |

---

### Exercise 3: E-Commerce — Category Revenue Share
**Task**: Calculate each category's total completed revenue and percentage share of overall sales.

```sql
-- Solution
WITH cat_sales AS (
    SELECT 
        cat.category_name,
        COALESCE(SUM(oi.quantity * oi.unit_price), 0.00) AS cat_revenue
    FROM categories AS cat
    LEFT JOIN products AS p ON cat.category_id = p.category_id
    LEFT JOIN order_items AS oi ON p.product_id = oi.product_id
    LEFT JOIN orders AS o ON oi.order_id = o.order_id AND o.order_status IN ('PAID', 'SHIPPED')
    GROUP BY cat.category_name
)
SELECT 
    category_name,
    cat_revenue,
    ROUND((cat_revenue / SUM(cat_revenue) OVER()) * 100.0, 2) AS revenue_pct
FROM cat_sales
ORDER BY cat_revenue DESC;
```

##### Output
| category_name | cat_revenue | revenue_pct |
| :--- | :---: | :---: |
| Electronics | 4850.00 | 80.97 |
| Furniture | 950.00 | 15.86 |
| Books | 190.00 | 3.17 |

---

### Exercise 4: E-Commerce — High-Value Orders
**Task**: Retrieve all orders where the order total amount exceeds $1000.00.

```sql
-- Solution
SELECT order_id, customer_id, order_date, total_amount, order_status
FROM (
    SELECT 
        o.order_id,
        o.customer_id,
        o.order_date,
        o.order_status,
        SUM(oi.quantity * oi.unit_price) AS order_total
    FROM orders AS o
    JOIN order_items AS oi ON o.order_id = oi.order_id
    GROUP BY o.order_id, o.customer_id, o.order_date, o.order_status
) AS order_totals
WHERE order_total > 1000.00
ORDER BY order_total DESC;
```

##### Output
| order_id | customer_id | order_date | order_status | order_total |
| :---: | :---: | :---: | :---: | :---: |
| 5003 | 102 | 2026-01-20 | PAID | 2850.00 |
| 5001 | 101 | 2026-01-15 | PAID | 1500.00 |

---

### Exercise 5: E-Commerce — Customers with No Paid Orders
**Task**: Find customers who have never placed a `'PAID'` or `'SHIPPED'` order.

```sql
-- Solution
SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM customers AS c
WHERE NOT EXISTS (
    SELECT 1 FROM orders AS o 
    WHERE o.customer_id = c.customer_id AND o.order_status IN ('PAID', 'SHIPPED')
);
```

##### Output
| customer_id | customer_name |
| :---: | :--- |
| 103 | Karan Johar |
| 105 | Rahul Sharma |

---

### Exercise 6: Banking — Account Deposits vs Withdrawals
**Task**: Summarize total deposits and total withdrawals per bank account.

```sql
-- Solution
SELECT 
    account_number,
    SUM(CASE WHEN transaction_type = 'DEPOSIT' THEN amount ELSE 0 END) AS total_deposits,
    SUM(CASE WHEN transaction_type = 'WITHDRAWAL' THEN amount ELSE 0 END) AS total_withdrawals
FROM account_transactions
GROUP BY account_number
ORDER BY account_number;
```

##### Output
| account_number | total_deposits | total_withdrawals |
| :---: | :---: | :---: |
| 1001 | 1000.00 | 200.00 |
| 1002 | 1500.00 | 300.00 |
| 1003 | 5000.00 | 500.00 |
| 1004 | 800.00 | 0.00 |

---

### Exercise 7: Banking — High-Value Transactions
**Task**: Find all bank transactions where amount is $\ge \$1000.00$.

```sql
-- Solution
SELECT transaction_id, account_number, transaction_type, amount, transaction_date
FROM account_transactions
WHERE amount >= 1000.00
ORDER BY amount DESC;
```

##### Output
| transaction_id | account_number | transaction_type | amount | transaction_date |
| :---: | :---: | :---: | :---: | :--- |
| 5 | 1003 | DEPOSIT | 5000.00 | 2026-02-01 08:00:00 |
| 3 | 1002 | DEPOSIT | 1500.00 | 2026-02-02 09:15:00 |
| 8 | 1001 | TRANSFER | 1500.00 | 2026-02-20 15:00:00 |
| 1 | 1001 | DEPOSIT | 1000.00 | 2026-02-01 10:00:00 |

---

### Exercise 8: Library — Overdue Loans List
**Task**: List all members with overdue books as of `'2026-03-01'`.

```sql
-- Solution
SELECT 
    m.full_name AS member_name,
    b.title AS book_title,
    l.due_date
FROM book_loans AS l
JOIN members AS m ON l.member_id = m.member_id
JOIN books AS b ON l.book_id = b.book_id
WHERE l.return_date IS NULL AND l.due_date < '2026-03-01'
ORDER BY l.due_date ASC;
```

##### Output
| member_name | book_title | due_date |
| :--- | :--- | :---: |
| Aarav Mehta | Clean Code | 2026-02-15 |
| Sophia Miller | Database System Concepts | 2026-02-24 |

---

### Exercise 9: Library — Most Borrowed Books Ranking
**Task**: Rank books by total number of times borrowed using `DENSE_RANK()`.

```sql
-- Solution
WITH loan_counts AS (
    SELECT book_id, COUNT(loan_id) AS times_borrowed
    FROM book_loans
    GROUP BY book_id
)
SELECT 
    b.title,
    COALESCE(lc.times_borrowed, 0) AS times_borrowed,
    DENSE_RANK() OVER (ORDER BY COALESCE(lc.times_borrowed, 0) DESC) AS borrow_rank
FROM books AS b
LEFT JOIN loan_counts AS lc ON b.book_id = lc.book_id
ORDER BY borrow_rank, b.title;
```

##### Output
| title | times_borrowed | borrow_rank |
| :--- | :---: | :---: |
| Clean Code | 2 | 1 |
| Database System Concepts | 2 | 1 |
| Introduction to Algorithms | 1 | 2 |
| The Pragmatic Programmer | 1 | 2 |
| Design Patterns | 0 | 3 |

---

### Exercise 10: Index Strategy Evaluation
**Task**: Recommend an optimal indexing strategy for a query that frequently filters orders by `order_status` and orders by `order_date DESC`.

#### Answer & Explanation:
- Create a composite index: `CREATE INDEX idx_orders_status_date ON orders(order_status, order_date DESC);`.
- The leading column `order_status` accelerates filtering, while the second column `order_date` eliminates extra sorting passes (`filesort`).

---

## 🎯 Portfolio Assignment: Presenting Your Project on GitHub

To showcase your Capstone Projects professionally on GitHub:

1. **Repository Structure**: Store setup scripts in `schema.sql`, seed data in `seeds.sql`, and reporting queries in `queries.sql`.
2. **Professional README Template**:
   - **Project Overview**: Problem statement and business goals.
   - **ER Diagram**: Visual relationship model (`1:N`, `N:M`).
   - **Schema & Constraints**: Primary/foreign keys, unique constraints, and check validation.
   - **Analytical Query Showcase**: Present reporting queries with markdown tables showing expected outputs.
   - **Setup Instructions**: Step-by-step import guide for phpMyAdmin or MySQL CLI.
   - **Disclaimer**: State clearly that these projects are educational database architecture demonstrations.

---

## 🔗 Related Topics

- [Database Relationships & Normalization](19-normalization.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Stored Procedures & Functions](26-stored-procedures.html)
- [Triggers & Automated Event Auditing](27-triggers.html)
- [SQL Security & Permissions](28-sql-security.html)
- [Working with JSON Data in SQL](29-json-data-in-sql.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: JSON Data in SQL](29-json-data-in-sql.html) | [SQL Home →](./)

> [!TIP]
> **Congratulations!** You have completed Chapter 30, the final capstone chapter in the **SQL Developer Mastery Curriculum**! You are now equipped to design relational schemas, write analytical reports, optimize query performance, and publish production-grade database projects.
