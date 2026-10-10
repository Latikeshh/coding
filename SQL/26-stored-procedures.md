---
layout: default
title: "26 stored procedures"
---

# ⚙️ MySQL Stored Procedures & Functions

> 🔴 Advanced

## 📖 Definition

In MySQL, **Stored Procedures** and **Stored Functions** are named SQL routines created and compiled directly inside the database server. They encapsulate reusable business logic, multi-step queries, transaction blocks, and data modifications into clean, executable database routines.

While both procedures and functions are stored routines, they serve distinct architectural purposes:

- **Stored Procedure:** A named database routine invoked using the **`CALL`** statement. It can accept `IN`, `OUT`, and `INOUT` parameters, execute DML (`INSERT`, `UPDATE`, `DELETE`) and DDL statements, manage transactions, and return zero or multiple result sets.
- **Stored Function:** A named routine invoked inside standard SQL expressions (`SELECT`, `WHERE`). It accepts `IN` parameters and **must** return a single scalar value using the **`RETURNS`** and **`RETURN`** statements.

---

## 🇮🇳 Hindi (Roman Script)

Database server ke andar save kiye gaye reusable SQL routines ko **Stored Procedures** aur **Stored Functions** kehte hain:
- **Stored Procedure:** `CALL procedure_name(args)` se execute hoti hai. Yeh multiple statements execute kar sakti hai, `IN`, `OUT`, `INOUT` parameters accept karti hai, aur full transaction management (`COMMIT`/`ROLLBACK`) support karti hai.
- **Stored Function:** Routine single scalar value return karti hai (`RETURNS data_type`) aur ise seedhe `SELECT` queries ke andar (`SELECT Multiply(5, 10);`) call kiya jata hai.
- **`DELIMITER //`:** MySQL CLI ya scripts mein stored procedure likhte waqt `DELIMITER //` ka use kiya jata hai taaki block ke andar ke semicolons `;` query ko beech mein hi terminate na kar dein.

---

## 🚩 Marathi (Roman Script)

Database server madhye save kelelya reusable SQL routines la **Stored Procedures** aani **Stored Functions** mhanat:
- **Stored Procedure:** **`CALL procedure_name(args)`** dware execute hote. Hi parameter modes (`IN`, `OUT`, `INOUT`) vaparu shakte aani transactions manage karte.
- **Stored Function:** Svatantra scalar value return karte (`RETURNS data_type`) aani tila `SELECT` query chya aat vaparta yete.
- **`DELIMITER //`:** Routine mhadhil code compile kartana semicolons `;` mule error yeu naye mhanun `DELIMITER //` vaparlo jato.

---

## 🤔 Why Do We Use It?

Encapsulating SQL logic into database routines offers key software architecture benefits:

- **Reduced Network Traffic:** Instead of sending dozens of individual SQL queries over the network, the client application executes a single `CALL` command.
- **Centralized Business Rules:** Ensures all application backends (Node.js, Python, Java, Mobile Apps) execute identical, audited data logic.
- **Enhanced Security:** DBAs can grant users permission to execute specific procedures (`GRANT EXECUTE ON PROCEDURE ...`) without giving them direct `UPDATE` or `DELETE` table permissions.

---

## 🧠 Simple Analogy: The Coffee Vending Machine

Think of SQL execution as an **Office Coffee Machine**:

- **Raw SQL Queries:** Ordering individual ingredients manually step-by-step (get cup, pour 200ml hot water, add 2 spoons coffee, add milk, stir).
- **Stored Procedure:** Pressing the single **"Espresso"** button (`CALL MakeEspresso('Double');`). The machine automatically executes the pre-programmed brewing routine internally and dispenses the final coffee!

---

## 📊 Stored Procedures vs Stored Functions Matrix

