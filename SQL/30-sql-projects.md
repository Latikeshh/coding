---
layout: default
title: "30 sql projects"
---

# 🏆 Practical SQL Capstone Projects

> 🔴 Advanced

## 📖 Definition

Building real-world **SQL Capstone Projects** consolidates everything you have learned across schema design, primary/foreign keys, CRUD operations, joins, aggregations, subqueries, CTEs, window functions, views, indexes, transactions, and JSON data. A production project includes entity-relationship modeling, relational constraints, sample datasets, complex analytical queries, and query performance tuning.

---

## 🌐 Multilingual Explanation

### English
Projects demonstrate how all SQL concepts integrate together in real-world software engineering. By designing schemas, enforcing key constraints, and writing multi-table reporting queries, you build portfolio-ready database projects.

### Hindi (Roman Script)
SQL Seekhne ka sabse accha tareeka real-world projects banana hai. Is lesson mein hum E-Commerce, HR Management, aur Banking database schemas banayenge, sample data insert karenge, aur high-level analytical queries run karenge.

### Marathi (Roman Script)
SQL madhye mastery milvanyasathi real-world projects banavne garjeche ahe. Schema design, primary-foreign keys, aani complex reporting queries cha wapar karun portfolio-ready database projects tayar kara.

### Hinglish
Aapke developer resume aur portfolio ke liye SQL projects sabse important hote hain. Is lesson mein complete E-Commerce, Library Management, aur Banking schemas diye gaye hain jise aap MySQL, PostgreSQL, ya SQLite par execute kar sakte hain.

---

## 🏗️ Capstone Project 1: Complete E-Commerce Database Schema

```sql
-- 1. Customers Master Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Product Categories Master Table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL UNIQUE
);

-- 3. Products Master Table with Foreign Key & Check Constraints
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- 4. Orders Parent Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_status VARCHAR(20) DEFAULT 'PENDING' CHECK (order_status IN ('PENDING', 'PAID', 'SHIPPED', 'CANCELLED')),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 5. Order Items Child Table (Composite Primary Key)
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
```

---

## 📊 Analytical Reporting Queries on the E-Commerce Schema

### Query 1: Top 5 Highest Spending Customers (Joins & Aggregations)

```sql
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    COUNT(DISTINCT o.order_id) AS completed_orders,
    SUM(oi.quantity * oi.unit_price) AS lifetime_spend
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.order_status = 'PAID'
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY lifetime_spend DESC
LIMIT 5;
```

---

### Query 2: Category Revenue Share with Window Functions (`OVER`)

```sql
WITH category_sales AS (
    SELECT 
        cat.category_name,
        SUM(oi.quantity * oi.unit_price) AS category_revenue
    FROM categories cat
    INNER JOIN products p ON cat.category_id = p.category_id
    INNER JOIN order_items oi ON p.product_id = oi.product_id
    GROUP BY cat.category_name
)
SELECT 
    category_name,
    category_revenue,
    ROUND((category_revenue / SUM(category_revenue) OVER()) * 100, 2) AS percentage_of_total
FROM category_sales
ORDER BY category_revenue DESC;
```

---

## 🏗️ Capstone Project 2: Banking & Transaction Audit Schema

```sql
CREATE TABLE bank_accounts (
    account_number INT PRIMARY KEY AUTO_INCREMENT,
    account_holder VARCHAR(100) NOT NULL,
    account_type VARCHAR(20) CHECK (account_type IN ('SAVINGS', 'CHECKING')),
    balance DECIMAL(12,2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0)
);

CREATE TABLE account_transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    account_number INT NOT NULL,
    transaction_type VARCHAR(20) CHECK (transaction_type IN ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER')),
    amount DECIMAL(12,2) NOT NULL CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_number) REFERENCES bank_accounts(account_number)
);
```

---

## ⚠️ Common Mistakes & Best Practices

- **Designing Tables Without Relationships**: Creating flat isolated tables without `FOREIGN KEY` constraints leading to data inconsistency.
- **Neglecting Indexes**: Forgetting to add B-Tree indexes on foreign keys (`customer_id`, `product_id`) causing slow join queries.
- **Using Unsafe SQL Mutations**: Updating or deleting data without `WHERE` clauses. Always test `SELECT` queries before running `UPDATE` or `DELETE`!

---

## 🧪 Try It Yourself & Portfolio Assignment

1. Execute the E-Commerce schema in SQLite or PostgreSQL.
2. Insert 5 customers, 3 categories, 10 products, and 10 orders.
3. Write a query to find products that have never been ordered.
4. Upload your SQL schema `.sql` file to your GitHub repository portfolio!

---

## 🔗 Related Topics

- [Database Relationships & Normalization](19-normalization.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Working with JSON Data in SQL](29-json-data-in-sql.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: JSON Data in SQL](29-json-data-in-sql.html) | [SQL Home →](./)
