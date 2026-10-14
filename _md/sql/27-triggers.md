---
layout: default
title: "27 triggers"
---

# Chapter 27 — MySQL Triggers & Automated Event Auditing

> 🔴 Advanced

---

## 📖 Definition & Fundamental Concepts

A **Database Trigger** is a named, automated database object associated with a specific table that fires (executes) automatically when a data modification event (`INSERT`, `UPDATE`, or `DELETE`) occurs on that table.

Triggers are used to enforce business rules, validate data before insertion, generate automated audit trails, and synchronize summary tables.

### Key Trigger Characteristics in MySQL:
1. **Event-Driven**: Triggers execute automatically in response to DML operations (`INSERT`, `UPDATE`, `DELETE`).
2. **Row-Level Execution (`FOR EACH ROW`)**: MySQL triggers execute once for **every individual row** affected by a SQL statement. (MySQL does NOT support statement-level triggers).
3. **Transactionally Coupled**: Trigger statements execute inside the same transaction as the invoking SQL operation. If a trigger raises an error, the activating SQL statement (and open transaction) rolls back!
4. **Pseudo-Row References (`OLD` & `NEW`)**: Triggers inspect column values before (`OLD`) and after (`NEW`) modification.

---

## 🇮🇳 Hindi Explanation

MySQL Trigger ek aisa automated database code hota hai jo kisi table par `INSERT`, `UPDATE`, ya `DELETE` hone par **apne aap (automatically)** chalta hai.
- **`BEFORE` Trigger**: Data table mein save hone se **pehle** chalta hai (data validate ya modify karne ke liye).
- **`AFTER` Trigger**: Data table mein save hone ke **baad** chalta hai (audit log ya history record karne ke liye).
- **`FOR EACH ROW`**: MySQL mein trigger statement ke dwara affect hone wali **har ek row** ke liye alag se chalta hai.
- **`OLD` aur `NEW`**: `OLD.salary` purani value deta hai, aur `NEW.salary` nayi value deta hai.

---

## 🚩 Marathi Explanation

MySQL Trigger mhanje table var `INSERT`, `UPDATE`, kiwa `DELETE` zalyavar **apooap (automatically)** chalnara database code.
- **`BEFORE` Trigger**: Data table madhye save honyapoorvi chalto (validation kiwa modification sathi).
- **`AFTER` Trigger**: Data table madhye save zalyanantar chalto (audit record kiwa history sathi).
- **`FOR EACH ROW`**: MySQL madhye trigger statement mule badallelya **pratyek row** sathi swatantra run hoto.
- **`OLD` aani `NEW`**: `OLD.salary` junya (old) value sathi aani `NEW.salary` n नवीन (new) value sathi vaparta yete.

---

## 📐 BEFORE vs AFTER Triggers & `OLD` / `NEW` Matrix

### `BEFORE` vs `AFTER` Timing
- **`BEFORE` Trigger**: Fires **before** the row operation is written to the table. In a `BEFORE` trigger, you can inspect AND modify `NEW.column_name` values directly before disk write.
- **`AFTER` Trigger**: Fires **after** the row operation is completed. An `AFTER` trigger cannot modify `NEW` values, making it ideal for logging and auditing.

### `OLD` and `NEW` Availability Matrix

| Event Type | `OLD` Pseudo-Row Available? | `NEW` Pseudo-Row Available? | Can Modify `NEW` Values? |
| :--- | :---: | :---: | :---: |
| **`INSERT`** | ❌ No (No previous row exists) | ✅ Yes (Values being inserted) | ✅ Yes (In `BEFORE INSERT`) |
| **`UPDATE`** | ✅ Yes (Values before update) | ✅ Yes (Values after update) | ✅ Yes (In `BEFORE UPDATE`) |
| **`DELETE`** | ✅ Yes (Values being deleted) | ❌ No (No new row exists) | ❌ No |

---

## 📊 Reproducible Sample Setup Data

Run the following setup script in phpMyAdmin or WampServer to create the `employees` and `salary_audit` tables:

```sql
-- Clean up pre-existing sample tables
DROP TABLE IF EXISTS salary_audit;
DROP TABLE IF EXISTS employees;

-- 1. Create employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
) ENGINE=InnoDB;

-- 2. Create salary_audit table
CREATE TABLE salary_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT NOT NULL,
    old_salary DECIMAL(10, 2) NOT NULL,
    new_salary DECIMAL(10, 2) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 3. Populate employees
INSERT INTO employees (emp_id, first_name, last_name, email, department_id, salary) VALUES
(1, 'Rahul', 'Sharma', 'rahul@example.com', 3, 85000.00),
(2, 'Priya', 'Patel', 'priya@example.com', 3, 95000.00),
(3, 'Amit', 'Verma', 'amit@example.com', 2, 60000.00),
(4, 'Neha', 'Gupta', 'neha@example.com', 2, 70000.00);
```

