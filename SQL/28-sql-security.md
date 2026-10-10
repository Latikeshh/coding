---
layout: default
title: "28 sql security"
---

# 🔐 SQL Security, Roles & Permissions

> 🔴 Advanced

## 📖 Definition

**SQL Security** encompasses the policies, access controls, and defense mechanisms used to protect database servers, schemas, and data rows against unauthorized access, accidental modification, and malicious web attacks (such as SQL Injection).

Database security is governed by three foundational pillars:
1. **Authentication:** Verifying the identity of a connecting user or application (`'app_user'@'localhost'` + Password).
2. **Authorization (Access Control):** Determining what specific operations (`SELECT`, `INSERT`, `UPDATE`, `EXECUTE`) an authenticated identity is permitted to perform on specific database objects.
3. **Defense in Depth:** Protecting application queries using **Parameterized Prepared Statements** and securing database credentials using environment variables.

> 💡 **The Principle of Least Privilege (PoLP):** Every user account, application service, and database role should be granted **only the absolute minimum privileges** required to perform its intended business function, and nothing more.

---

## 🇮🇳 Hindi (Roman Script)

Database security ka sabse bada niyam hai **Principle of Least Privilege**: Kisi bhi user ya application ko sirf utni hi permissions (`SELECT`, `INSERT`) dein jitni uske kaam ke liye zaroori hai. Web applications mein kabhi bhi database connection ke liye **`root`** (admin) account ka use na karein. MySQL 8.0+ mein aap **Roles** banakar permissions group kar sakte hain (`CREATE ROLE`, `GRANT`). Application code mein SQL Injection se bachne ke liye hamesha **Parameterized Prepared Statements** (PDO / Prepared Queries) ka use karein.

---

## 🚩 Marathi (Roman Script)

Database security cha mukhya niyam mhanje **Principle of Least Privilege**: Pratyek user kiva application la phakta avashyak aslelya permissions (`SELECT`, `INSERT`) dhyat. Web applications madhye kadhihi **`root`** (admin) account cha wapar karu naka. MySQL 8.0+ madhye **Roles** tayar karun permissions manage karta yetat (`CREATE ROLE`, `GRANT`). SQL Injection pasun bachvanyasathi application code madhye hamesha **Parameterized Prepared Statements** (PDO) cha wapar kara.

---

## 🤔 Why Do We Use It?

Databases store critical business assets—including customer personal information, financial transaction logs, and user passwords. Implementing database security prevents:

- **Catastrophic Data Loss:** Preventing compromised web applications from executing `DROP TABLE` or `TRUNCATE`.
- **Unauthorized Data Breaches:** Restricting read access so reporting accounts cannot view sensitive user password hashes or payment tokens.
- **SQL Injection (SQLi) Attacks:** Neutralizing malicious input strings sent through web forms before they reach the SQL engine.

---

## 🧠 Simple Analogy: Hotel Room Keycards

Think of database permissions as a **Hotel Keycard System**:

```text
┌──────────────────────────────────────┬──────────────────────────────────────────┐
│ Hotel Access Level                   │ Database Security Equivalent             │
├──────────────────────────────────────┼──────────────────────────────────────────┤
│ Master Keycard (Hotel Manager)       │ Root Administrator ('root'@'localhost')  │
│ Guest Keycard (Assigned to Room 412) │ Restricted App User ('app_user'@'local') │
│ Housekeeping Keycard (3rd Floor)     │ Role-Based Access ('shop_report_reader') │
└──────────────────────────────────────┴──────────────────────────────────────────┘
```

If an application connects using the `root` account, it is like handing every hotel guest a **Master Keycard**. If a guest loses their card, an attacker gains unrestricted access to every room, safe, and security office in the hotel!

---

## 📊 Privilege Scopes Matrix in MySQL

MySQL allows granting privileges at five granular scope levels:

| Scope Level | Example SQL Syntax | Operational Impact |
| :--- | :--- | :--- |
| **Global Scope** | `GRANT SELECT ON *.* TO 'user'@'localhost';` | Grants read access across **ALL** databases on the MySQL server. *(Avoid for app accounts!)* |
| **Database Scope** | `GRANT SELECT, INSERT ON shop_db.* TO 'user'@'localhost';` | Grants read and insert access to **ALL** tables inside `shop_db`. |
| **Table Scope** | `GRANT SELECT ON shop_db.products TO 'user'@'localhost';` | Grants read access **ONLY** to the `products` table in `shop_db`. |
| **Column Scope** | `GRANT SELECT (product_name, price) ON shop_db.products TO 'user'@'localhost';` | Grants read access **ONLY** to specified columns (`product_name` and `price`). |
| **Routine Scope** | `GRANT EXECUTE ON PROCEDURE shop_db.ProcessOrderPayment TO 'user'@'localhost';` | Allows executing a specific stored procedure without granting direct table update rights. |

---

## 🛠️ Complete MySQL 8.0+ Role & User Setup (`shop_db`)

Let's execute a complete, runnable MySQL 8.0+ workflow creating a `shop_db` database, a read-only reporting role, a user account, and inspecting assigned privileges.

> ⚠️ **Administrative Requirement:** Creating users and roles requires administrative privileges (`CREATE USER`, `ROLE_ADMIN`, `GRANT OPTION`). In local development (WampServer / phpMyAdmin), run these setup commands logged in as `root`. Never attempt to directly edit MySQL system privilege tables (`mysql.user`)!

```sql
-- Step 1: Create a dedicated database and sample table
CREATE DATABASE IF NOT EXISTS shop_db;
USE shop_db;

CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (product_name, price) VALUES
    ('Wireless Mouse', 1299.50),
    ('Mechanical Keyboard', 3499.00);

-- Step 2: Create a Read-Only Reporting Role (MySQL 8.0+)
CREATE ROLE 'shop_report_reader';

-- Step 3: Grant SELECT privilege on shop_db.products to the role
GRANT SELECT ON shop_db.products TO 'shop_report_reader';

-- Step 4: Create a restricted user account with a strong secret
CREATE USER 'reporting_user'@'localhost' 
IDENTIFIED BY 'Replace_With_A_Strong_Secret_Password_123!';

-- Step 5: Grant the role to the user account
GRANT 'shop_report_reader' TO 'reporting_user'@'localhost';

-- Step 6: Activate default roles for the user (MySQL 8.0+)
SET DEFAULT ROLE ALL TO 'reporting_user'@'localhost';

-- Step 7: Inspect assigned grants
SHOW GRANTS FOR 'reporting_user'@'localhost';
SHOW GRANTS FOR 'reporting_user'@'localhost' USING 'shop_report_reader';

-- Step 8: Revoking privileges & roles when access is no longer required
-- REVOKE SELECT ON shop_db.products FROM 'shop_report_reader';
-- REVOKE 'shop_report_reader' FROM 'reporting_user'@'localhost';
```

#### 👀 Expected `SHOW GRANTS` Output:

```text
+-------------------------------------------------------------------------------+
| Grants for reporting_user@localhost                                           |
+-------------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO `reporting_user`@`localhost`                            |
| GRANT `shop_report_reader`@`%` TO `reporting_user`@`localhost`                |
| GRANT SELECT ON `shop_db`.`products` TO `reporting_user`@`localhost`          |
+-------------------------------------------------------------------------------+
```

---

## 🛡️ Defending Against SQL Injection (SQLi)

**SQL Injection (SQLi)** occurs when untrusted user input is directly concatenated into SQL query strings, allowing an attacker to manipulate query execution logic.

### ❌ The Vulnerable Pattern (String Concatenation)

```php
// ❌ UNSAFE VULNERABLE PHP CODE (DO NOT USE!):
$email = $_POST['email']; // Attacker enters: ' OR '1'='1
$sql = "SELECT id, email FROM users WHERE email = '$email'";
// Evaluates to: SELECT id, email FROM users WHERE email = '' OR '1'='1'
// RESULT: Bypasses authentication and exposes ALL user rows in the database!
```

---

### ✅ The Safe Pattern (PHP PDO Parameterized Prepared Statements)

Parameterized queries send the SQL template and the input data values to the database engine in **two separate steps**.

