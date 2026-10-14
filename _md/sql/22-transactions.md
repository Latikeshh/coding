---
layout: default
title: "22 transactions"
---

# Chapter 22 — Transactions & ACID in SQL

> 🔴 Advanced

---

## 📖 Definition

An **SQL Transaction** is a single logical unit of database work consisting of one or more SQL execution steps. A transaction ensures that either **all** statements execute successfully and their changes are permanently saved (**`COMMIT`**), or **none** of the statements take effect and any uncommitted modifications are discarded (**`ROLLBACK`**).

Transactions are fundamental for maintaining data integrity during multi-step operations (such as bank transfers, order checkout processing, or inventory adjustments).

> [!IMPORTANT]
> **Rollback Limitations**: A `ROLLBACK` statement can only cancel uncommitted changes in an **active, open transaction**. Once a transaction has been committed with `COMMIT`, those changes are permanently written to disk and **cannot** be undone using `ROLLBACK`.

---

## 🇮🇳 Hindi Explanation

Transaction related database commands ka ek aisa group hota hai jo poora ek saath chalta hai.
- `START TRANSACTION` ya `BEGIN`: Transaction shuru karta hai.
- `COMMIT`: Saare badlaav ko database mein permanently save karta hai.
- `ROLLBACK`: Agar beech mein koi error aaye, toh saare uncommitted badlaav ko cancel karke purani state wapas laata hai.
- **Dhyan rakhein**: Ek baar `COMMIT` hone ke baad `ROLLBACK` kaam nahi karta!
- MySQL mein transactions ke liye **InnoDB** storage engine zaroori hota hai (MyISAM engine transactions support nahi karta).

---

## 🚩 Marathi Explanation

Transaction mhanje sambandhit database commands cha ek asha group jo eka unit sarakha run hoto.
- `START TRANSACTION` kiwa `BEGIN`: Transaction shuru karto.
- `COMMIT`: Sarva badal (changes) database madhye permanently save karto.
- `ROLLBACK`: Error aalyas uncommitted badal radd (cancel) karto.
- **Lakshat theva**: Ekada `COMMIT` zalyavar `ROLLBACK` badal radd karu shakat nahi!
- MySQL madhye transactions sathi **InnoDB** engine vaparne bandhankarak aahe.

---

## 🏛️ The 4 ACID Properties

The reliability of a relational database transaction model is governed by four core properties known as **ACID**:

```text
               +-------------------------------------------+
               |             ACID PROPERTIES               |
               +-------------------------------------------+
               |  Atomicity   : All-or-Nothing Execution   |
               |  Consistency : Validates All Rules/Keys   |
               |  Isolation   : Prevents Interference      |
               |  Durability  : Survives System Crashes    |
               +-------------------------------------------+
```

### 1. ⚛️ Atomicity ("All or Nothing")
Every transaction is treated as a single atomic unit. If any individual statement within the transaction fails or is aborted, the entire transaction is aborted and rolled back.
- **Example**: In a bank transfer of $200 from Rahul to Priya, the system must NOT debit Rahul's account without completing the $200 credit to Priya's account.

### 2. 🛡️ Consistency ("Preserving Invariants")
A transaction must transition the database from one valid state to another, preserving all primary keys, foreign keys, unique constraints, and check constraints before and after execution.
- **Example**: If an account table has a constraint `CHECK (balance >= 0)`, any transaction that attempts to leave a negative balance is rejected and aborted.

### 3. 🔒 Isolation ("Concurrent Independence")
Concurrent transactions executing at the same time must run independently without interfering with one another. The level of isolation controls what uncommitted or concurrent modifications a transaction can observe.
- **Example**: If User A and User B transfer money simultaneously, isolation mechanisms (such as row-level locks) prevent race conditions and lost updates.

### 4. 💾 Durability ("Permanent Persistence")
Once a transaction executes `COMMIT`, its changes are permanently recorded on non-volatile storage (via transaction redo logs and data files) and will survive power outages, OS crashes, or server restarts.