---

## 💡 Practical Examples

### Example 1: Salary Audit Trigger (`AFTER UPDATE`)

Create an `AFTER UPDATE` trigger that logs salary changes into `salary_audit` whenever an employee's salary changes:

> [!NOTE]
> **Client Delimiter Note**: The `DELIMITER //` command is used in CLI clients to change the statement delimiter from `;` to `//`, preventing the client from cutting off the trigger body at internal semicolons. In phpMyAdmin's **Triggers** tab, omit `DELIMITER //` and set `//` in the phpMyAdmin Delimiter input box!

```sql
-- MySQL Salary Audit Trigger
DELIMITER //

CREATE TRIGGER trg_employee_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    -- Record audit row ONLY if salary value actually changed
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO salary_audit (emp_id, old_salary, new_salary, changed_at)
        VALUES (OLD.emp_id, OLD.salary, NEW.salary, CURRENT_TIMESTAMP);
    END IF;
END//

DELIMITER ;
```

#### Code Breakdown:
- `CREATE TRIGGER trg_employee_salary_audit`: Names the new database trigger.
- `AFTER UPDATE ON employees`: Configures the trigger to fire immediately after an `UPDATE` operation completes on `employees`.
- `FOR EACH ROW`: Instructs MySQL to execute the trigger logic once for every individual updated row.
- `IF OLD.salary <> NEW.salary THEN`: Prevents generating unnecessary audit entries when an `UPDATE` statement sets `salary` to its existing value.

---

### Demonstrating & Verifying Trigger Executions

Let's test our trigger with 3 distinct `UPDATE` scenarios:

```sql
-- Test 1: Single-row update with actual salary change
UPDATE employees SET salary = 92000.00 WHERE emp_id = 1;

-- Test 2: Update assigning identical existing salary (No salary change!)
UPDATE employees SET salary = 95000.00 WHERE emp_id = 2;

-- Test 3: Multi-row update (10% raise for department 2: Amit and Neha)
UPDATE employees SET salary = salary * 1.10 WHERE department_id = 2;
```

#### Query Results (`SELECT * FROM salary_audit;`)

| audit_id | emp_id | old_salary | new_salary | changed_at |
| :---: | :---: | :---: | :---: | :--- |
| 1 | 1 | 85000.00 | 92000.00 | 2026-10-10 14:30:00 |
| 2 | 3 | 60000.00 | 66000.00 | 2026-10-10 14:30:00 |
| 3 | 4 | 70000.00 | 77000.00 | 2026-10-10 14:30:00 |

#### Analysis:
1. **Test 1**: `emp_id 1` salary changed ($85000.00 \rightarrow 92000.00$), generating `audit_id 1`.
2. **Test 2**: `emp_id 2` salary remained $95000.00$. `OLD.salary <> NEW.salary` evaluated to `FALSE`, skipping audit creation.
3. **Test 3**: Multi-row update affected 2 rows in department 2 (`emp_id 3` and `emp_id 4`). The `FOR EACH ROW` trigger executed twice, generating `audit_id 2` and `audit_id 3`.

---

### Example A: Data Validation & Normalization (`BEFORE INSERT`)

Validate that inserted salaries are strictly positive, and normalize email strings to lowercase before writing to disk:

```sql
DELIMITER //

CREATE TRIGGER trg_employee_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    -- 1. Validate salary value
    IF NEW.salary <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Validation Error: Employee salary must be greater than zero.';
    END IF;

    -- 2. Normalize email string to lowercase
    SET NEW.email = LOWER(TRIM(NEW.email));
END//

DELIMITER ;
```

#### Testing Validation & Normalization
```sql
-- 1. Valid Insert (Email normalized automatically)
INSERT INTO employees (first_name, last_name, email, department_id, salary) 
VALUES ('Karan', 'Johar', '  KARAN@EXAMPLE.COM  ', 1, 72000.00);

-- Verify email normalization
SELECT emp_id, first_name, email FROM employees WHERE first_name = 'Karan';
-- Result: email = 'karan@example.com'

-- 2. Invalid Insert (Triggers error & aborts insert)
-- INSERT INTO employees (first_name, last_name, email, department_id, salary)
-- VALUES ('Test', 'User', 'test@example.com', 1, -5000.00);
-- Result: ERROR 1644 (45000): Validation Error: Employee salary must be greater than zero.
```