| Feature | Stored Procedure (`CREATE PROCEDURE`) | Stored Function (`CREATE FUNCTION`) |
| :--- | :--- | :--- |
| **Invocation Method** | Invoked explicitly using **`CALL routine_name()`**. | Called inline inside SQL expressions (`SELECT func()`). |
| **Return Value** | Does not use `RETURN`. Can return 0, 1, or multiple result sets via `SELECT` or `OUT` parameters. | **Must** return a single scalar value using **`RETURNS`** and **`RETURN`**. |
| **Parameter Modes** | Supports **`IN`**, **`OUT`**, and **`INOUT`** parameters. | Supports **`IN`** parameters only. |
| **DML / Transaction Capabilities** | Full support for `INSERT`, `UPDATE`, `DELETE`, `START TRANSACTION`, `COMMIT`, `ROLLBACK`. | Restricted in SQL statements. Cannot perform DML on tables queried by the caller. |
| **Primary Purpose** | Performing complex multi-step data operations, batch processing, and payment workflows. | Performing reusable calculations, formatting, or scalar data transformations. |

---

## 🛠️ Understanding the MySQL `DELIMITER` Command

When writing stored routines in a MySQL Command-Line Client, MySQL Workbench, or DBeaver, individual SQL statements inside the `BEGIN ... END` block end with semicolons `;`. 

Without changing the delimiter, the MySQL client would interpret the first semicolon inside the routine body as the end of the entire `CREATE PROCEDURE` statement, resulting in a syntax error (`ERROR 1064`).

```sql
-- 1. Change statement delimiter from ; to //
DELIMITER //

CREATE PROCEDURE HelloWorld()
BEGIN
    SELECT 'Hello, MySQL Stored Procedures!' AS Message;
END // -- Ends the CREATE PROCEDURE block

-- 2. Reset statement delimiter back to standard ;
DELIMITER ;

-- 3. Execute procedure
CALL HelloWorld();
```

> 🌐 **phpMyAdmin GUI Notice:** When creating routines in **phpMyAdmin**, if you use the web "Routines" GUI editor, phpMyAdmin provides a dedicated **Delimiter** input box below the text editor. You do not need to wrap your code in `DELIMITER //` when using phpMyAdmin's GUI Routine Form.

---

## 🏗️ Reproducible MySQL Setup Dataset (`employees` & `orders`)

Let's set up a clean, reproducible dataset containing `employees` and `orders` tables:

```sql
-- 1. Drop existing sample tables in reverse dependency order
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS employees;

-- 2. Create Employees Table Schema
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

-- 3. Create Orders Table Schema
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_status VARCHAR(20) NOT NULL DEFAULT 'PENDING' -- 'PENDING', 'PAID', 'CANCELLED'
);

-- 4. Insert Sample Employees
INSERT INTO employees (emp_id, first_name, department, salary) VALUES
    (101, 'Rahul', 'Engineering', 85000.00),
    (102, 'Priya', 'HR', 60000.00),
    (103, 'Amit', 'Engineering', 95000.00),
    (104, 'Sneha', 'Marketing', 70000.00);

-- 5. Insert Sample Orders
INSERT INTO orders (order_id, customer_name, total_amount, order_status) VALUES
    (1001, 'Aarav Mehta', 1500.00, 'PENDING'),
    (1002, 'Sneha Kapoor', 3500.00, 'PAID'),
    (1003, 'Rohan Sharma', 2000.00, 'PENDING');
```

---

## 1. ⚙️ Basic Stored Procedure (`IN` Parameter)

Let's create a procedure that accepts a department name as an **`IN` parameter** and retrieves matching employees:

```sql
DELIMITER //

CREATE PROCEDURE GetEmployeesByDept(IN p_dept VARCHAR(50))
BEGIN
    SELECT emp_id, first_name, department, salary
    FROM employees
    WHERE department = p_dept;
END //

DELIMITER ;

-- Calling the procedure
CALL GetEmployeesByDept('Engineering');
```

#### 👀 Expected Output:

```text
+--------+------------+-------------+----------+
| emp_id | first_name | department  | salary   |
+--------+------------+-------------+----------+
|    101 | Rahul      | Engineering | 85000.00 |
|    103 | Amit       | Engineering | 95000.00 |
+--------+------------+-------------+----------+
```

---

## 2. 🔄 Parameter Modes: `IN`, `OUT`, and `INOUT`

MySQL stored procedures support three distinct parameter modes:

1. **`IN` (Input Parameter):** Passes a value from the caller into the procedure. The procedure can read it, but changes made to `IN` parameters inside the procedure do not affect the caller.
2. **`OUT` (Output Parameter):** Returns a value from the procedure back to the caller session.
3. **`INOUT` (Input/Output Parameter):** Accepts an initial value from the caller, modifies it inside the procedure, and passes the updated value back to the caller session.

---

### A. Procedure with `OUT` Parameter
Count employees in a department and return the result through an `OUT` parameter:

```sql
DELIMITER //

CREATE PROCEDURE CountDeptEmployees(
    IN p_dept VARCHAR(50),
    OUT p_emp_count INT
)
BEGIN
    SELECT COUNT(*) INTO p_emp_count
    FROM employees
    WHERE department = p_dept;
END //

DELIMITER ;

-- Calling procedure with session variable @dept_count
CALL CountDeptEmployees('Engineering', @dept_count);

-- Inspect session variable output
SELECT @dept_count AS engineering_staff_count;
```

#### 👀 Expected Output:

```text
+-----------------------+
| engineering_staff_count|
+-----------------------+
|                     2 |
+-----------------------+
```

---

### B. Procedure with `INOUT` Parameter
Accept an initial numeric value, apply a 10% raise, and return the updated value:

```sql
DELIMITER //

CREATE PROCEDURE ApplyBonus(
    INOUT p_amount DECIMAL(10, 2),
    IN p_bonus_pct DECIMAL(4, 2)
)
BEGIN
    SET p_amount = p_amount * (1 + p_bonus_pct);
END //

DELIMITER ;

-- Initialize session variable, pass to INOUT procedure, and inspect result
SET @my_salary = 50000.00;
CALL ApplyBonus(@my_salary, 0.10);

SELECT @my_salary AS salary_after_bonus;
```

#### 👀 Expected Output:

```text
+--------------------+
| salary_after_bonus |
+--------------------+
|           55000.00 |
+--------------------+
```

> 💡 **Session Variables vs Local Variables:** Variables prefixed with `@` (e.g. `@my_salary`) are **Session Variables** accessible throughout the connection. Variables declared inside a procedure with `DECLARE var_name data_type;` are **Local Variables** destroyed when the procedure finishes execution.

---

## 3. 🧮 MySQL Stored Functions (`CREATE FUNCTION`)

Unlike stored procedures, a **Stored Function** returns a single scalar value and can be called directly inside `SELECT` queries.

```sql
DELIMITER //

CREATE FUNCTION CalculateTax(price DECIMAL(10, 2), tax_rate DECIMAL(4, 2))
RETURNS DECIMAL(10, 2)
DETERMINISTIC
BEGIN
    RETURN price * tax_rate;
END //

DELIMITER ;

-- Invoking Stored Function inside a SELECT query:
SELECT 
    first_name, 
    salary, 
    CalculateTax(salary, 0.18) AS estimated_tax
FROM employees;
```

#### 👀 Expected Output:

```text
+------------+----------+---------------+
| first_name | salary   | estimated_tax |
+------------+----------+---------------+
| Rahul      | 85000.00 |      15300.00 |
| Priya      | 60000.00 |      10800.00 |
| Amit       | 95000.00 |      17100.00 |
| Sneha      | 70000.00 |      12600.00 |
+------------+----------+---------------+
```

> 🌐 **MySQL Binary Logging & `DETERMINISTIC` Rule:**
> In MySQL, stored functions require declaring a deterministic characteristic (`DETERMINISTIC`, `READS SQL DATA`, or `NO SQL`).
> - **`DETERMINISTIC`:** Declares that the function always returns the exact same result given identical input parameters.
> - If binary logging is enabled on your server, creating functions without declaring `DETERMINISTIC` or setting `SET GLOBAL log_bin_trust_function_creators = 1;` throws `ERROR 1418 (HY000)`.