> [!NOTE]
> **ACID Scope**: While ACID guarantees structural database reliability, it does **not** automatically guarantee that application-level business logic is correct. Applications must still perform proper input validation, check expected row counts, and handle application errors.

---

## ⚙️ MySQL Autocommit & Storage Engines

In MySQL (such as WampServer or phpMyAdmin):
1. **Default Autocommit**: MySQL operates with `autocommit = 1` enabled by default. Every standalone SQL statement (`UPDATE`, `INSERT`, `DELETE`) is automatically committed immediately upon execution.
2. **Explicit Transaction Boundaries**: Executing `START TRANSACTION;` or `BEGIN;` temporarily disables autocommit until `COMMIT;` or `ROLLBACK;` is called.
3. **Storage Engine Requirement**: Transactions require a transactional storage engine like **InnoDB**. Non-transactional engines like MyISAM ignore transaction blocks!
4. **Implicit Commits via DDL**: Data Definition Language (DDL) statements (e.g. `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`, `TRUNCATE TABLE`) cause an **implicit automatic commit** of any open transaction! You cannot undo schema changes with `ROLLBACK`.

---

## 📊 Reproducible Sample Setup Data

Run this setup script to create an InnoDB `accounts` table with sample balances.

> [!WARNING]
> `DROP TABLE IF EXISTS` removes pre-existing tables and their data. Always back up data before running drop scripts in non-testing environments.

```sql
-- Clean up pre-existing sample table
DROP TABLE IF EXISTS accounts;

-- Create InnoDB accounts table with money data type (DECIMAL)
CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    holder_name VARCHAR(50) NOT NULL,
    balance DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    CONSTRAINT chk_positive_balance CHECK (balance >= 0.00)
) ENGINE=InnoDB;

-- Insert initial sample accounts
INSERT INTO accounts (account_id, holder_name, balance) VALUES
(1, 'Rahul Sharma', 1000.00),
(2, 'Priya Patel', 500.00);
```

### Initial Balances (`accounts`)
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 1000.00 |
| 2 | Priya Patel | 500.00 |

---

## 🧭 Separate Demonstrations: COMMIT vs ROLLBACK

### Demo A: Committing Changes Permanently (`COMMIT`)

```sql
-- 1. Verify starting balances (Account 1: $1000.00, Account 2: $500.00)
SELECT account_id, holder_name, balance FROM accounts;

-- 2. Begin explicit transaction
START TRANSACTION;

-- 3. Perform transfer: Deduct $200 from Rahul (Account 1), add $200 to Priya (Account 2)
UPDATE accounts SET balance = balance - 200.00 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 200.00 WHERE account_id = 2;

-- 4. Commit changes permanently to disk
COMMIT;

-- 5. Query final balances
SELECT account_id, holder_name, balance FROM accounts ORDER BY account_id;
```

#### Final Output After `COMMIT`
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 800.00 |
| 2 | Priya Patel | 700.00 |

#### Explanation
Both `UPDATE` statements succeeded, and `COMMIT` permanently updated the balances. Total money in the system remains conserved ($800.00 + $700.00 = $1500.00$).

---

### Demo B: Rolling Back Uncommitted Changes (`ROLLBACK`)

First, reset or verify initial balances (Account 1: $800.00, Account 2: $700.00).

```sql
-- 1. Begin explicit transaction
START TRANSACTION;

-- 2. Perform a test deduction of $300 from Account 1
UPDATE accounts SET balance = balance - 300.00 WHERE account_id = 1;

-- 3. Query balance INSIDE uncommitted transaction (Shows $500.00)
SELECT account_id, holder_name, balance FROM accounts WHERE account_id = 1;

-- 4. Cancel uncommitted changes
ROLLBACK;

-- 5. Query balance AFTER ROLLBACK (Restored to $800.00!)
SELECT account_id, holder_name, balance FROM accounts WHERE account_id = 1;
```