---

### Example B: Order Status Change Auditing (`AFTER UPDATE`)

```sql
-- Setup orders and status audit tables
DROP TABLE IF EXISTS order_status_audit;
DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'PENDING', 'PROCESSING', 'SHIPPED', 'CANCELLED'
    total_amount DECIMAL(10, 2) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE order_status_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    old_status VARCHAR(20) NOT NULL,
    new_status VARCHAR(20) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO orders (order_id, customer_id, status, total_amount) VALUES
(5001, 101, 'PENDING', 250.00),
(5002, 102, 'PROCESSING', 1200.00);

-- Create status audit trigger
DELIMITER //

CREATE TRIGGER trg_order_status_audit
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
    IF OLD.status <> NEW.status THEN
        INSERT INTO order_status_audit (order_id, old_status, new_status, changed_at)
        VALUES (OLD.order_id, OLD.status, NEW.status, CURRENT_TIMESTAMP);
    END IF;
END//

DELIMITER ;

-- Test update
UPDATE orders SET status = 'SHIPPED' WHERE order_id = 5001;

-- Query audit results
SELECT * FROM order_status_audit;
```

#### Output (`order_status_audit`)
| audit_id | order_id | old_status | new_status | changed_at |
| :---: | :---: | :---: | :---: | :--- |
| 1 | 5001 | PENDING | SHIPPED | 2026-10-10 14:30:00 |

---

## 🔒 Trigger Restrictions & Transaction Behavior in MySQL

1. **Transactional Coupling**: Triggers run inside the same transaction as the invoking SQL statement. If a trigger executes `SIGNAL SQLSTATE` or encounters a runtime error, the entire statement and transaction roll back.
2. **Same-Table Modification Restriction (MySQL Error 1442)**: A trigger **CANNOT** issue `INSERT`, `UPDATE`, or `DELETE` statements against the **same table** that activated the trigger!
   ```text
   ERROR 1442 (HY000): Can't update table 'employees' in stored function/trigger 
   because it is already used by statement which invoked this stored function/trigger.
   ```
3. **No Direct Transaction Statements**: Triggers cannot explicitly execute `START TRANSACTION`, `COMMIT`, or `ROLLBACK`.
4. **Cascading Foreign Keys Do Not Activate Triggers**: In InnoDB, rows updated or deleted via `ON DELETE CASCADE` or `ON UPDATE CASCADE` do **not** fire triggers on the child table.

---

## ⚠️ Common Mistakes & Troubleshooting

1. **Copying PostgreSQL Trigger Syntax into MySQL**:
   MySQL does NOT use `RETURNS TRIGGER`, `LANGUAGE plpgsql`, or `EXECUTE FUNCTION`. Use native `CREATE TRIGGER ... FOR EACH ROW BEGIN ... END`.
2. **Using `OLD` in `INSERT` or `NEW` in `DELETE`**:
   - `INSERT` triggers have no `OLD` row.
   - `DELETE` triggers have no `NEW` row.
3. **Modifying `NEW` Values in `AFTER` Triggers**:
   `SET NEW.col = val;` is allowed ONLY in `BEFORE` triggers.
4. **Forgetting Client Delimiting Commands**:
   Failing to set `DELIMITER //` in CLI clients causes syntax errors at internal semicolons.
5. **Generating Unnecessary Audit Logs**:
   Always compare `IF OLD.col <> NEW.col THEN` to skip recording updates where values didn't change.

---

## 🧪 Step-by-Step Practice Exercises

Use the sample database script (`employees`, `salary_audit`, `orders`, `order_status_audit`) provided in this chapter.

---

### Exercise 1: Employee Registration Audit Trigger (`AFTER INSERT`)
**Task**: Create a table `employee_insert_log` (`log_id`, `emp_id`, `full_name`, `created_at`) and an `AFTER INSERT` trigger on `employees` that logs new registrations.

```sql
-- Solution
DROP TABLE IF EXISTS employee_insert_log;
CREATE TABLE employee_insert_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

DELIMITER //

CREATE TRIGGER trg_employee_after_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_insert_log (emp_id, full_name)
    VALUES (NEW.emp_id, CONCAT(NEW.first_name, ' ', NEW.last_name));
END//

DELIMITER ;

-- Test Insert
INSERT INTO employees (first_name, last_name, email, department_id, salary)
VALUES ('Suresh', 'Raina', 'suresh@example.com', 1, 68000.00);

SELECT * FROM employee_insert_log;
```

#### Expected Output (`employee_insert_log`)
| log_id | emp_id | full_name | created_at |
| :---: | :---: | :--- | :--- |
| 1 | 5 | Suresh Raina | 2026-10-10 14:30:00 |