---

## 4. 🏢 Meaningful Business Procedure: Payment Processing Routine

Let's build a realistic order payment processor that updates order statuses conditionally and returns status messages:

```sql
DELIMITER //

CREATE PROCEDURE ProcessOrderPayment(
    IN p_order_id INT,
    OUT p_result_message VARCHAR(100)
)
BEGIN
    DECLARE v_current_status VARCHAR(20);

    -- 1. Fetch current order status into local variable
    SELECT order_status INTO v_current_status
    FROM orders
    WHERE order_id = p_order_id;

    -- 2. Evaluate status logic
    IF v_current_status IS NULL THEN
        SET p_result_message = 'ERROR: Order ID not found.';
    ELSEIF v_current_status = 'PAID' THEN
        SET p_result_message = 'NOTICE: Order is already paid.';
    ELSEIF v_current_status = 'PENDING' THEN
        UPDATE orders
        SET order_status = 'PAID'
        WHERE order_id = p_order_id;

        SET p_result_message = 'SUCCESS: Order payment processed successfully.';
    ELSE
        SET p_result_message = 'ERROR: Invalid order status for processing.';
    END IF;
END //

DELIMITER ;
```

### Testing Procedure Execution Scenarios:

```sql
-- Scenario 1: Processing Pending Order #1001
CALL ProcessOrderPayment(1001, @msg1);
SELECT @msg1 AS test_1_result;

-- Scenario 2: Processing Already Paid Order #1002
CALL ProcessOrderPayment(1002, @msg2);
SELECT @msg2 AS test_2_result;

-- Scenario 3: Processing Non-existent Order #9999
CALL ProcessOrderPayment(9999, @msg3);
SELECT @msg3 AS test_3_result;
```

#### 👀 Expected Execution Results:

```text
test_1_result: SUCCESS: Order payment processed successfully.
test_2_result: NOTICE: Order is already paid.
test_3_result: ERROR: Order ID not found.
```

> 📌 **Real-World Payment Architecture Note:** In production enterprise systems, database procedures update database transaction states, but actual credit card payment processing is handled by payment provider APIs (e.g. Stripe, Razorpay) prior to executing database status updates.

---

## 🔐 5. Transactions & Error Handling (`DECLARE ... HANDLER`)

Inside MySQL InnoDB stored procedures, use `DECLARE ... HANDLER` to catch SQL exceptions and automatically execute `ROLLBACK` when an error occurs.

> 🚨 **MySQL Local Variable & Handler Declaration Order:** In MySQL, all `DECLARE` statements (local variables, conditions, handlers, cursors) **must appear at the very beginning** of the `BEGIN ... END` block before any executable SQL statements (`START TRANSACTION`, `SELECT`, `UPDATE`). Placing `DECLARE` after an `UPDATE` statement causes `ERROR 1064`.

```sql
DELIMITER //

CREATE PROCEDURE SafePaymentTransaction(
    IN p_order_id INT,
    OUT p_txn_status VARCHAR(100)
)
BEGIN
    -- Declare Exception Handler to catch any SQL Error and ROLLBACK
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET p_txn_status = 'ERROR: SQL Exception occurred. Transaction rolled back.';
    END;

    -- Start Transaction Block
    START TRANSACTION;

    -- Update order status
    UPDATE orders
    SET order_status = 'PAID'
    WHERE order_id = p_order_id AND order_status = 'PENDING';

    -- Commit changes
    COMMIT;
    SET p_txn_status = 'SUCCESS: Order payment committed.';
END //

DELIMITER ;
```

---

## 🔒 6. Routine Security & Execution Privileges

MySQL routines include security attributes that control execution privileges:

- **`SQL SECURITY DEFINER` (Default):** The routine executes with the permissions of the user who **created** it (`DEFINER`).
- **`SQL SECURITY INVOKER`:** The routine executes with the permissions of the user who **calls** it (`INVOKER`).

```sql
-- Creating procedure with INVOKER security context
CREATE PROCEDURE ReadOrders()
SQL SECURITY INVOKER
BEGIN
    SELECT * FROM orders;
END;
```

> 🛡️ **Least Privilege Principle:** Use `SQL SECURITY INVOKER` whenever possible so queries inside the routine cannot bypass table permissions granted to the calling user.

---

## 🛠️ Common Mistakes & Troubleshooting

| Error Message / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1064 (42000): Syntax Error`** | Forgetting `DELIMITER //` when compiling routines in MySQL CLI/Workbench. | Use `DELIMITER //` before `CREATE PROCEDURE` and reset with `DELIMITER ;`. |
| **Invoking Procedure with `SELECT`** | Executing `SELECT MyProcedure();` (Procedures cannot be called in `SELECT`!). | Always use `CALL MyProcedure();` for stored procedures. |
| **`ERROR 1064` on `DECLARE` Position** | Placing `DECLARE` variable statements after `UPDATE` or `SELECT` lines. | Place all `DECLARE` statements at the very top of `BEGIN ... END` block. |
| **`ERROR 1418 (HY000): Function has no DETERMINISTIC`** | Creating a stored function with binary logging enabled without declaring `DETERMINISTIC`. | Add `DETERMINISTIC` to function header or set `SET GLOBAL log_bin_trust_function_creators = 1;`. |
| **Using `RETURN` in a Procedure** | Using `RETURN value;` inside a procedure (Procedures do not use `RETURN`). | Use `OUT` parameters for procedures, or use `CREATE FUNCTION` if returning values. |

---

## 🌍 Real-World Usage

- **E-Commerce Order Fulfillment:** Encapsulating inventory checks, order status updates, and invoice generation inside single transaction procedures.
- **Financial Banking Systems:** Executing money transfer operations (`TransferFunds`) wrapped in `START TRANSACTION` and `DECLARE EXIT HANDLER FOR SQLEXCEPTION`.
- **Database Maintenance:** Scheduling nightly maintenance procedures to clean expired sessions and rebuild analytics caches.

---

## 🧪 Structured Practice Exercises

Follow these 6 progressive practice exercises using the `employees` and `orders` tables created above:

### Exercise 1: Basic Procedure Creation
Create a procedure `ListHREmployees()` that selects all employees working in the `'HR'` department.

### Exercise 2: `OUT` Parameter Procedure
Create a procedure `GetSalaryByEmpId(IN p_id INT, OUT p_salary DECIMAL(10,2))` that returns an employee's salary through an `OUT` parameter.

### Exercise 3: Stored Function Creation
Create a stored function `CalculateBonus(salary DECIMAL(10,2))` that returns a 10% bonus amount (`salary * 0.10`). Declare it `DETERMINISTIC`.

### Exercise 4: Function Invocation in `SELECT`
Write a `SELECT` statement calling `CalculateBonus(salary)` for all employees in `employees`.

### Exercise 5: Conditional Status Procedure
Create a procedure `CancelOrder(IN p_order_id INT, OUT p_result VARCHAR(100))` that updates an order's status to `'CANCELLED'` if it is currently `'PENDING'`.

### Exercise 6: Transaction Handler
Explain why `DECLARE EXIT HANDLER FOR SQLEXCEPTION` must appear at the top of a `BEGIN ... END` block.

---

## 🎯 Mini Challenge: Automated Payment Processor Routine

1. Ensure the `orders` table exists with `order_id`, `customer_name`, `total_amount`, and `order_status`.
2. Write a stored procedure `ProcessPaymentChallenge(IN p_id INT, OUT p_out_msg VARCHAR(100))` that:
   - Evaluates current `order_status`.
   - If `'PENDING'`, updates status to `'PAID'` and sets `p_out_msg = 'SUCCESS: Order Marked as Paid'`.
   - If `'PAID'`, sets `p_out_msg = 'NOTICE: Already Paid'`.
   - If missing, sets `p_out_msg = 'ERROR: Order Not Found'`.