#### Output After `ROLLBACK`
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 800.00 |

#### Explanation
The uncommitted $300 deduction was completely discarded by `ROLLBACK`, restoring Account 1 to its pre-transaction state ($800.00).

---

## 🛡️ Safe Money Transfer Pattern & Concurrency Control

In real-world payment applications, executing two unconditional `UPDATE` statements is **not sufficient**. The system must validate preconditions and handle concurrent access.

### 4-Step Money Transfer Algorithm:
1. **Start Transaction**: Open an explicit transaction block (`START TRANSACTION`).
2. **Lock & Verify Source Row (`FOR UPDATE`)**: Acquire an exclusive row lock on the source account using `SELECT ... FOR UPDATE`. This prevents concurrent transactions from modifying or reading stale balance data.
3. **Validate Balance & Accounts**: Check that:
   - Source account exists.
   - Destination account exists.
   - Transfer amount is positive ($amount > 0$).
   - Source account has sufficient funds ($balance \ge amount$).
   - Both `UPDATE` statements affect exactly $1$ row (`ROW_COUNT() = 1`).
4. **Commit or Rollback**: If all checks pass, issue `COMMIT;`. If any check fails, issue `ROLLBACK;`.

```sql
-- Safe Row-Locking Transfer Example (MySQL / InnoDB)
START TRANSACTION;

-- Step 1: Lock source account row for update check
SELECT balance FROM accounts WHERE account_id = 1 FOR UPDATE;

-- Step 2: Debit source account (Rahul: $800.00 -> $600.00)
UPDATE accounts SET balance = balance - 200.00 WHERE account_id = 1;

-- Step 3: Credit destination account (Priya: $700.00 -> $900.00)
UPDATE accounts SET balance = balance + 200.00 WHERE account_id = 2;

-- Step 4: Finalize transaction
COMMIT;
```

---

## 🔖 Partial Rollback Using `SAVEPOINT`

A **Savepoint** creates a named marker inside an active transaction. This allows you to roll back changes made **after** the savepoint without aborting or committing the entire outer transaction.

```sql
-- Reset balances for demo (Account 1: $1000.00)
UPDATE accounts SET balance = 1000.00 WHERE account_id = 1;

START TRANSACTION;

-- Step 1: Deduct $100.00 base order payment
UPDATE accounts SET balance = balance - 100.00 WHERE account_id = 1;

-- Step 2: Create a savepoint marker
SAVEPOINT after_base_payment;

-- Step 3: Attempt an additional $50.00 expedited shipping fee
UPDATE accounts SET balance = balance - 50.00 WHERE account_id = 1;

-- Step 4: Customer cancels expedited shipping -> Roll back ONLY to savepoint!
ROLLBACK TO SAVEPOINT after_base_payment;

-- Step 5: Commit the base payment
COMMIT;

-- Verify final balance
SELECT account_id, holder_name, balance FROM accounts WHERE account_id = 1;
```

#### Final Output
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 900.00 |

#### Explanation
- Base payment deduction ($100.00) occurred before the savepoint and was **committed** ($1000.00 \rightarrow 900.00$).
- Expedited shipping fee ($50.00) occurred after the savepoint and was **rolled back**.

---

## 🔒 Concurrency Anomalies & Isolation Levels

When multiple transactions interact with the same rows simultaneously, concurrency anomalies can occur if isolation levels are insufficient.

### Concurrency Anomalies Defined:
1. **Dirty Read**: Transaction A reads uncommitted data modified by Transaction B. If Transaction B rolls back, Transaction A worked with invalid data.
2. **Non-Repeatable Read**: Transaction A reads a row, Transaction B updates and commits that row, and Transaction A re-reads the same row finding different column values.
3. **Phantom Read**: Transaction A executes a range query, Transaction B inserts new rows matching the range and commits, and Transaction A re-executes the range query finding new "phantom" rows.
4. **Lost Update**: Transaction A and Transaction B read the same balance ($100$). Both calculate new balances based on $100$ and overwrite each other's changes.