---

### Exercise 2: Salary Audit Trigger with Minimum Increase Check
**Task**: Create a `BEFORE UPDATE` trigger that rejects salary decreases (raises `SIGNAL SQLSTATE '45000'`).

```sql
-- Solution
DELIMITER //

CREATE TRIGGER trg_prevent_salary_decrease
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Validation Error: Salary reduction is not allowed!';
    END IF;
END//

DELIMITER ;
```

---

### Exercise 3: Order Status Transition Validation (`BEFORE UPDATE`)
**Task**: Create a `BEFORE UPDATE` trigger on `orders` that prevents changing status from `'SHIPPED'` back to `'PENDING'`.

```sql
-- Solution
DELIMITER //

CREATE TRIGGER trg_prevent_invalid_status_reversal
BEFORE UPDATE ON orders
FOR EACH ROW
BEGIN
    IF OLD.status = 'SHIPPED' AND NEW.status = 'PENDING' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid State: Shipped orders cannot be reverted to pending.';
    END IF;
END//

DELIMITER ;
```

---

### Exercise 4: Predicting Multi-Row Audit Log Counts
**Task**: If an `UPDATE employees SET salary = salary + 1000 WHERE department_id = 3;` statement affects 2 rows, how many times does an `AFTER UPDATE ... FOR EACH ROW` trigger execute?

#### Answer & Explanation
The trigger executes **2 times** (once for each affected row), generating **2 audit rows** in `salary_audit` because MySQL triggers operate strictly at the row level.

---

### Exercise 5: Transaction Rollback Behavior Analysis
**Task**: What happens to a successful `UPDATE employees` statement if its `AFTER UPDATE` trigger subsequently encounters an `INSERT` failure into `salary_audit`?

#### Answer & Explanation
Because the trigger executes inside the **same transaction** as the triggering `UPDATE` statement, the failure in the trigger causes the entire `UPDATE` statement (and open transaction) to **roll back completely**. The employee salary is restored to its original value.

---

### Exercise 6: Deletion Audit Log (`AFTER DELETE`)
**Task**: Create a table `deleted_employees_log` and an `AFTER DELETE` trigger on `employees` to record removed employee IDs and full names.

```sql
-- Solution
DROP TABLE IF EXISTS deleted_employees_log;
CREATE TABLE deleted_employees_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

DELIMITER //

CREATE TRIGGER trg_employee_after_delete
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO deleted_employees_log (emp_id, full_name)
    VALUES (OLD.emp_id, CONCAT(OLD.first_name, ' ', OLD.last_name));
END//

DELIMITER ;
```

---

## 🎯 Mini Challenge

Design an automated audit system for order status modifications.

### Requirements:
1. Create `orders` and `order_status_audit` tables.
2. Create an `AFTER UPDATE` trigger `trg_order_status_audit` that logs `order_id`, `old_status`, `new_status`, and `changed_at`.
3. Prevent duplicate audit entries when `status` has not changed.
4. Test with status changes and verify outputs.

```sql
-- Solution
DROP TABLE IF EXISTS order_status_audit;
DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE order_status_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    old_status VARCHAR(20) NOT NULL,
    new_status VARCHAR(20) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO orders VALUES (1001, 501, 'PENDING', 150.00);

DELIMITER //

CREATE TRIGGER trg_order_status_audit
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
    IF OLD.status <> NEW.status THEN
        INSERT INTO order_status_audit (order_id, old_status, new_status, changed_at)
        VALUES (OLD.order_id, OLD.status, NEW.status, CURRENT_TIMESTAMP);
    END IF;
END//

DELIMITER ;

-- Test statement
UPDATE orders SET status = 'DELIVERED' WHERE order_id = 1001;

SELECT * FROM order_status_audit;
```

#### Expected Output (`order_status_audit`)
| audit_id | order_id | old_status | new_status | changed_at |
| :---: | :---: | :---: | :---: | :--- |
| 1 | 1001 | PENDING | DELIVERED | 2026-10-10 14:30:00 |

#### Explanation:
`OLD.status` captures `'PENDING'`, `NEW.status` captures `'DELIVERED'`, and `OLD.status <> NEW.status` evaluates to `TRUE`, writing the status transition audit entry.

---

## 🔗 Related Topics

- [Stored Procedures & Functions](26-stored-procedures.html)
- [SQL Constraints](05-keys.html)
- [SQL Security & Permissions](28-sql-security.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Stored Procedures](26-stored-procedures.html) | [Next: SQL Security →](28-sql-security.html)