```php
// ✅ SAFE PARAMETERIZED PHP PDO CODE:
$email = $_POST['email'];

// 1. Prepare SQL template with a named placeholder (:email)
$stmt = $pdo->prepare('SELECT id, email FROM users WHERE email = :email');

// 2. Execute by binding the untrusted input strictly as a DATA VALUE
$stmt->execute(['email' => $email]);

// 3. Fetch results safely
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

### 💡 Why Parameterized Queries Neutralize SQL Injection:
When using prepared statements, the database engine compiles the SQL execution tree **before** binding parameters. Even if an attacker enters `' OR '1'='1`, the database treats the entire input string literally as the email address `"' OR '1'='1"`, completely preventing SQL syntax manipulation!

> 📌 **Handling Dynamic Identifiers (Table / Column Names):** Prepared statements can parameterize **data values**, but **cannot** parameterize SQL identifiers like table or column names (e.g. `ORDER BY :sort_col`). If dynamic column sorting is needed, validate inputs against an explicit server-side **allowlist**:
> ```php
> $allowed_sorts = ['price' => 'price', 'date' => 'created_at'];
> $sort_column = $allowed_sorts[$_GET['sort']] ?? 'price'; // Safe allowlist lookup
> ```

---

## 🔐 Credentials & Secrets Management

Securing database connections requires protecting connection secrets:

- **Use Environment Variables:** Store database credentials in environment variables (`getenv('DB_PASSWORD')`) or an uncommitted `.env` file loaded outside web root.
- **Never Commit Credentials to Git:** Add `.env` and configuration files containing passwords to your repository `.gitignore` file.
- **Restrict Network Binding:** Bind local MySQL servers to `127.0.0.1` (`bind-address = 127.0.0.1` in `my.cnf`) so port 3306 is not exposed to the public internet.

---

## 🔒 Stored Routines & Security Context (`DEFINER` vs `INVOKER`)

When creating MySQL stored procedures and functions (Topic 26), specify the security execution context:

- **`SQL SECURITY DEFINER` (Default):** The procedure executes with the permissions of the user who **created** it (`DEFINER`).
- **`SQL SECURITY INVOKER`:** The procedure executes with the permissions of the user who **calls** it (`INVOKER`).

```sql
-- Safer Routine Execution Context
CREATE PROCEDURE shop_db.ReadProducts()
SQL SECURITY INVOKER
BEGIN
    SELECT * FROM shop_db.products;
END;
```

---

## 📊 Least-Privilege Account Design Matrix

| Account Name | Primary Purpose | Minimum Required Privileges |
| :--- | :--- | :--- |
| **`app_frontend`** | Web App User Requests | `SELECT` on `products`; `INSERT, SELECT` on `orders`, `order_items`. |
| **`app_reporting`** | BI Dashboards & Analytics | `SELECT` on reporting views and materialized summary tables. |
| **`app_migrator`** | CI/CD Schema Deployment | `CREATE, ALTER, DROP, INDEX` on target application database. |
| **`db_admin`** | Database Administrator | `ALL PRIVILEGES` on `*.* WITH GRANT OPTION` (Used only for admin tasks). |

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **Using `root` for Web Applications** | Web application connecting using `root` password. | Create a dedicated restricted user account (`'app_user'@'localhost'`) with minimal privileges. |
| **Granting Global Privileges (`ON *.*`)** | Granting `GRANT ALL ON *.*` for convenience. | Restrict grants to specific databases (`shop_db.*`) or specific tables (`shop_db.products`). |
| **Unactivated Roles in MySQL 8.0** | User assigned a role, but `SHOW GRANTS` shows `USAGE` only. | Run `SET DEFAULT ROLE ALL TO 'user'@'localhost';` to activate assigned roles upon login. |
| **String Concatenation SQLi** | Building queries via `$sql = "SELECT ... " . $input`. | Always use PDO prepared statements with parameter binding (`$stmt->prepare()`). |
| **Committing Passwords to GitHub** | Committing database passwords in `config.php` or `.env`. | Add `.env` and credential files to `.gitignore` before committing code. |

---

## 🌍 Real-World Usage

- **E-Commerce Applications:** Microservices use distinct accounts: `catalog_service` has read-only access to products, while `order_service` has write access to orders.
- **Enterprise Compliance:** Financial audit rules require revoking `DROP` and `DELETE` privileges from general application accounts.

---

## 🧪 Structured Practice Exercises

### Exercise 1: Role Creation
Write the SQL statements to create a role named `'analytics_reader'` in MySQL 8.0+.

### Exercise 2: Table-Level Grant
Grant `SELECT` privileges on the `orders` table inside `shop_db` to the `'analytics_reader'` role.

### Exercise 3: User Creation & Role Assignment
Create a user `'data_analyst'@'localhost'` identified by password `'Analyst_Secret_2026!'` and assign the `'analytics_reader'` role to this user.

### Exercise 4: Inspecting User Grants
Write the SQL command to inspect all assigned grants for `'data_analyst'@'localhost'`.

### Exercise 5: Revoking Privileges
Write the SQL statement to revoke `SELECT` access on `shop_db.orders` from the `'analytics_reader'` role.

### Exercise 6: Fixing SQL Injection
Rewrite the following vulnerable PHP code using a safe PDO prepared statement:

```php
// Unsafe code to rewrite:
$user_id = $_GET['id'];
$sql = "SELECT * FROM users WHERE id = $user_id";
```

---

## 🎯 Mini Challenge: E-Commerce Least-Privilege & Parameterized Security Design

Consider an e-commerce application with two features:
1. Browsing the product catalog (`SELECT` on `products`).
2. Placing a new order (`INSERT` into `orders` and `order_items`).

**Your Tasks:**
1. Design the minimum required SQL `GRANT` statements for a restricted user account `'shop_app'@'localhost'`.
2. Write a safe PHP PDO prepared statement for inserting a new order record (`customer_id`, `total_amount`).
3. Explain why parameterized queries are **still necessary** even if the `'shop_app'` account has no `DROP TABLE` permissions.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
CREATE ROLE 'analytics_reader';
```