### MySQL Isolation Levels (InnoDB):

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | InnoDB Lock / Behavior Notes |
| :--- | :---: | :---: | :---: | :--- |
| `READ UNCOMMITTED` | ⚠️ Possible | ⚠️ Possible | ⚠️ Possible | Lowest isolation; reads dirty uncommitted data. |
| `READ COMMITTED` | ❌ Prevented | ⚠️ Possible | ⚠️ Possible | Reads only committed data. |
| `REPEATABLE READ` | ❌ Prevented | ❌ Prevented | ❌ Prevented* | **MySQL Default!** Uses MVCC snapshot reads to prevent phantoms in consistent reads. |
| `SERIALIZABLE` | ❌ Prevented | ❌ Prevented | ❌ Prevented | Highest isolation; converts plain `SELECT`s into shared locks (`LOCK IN SHARE MODE`). |

---

## ⚠️ Common Mistakes & How to Avoid Them

1. **Leaving Transactions Open**:
   Forgetting to issue `COMMIT` or `ROLLBACK` holds row locks open indefinitely, blocking other application threads. Always ensure transactions terminate promptly.
2. **Assuming `ROLLBACK` Can Undo Committed Work**:
   Once `COMMIT` runs, `ROLLBACK` has no effect. Undoing committed work requires writing a compensating transaction (e.g., issuing a refund).
3. **Assuming DDL Statements Can Be Rolled Back**:
   DDL commands (`DROP TABLE`, `ALTER TABLE`, `TRUNCATE`) trigger an implicit commit in MySQL.
4. **Using Floating-Point Types (`FLOAT`/`DOUBLE`) for Money**:
   Binary floating-point representation causes rounding errors ($0.1 + 0.2 = 0.30000000000000004$). Always use `DECIMAL(12,2)` for financial values.
5. **Using Non-Transactional Storage Engines**:
   Using `ENGINE=MyISAM` silently ignores transaction blocks. Always specify `ENGINE=InnoDB`.
6. **Ignoring Affected Row Counts (`ROW_COUNT()`)**:
   Executing `UPDATE accounts SET balance = balance - 100 WHERE account_id = 999;` does not raise a syntax error even if account 999 does not exist! Applications must verify that `ROW_COUNT() = 1`.

---

## 🧪 Step-by-Step Practice Exercises

Run the sample setup script provided in this chapter before attempting these exercises.

---

### Exercise 1: Multi-Row Update with `COMMIT`
**Task**: Start a transaction, add $100.00 to Rahul's balance (`account_id = 1`) and add $100.00 to Priya's balance (`account_id = 2`), then commit the changes.

```sql
-- Solution
START TRANSACTION;
UPDATE accounts SET balance = balance + 100.00 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100.00 WHERE account_id = 2;
COMMIT;

-- Verify final balances
SELECT account_id, holder_name, balance FROM accounts ORDER BY account_id;
```

#### Expected Output
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 1000.00 |
| 2 | Priya Patel | 600.00 |

---

### Exercise 2: Simulating Error Recovery with `ROLLBACK`
**Task**: Start a transaction, deduct $500.00 from Priya's account (`account_id = 2`), inspect the balance inside the transaction, and then roll back the transaction.

```sql
-- Solution
START TRANSACTION;
UPDATE accounts SET balance = balance - 500.00 WHERE account_id = 2;

-- Query uncommitted change
SELECT balance FROM accounts WHERE account_id = 2; -- Shows 100.00

ROLLBACK;

-- Verify restored balance
SELECT balance FROM accounts WHERE account_id = 2; -- Restored to 600.00
```

#### Expected Output
| balance |
| :---: |
| 600.00 |

---

