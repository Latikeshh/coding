---
layout: default
title: "28 sql security"
---

# SQL Security & Permissions

> 🔴 Advanced

## Definition

SQL security includes controlling database identities and permissions, protecting credentials and data, and ensuring applications safely construct queries. Database products provide roles and privilege systems to limit access.

## Hindi Explanation

SQL security mein users aur roles ko sirf zaroori permissions dena, credentials surakshit rakhna, aur query ko safely likhna shamil hai. Least privilege se galat ya unauthorized access ka risk kam hota hai.

## Marathi Explanation

SQL security madhye users aani roles na fakt avashyak permissions dene, credentials surakshit thevne, aani queries surakshitpane tayar karne yांचा samavesh hoto. Least privilege mule anadhikrut access cha dhoka kami hoto.

## Why Use It?

A database may contain personal, financial, or operational data. Least-privilege access limits damage from mistakes and compromised application credentials.

## Syntax

Privilege syntax varies by engine. This broadly familiar example grants read access to a table:

```sql
GRANT SELECT ON products TO reporting_role;
```

A database administrator should create the role and grant only the required permissions using the target engine's exact syntax.

## Example

An application that only displays products generally needs `SELECT`, not permission to drop tables or manage users. A separate migration identity can hold schema-change permissions and should not be used for normal requests.

## Code Breakdown

`GRANT` assigns a privilege on an object to a role or user. `REVOKE` removes a granted privilege, subject to ownership and role-inheritance rules defined by the database.

## Output

The reporting role can read permitted product rows, while unrelated operations remain denied unless other privileges grant them.

## Another Practical Example

Use parameterized queries in application code rather than concatenating user input into SQL:

```text
SELECT * FROM users WHERE email = ?
```

Placeholder syntax depends on the database driver. Bind the email as a value; do not build the SQL string from untrusted text.

## Common Mistakes

- Using an administrator account for an application connection.
- Concatenating user input into SQL, creating SQL injection risk.
- Storing passwords in source code or granting broad privileges for convenience.
- Believing that escaping strings manually is as reliable as parameter binding.

## Important Notes

Use least privilege, parameterized queries, protected secrets, encrypted connections where appropriate, and regular review of grants. SQL permissions do not automatically provide row-level security or application authorization. Grant syntax, default privileges, and role inheritance vary by engine.

## Real-World Usage

Separate read-only analytics from application writes, restrict services to their own schema, and protect sensitive data from unnecessary access.

## Try It Yourself

1. Design separate roles for a reporting user and an application user.
2. Identify which role should be allowed to change table structure.

## Mini Challenge

For an app with product browsing and order placement, list the minimum read/write operations its database role needs. Explain why a parameterized query remains necessary even with restricted permissions.

## Related Topics

- [Stored Procedures & Functions](27-stored-procedures.html)
- [Transactions & ACID](23-transactions.html)

## Navigation

[← SQL Home](./) | [← Previous: Triggers](28-triggers.html) | [Next: SQL Projects →](30-sql-projects.html)