#### Exercise 2 Solution:
```sql
GRANT SELECT ON shop_db.orders TO 'analytics_reader';
```

#### Exercise 3 Solution:
```sql
CREATE USER 'data_analyst'@'localhost' 
IDENTIFIED BY 'Analyst_Secret_2026!';

GRANT 'analytics_reader' TO 'data_analyst'@'localhost';
SET DEFAULT ROLE ALL TO 'data_analyst'@'localhost';
```

#### Exercise 4 Solution:
```sql
SHOW GRANTS FOR 'data_analyst'@'localhost' USING 'analytics_reader';
```

#### Exercise 5 Solution:
```sql
REVOKE SELECT ON shop_db.orders FROM 'analytics_reader';
```

#### Exercise 6 Solution:
```php
$user_id = $_GET['id'];
$stmt = $pdo->prepare('SELECT id, email, first_name FROM users WHERE id = :id');
$stmt->execute(['id' => $user_id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
```

#### Mini Challenge Solution:

```sql
-- Task 1: Minimum Required Grants for shop_app
CREATE USER 'shop_app'@'localhost' IDENTIFIED BY 'App_Secret_Pass_2026!';

GRANT SELECT ON shop_db.products TO 'shop_app'@'localhost';
GRANT SELECT, INSERT ON shop_db.orders TO 'shop_app'@'localhost';
GRANT SELECT, INSERT ON shop_db.order_items TO 'shop_app'@'localhost';
```

```php
// Task 2: Safe PDO Prepared Statement for Order Placement
$customer_id = $_POST['customer_id'];
$total_amount = $_POST['total_amount'];

$stmt = $pdo->prepare('INSERT INTO shop_db.orders (customer_id, total_amount) VALUES (:customer_id, :total_amount)');
$stmt.execute([
    'customer_id'  => $customer_id,
    'total_amount' => $total_amount
]);
```

**Task 3 Explanation:**
Even without `DROP TABLE` permissions, an unparameterized SQL Injection vulnerability allows an attacker to manipulate data logic—such as altering `total_amount` to `$0.00`, extracting password hashes from `users` using `UNION SELECT`, or corrupting table records with unauthorized `UPDATE` payloads. Parameterized queries enforce that user input is treated strictly as data literals, protecting data integrity regardless of account privilege boundaries.

</details>

---

## 🔗 Related Topics

- [Transactions & ACID Properties](22-transactions.html)
- [MySQL Stored Procedures & Functions](26-stored-procedures.html)
- [Triggers & Automated Events](27-triggers.html)
- [Practical SQL Capstone Projects](30-sql-projects.html)

---

## 🧭 Navigation

[← Previous: Triggers](27-triggers.html) | [SQL Home](./) | [Next: SQL Projects →](30-sql-projects.html)