### Exercise 3: Partial Transaction Rollback with `SAVEPOINT`
**Task**: Start a transaction, add $50.00 interest to Rahul's account, create a savepoint named `after_interest`, attempt a $200.00 fee deduction, roll back to `after_interest`, and commit.

```sql
-- Solution
START TRANSACTION;

UPDATE accounts SET balance = balance + 50.00 WHERE account_id = 1;
SAVEPOINT after_interest;

UPDATE accounts SET balance = balance - 200.00 WHERE account_id = 1;
ROLLBACK TO SAVEPOINT after_interest;

COMMIT;

-- Verify final balance (1000.00 + 50.00 = 1050.00)
SELECT account_id, balance FROM accounts WHERE account_id = 1;
```

#### Expected Output
| account_id | balance |
| :--- | :---: |
| 1 | 1050.00 |

---

### Exercise 4: Locking a Row with `FOR UPDATE`
**Task**: Write a `SELECT` statement that reads and locks Priya's account (`account_id = 2`) inside a transaction to prevent concurrent updates.

```sql
-- Solution
START TRANSACTION;
SELECT account_id, holder_name, balance 
FROM accounts 
WHERE account_id = 2 
FOR UPDATE;
COMMIT;
```

#### Expected Output
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 2 | Priya Patel | 600.00 |

---

### Exercise 5: Concurrency Control Strategy Analysis
**Task**: Explain the difference between **Pessimistic Locking** (`FOR UPDATE`) and **Optimistic Concurrency Control** (version numbers) for preventing lost updates.

#### Answer Key
- **Pessimistic Locking (`FOR UPDATE`)**: Locks the database row immediately upon reading. Other transactions attempting to lock or update the same row are blocked until the first transaction commits or rolls back. Best for high-contention environments.
- **Optimistic Concurrency Control**: Reads rows without locking, but includes a version/timestamp column (`WHERE account_id = 1 AND version = 5`). Upon updating, if the version number changed, the update affects $0$ rows, indicating a concurrent collision, and the application retries. Best for read-heavy, low-contention environments.

---

## 🎯 Mini Challenge

Design a robust payment validation workflow for transferring $300.00 from Account 1 to Account 2.

### Required Safeguards Checklist:
1. What should happen if Account 1's balance is less than $300.00?
2. What should happen if Account 2 does not exist (`ROW_COUNT() = 0`)?
3. What should happen if an unexpected error occurs during step 2?

```sql
-- Solution Pattern Demonstration
START TRANSACTION;

-- Step 1: Lock source account and fetch balance
SELECT balance FROM accounts WHERE account_id = 1 FOR UPDATE;

-- Step 2: Debit source account
UPDATE accounts SET balance = balance - 300.00 WHERE account_id = 1;

-- Step 3: Credit target account
UPDATE accounts SET balance = balance + 300.00 WHERE account_id = 2;

-- Application Check Logic:
-- If (source_balance >= 300.00 AND update1_rows == 1 AND update2_rows == 1) THEN
COMMIT;
-- ELSE
-- ROLLBACK;
```

#### Expected Final Balances (if transfer succeeds)
| account_id | holder_name | balance |
| :--- | :--- | :---: |
| 1 | Rahul Sharma | 750.00 |
| 2 | Priya Patel | 900.00 |

#### Explanation of Failure Responses:
1. **Insufficient Balance**: The application detects `balance < 300.00`, issues `ROLLBACK;`, and returns an `"Insufficient Funds"` error to the user.
2. **Missing Target Account**: The second `UPDATE` affects $0$ rows (`ROW_COUNT() = 0`). The application detects the failure, issues `ROLLBACK;`, and restores Account 1's balance.
3. **Database Error/Timeout**: The exception handler catches the database error and immediately triggers `ROLLBACK;`.

---

## 🔗 Related Topics

- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Stored Procedures & Functions](26-stored-procedures.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Indexes & Performance](21-indexes-and-performance.html) | [Next: Common Table Expressions →](23-ctes.html)