3. Test all 3 test cases: Order 1001 (Pending), Order 1002 (Paid), Order 9999 (Missing).

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
DELIMITER //
CREATE PROCEDURE ListHREmployees()
BEGIN
    SELECT * FROM employees WHERE department = 'HR';
END //
DELIMITER ;
-- Call: CALL ListHREmployees();
```

#### Exercise 2 Solution:
```sql
DELIMITER //
CREATE PROCEDURE GetSalaryByEmpId(IN p_id INT, OUT p_salary DECIMAL(10,2))
BEGIN
    SELECT salary INTO p_salary FROM employees WHERE emp_id = p_id;
END //
DELIMITER ;
-- Call: CALL GetSalaryByEmpId(101, @sal); SELECT @sal;
```

#### Exercise 3 Solution:
```sql
DELIMITER //
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN salary * 0.10;
END //
DELIMITER ;
```

#### Exercise 4 Solution:
```sql
SELECT first_name, salary, CalculateBonus(salary) AS bonus_amount FROM employees;
```

#### Exercise 5 Solution:
```sql
DELIMITER //
CREATE PROCEDURE CancelOrder(IN p_order_id INT, OUT p_result VARCHAR(100))
BEGIN
    DECLARE v_status VARCHAR(20);
    SELECT order_status INTO v_status FROM orders WHERE order_id = p_order_id;
    
    IF v_status = 'PENDING' THEN
        UPDATE orders SET order_status = 'CANCELLED' WHERE order_id = p_order_id;
        SET p_result = 'SUCCESS: Order Cancelled';
    ELSE
        SET p_result = 'ERROR: Order cannot be cancelled';
    END IF;
END //
DELIMITER ;
```

#### Exercise 6 Solution:
- In MySQL syntax, `DECLARE` statements define local routine scope and handlers, and parser rules require all `DECLARE` statements to be placed before any executable SQL statements (`UPDATE`, `SELECT`, `START TRANSACTION`).

#### Mini Challenge Solution:

```sql
DELIMITER //

CREATE PROCEDURE ProcessPaymentChallenge(
    IN p_id INT,
    OUT p_out_msg VARCHAR(100)
)
BEGIN
    DECLARE v_curr_status VARCHAR(20);

    SELECT order_status INTO v_curr_status
    FROM orders
    WHERE order_id = p_id;

    IF v_curr_status IS NULL THEN
        SET p_out_msg = 'ERROR: Order Not Found';
    ELSEIF v_curr_status = 'PAID' THEN
        SET p_out_msg = 'NOTICE: Already Paid';
    ELSEIF v_curr_status = 'PENDING' THEN
        UPDATE orders
        SET order_status = 'PAID'
        WHERE order_id = p_id;

        SET p_out_msg = 'SUCCESS: Order Marked as Paid';
    ELSE
        SET p_out_msg = 'ERROR: Cannot Process Order';
    END IF;
END //

DELIMITER ;

-- Test Calls:
CALL ProcessPaymentChallenge(1001, @res1); SELECT @res1; -- SUCCESS: Order Marked as Paid
CALL ProcessPaymentChallenge(1002, @res2); SELECT @res2; -- NOTICE: Already Paid
CALL ProcessPaymentChallenge(9999, @res3); SELECT @res3; -- ERROR: Order Not Found
```

</details>

---

## 🔗 Related Topics

- [Transactions & ACID Properties](22-transactions.html)
- [SQL Window Functions](25-window-functions.html)
- [Triggers & Automated Events](27-triggers.html)

---

## 🧭 Navigation

[← Previous: Window Functions](25-window-functions.html) | [SQL Home](./) | [Next: Triggers →](27-triggers.html)
