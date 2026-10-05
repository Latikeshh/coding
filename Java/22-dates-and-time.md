---
layout: default
title: "Dates and Time"
---

# Modern Date and Time API in Java

> 🟡 Intermediate

## 📖 Definition

The **`java.time` API** (introduced in Java 8 / JSR-310) provides an immutable, thread-safe framework for modeling dates, times, durations, periods, time zones, and timestamps. It completely replaces legacy mutable classes (`java.util.Date` and `java.util.Calendar`).

## 🇮🇳 Hindi

Modern Java (`java.time`) mein Date aur Time immutable aur thread-safe hote hain. Unzoned calendar dates ke liye `LocalDate`, wall-clock time ke liye `LocalTime`, global UTC timestamps ke liye `Instant`, aur timezone-aware time ke liye `ZonedDateTime` ka use kiya jata hai.

## 🚩 Marathi

Java 8 madhye `java.time` API aali. `LocalDate`, `LocalTime`, `Instant`, aani `ZonedDateTime` immutable ahet.

## 📝 1. Key `java.time` Class Categories

| Class | What It Models | Example Output |
|---|---|---|
| `LocalDate` | Date only (Year, Month, Day) | `2026-10-04` |
| `LocalTime` | Time only (Hour, Minute, Second, Nano) | `14:30:45.123` |
| `LocalDateTime` | Date and Time without time zone | `2026-10-04T14:30:45` |
| `ZonedDateTime` | Date & Time with explicit Zone ID | `2026-10-04T14:30:45+05:30[Asia/Kolkata]` |
| `Instant` | Point on timeline in UTC (Epoch milliseconds) | `2026-10-04T09:00:00Z` |
| `Period` | Date-based amount of time (Years, Months, Days) | `2 Years 3 Months` |
| `Duration` | Time-based amount of time (Seconds, Nanoseconds) | `45 Minutes 30 Seconds` |

## 📝 2. Formatting & Parsing with `DateTimeFormatter`

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

LocalDateTime now = LocalDateTime.now();

// Creating custom formatter pattern
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

// Formatting Date-Time Object to String
String formattedDate = now.format(formatter); // "04/10/2026 14:30:00"

// Parsing String back into Date-Time Object
LocalDateTime parsedDate = LocalDateTime.parse("15/08/2026 09:15:00", formatter);
```

## 💡 Complete Example: Subscription Due Date & Duration Tracker

```java
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class DateTimeMaster {
    public static void main(String[] args) {
        // 1. Current Date & Time
        LocalDate today = LocalDate.now();
        ZonedDateTime currentUtcInstant = ZonedDateTime.now(ZoneId.of("UTC"));
        ZonedDateTime istDateTime = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));

        // 2. Subscription Due Date Calculation
        LocalDate subscriptionStartDate = LocalDate.of(2026, 10, 1);
        LocalDate renewalDueDate = subscriptionStartDate.plusMonths(1);

        // Period difference in Days/Months
        Period periodRemaining = Period.between(today, renewalDueDate);
        long daysUntilRenewal = ChronoUnit.DAYS.between(today, renewalDueDate);

        // 3. Measuring Duration Execution Time
        Instant start = Instant.now();
        // Simulate minor processing delay
        try { Thread.sleep(50); } catch (InterruptedException ignored) {}
        Instant end = Instant.now();
        Duration processingTime = Duration.between(start, end);

        // 4. Custom Formatting
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy (EEEE)");

        System.out.println("=== DATE AND TIME DASHBOARD ===");
        System.out.println("Today's Date           : " + today.format(customFormatter));
        System.out.println("IST Time Zone          : " + istDateTime.format(DateTimeFormatter.ISO_ZONED_DATE_TIME));
        System.out.println("Renewal Due Date       : " + renewalDueDate.format(customFormatter));
        System.out.println("Days Until Renewal     : " + daysUntilRenewal + " days");
        System.out.println("Processing Time        : " + processingTime.toMillis() + " ms");
    }
}
```

## 👀 Output

```text
=== DATE AND TIME DASHBOARD ===
Today's Date           : 04-Oct-2026 (Sunday)
IST Time Zone          : 2026-10-04T10:45:00+05:30[Asia/Kolkata]
Renewal Due Date       : 01-Nov-2026 (Sunday)
Days Until Renewal     : 28 days
Processing Time        : 52 ms
```

## ⚠️ Common Mistakes

- Using legacy `java.util.Date` or `java.util.Calendar` in new code. They are mutable and not thread-safe!
- Using `LocalDateTime` for global scheduled events across different countries without specifying a `ZoneId` or `Instant`.
- Expecting `Period` to measure exact seconds/hours (`Period` handles years/months/days; use `Duration` for seconds/nanoseconds!).

## 🛡️ Safety / Important Notes

All `java.time` classes are **immutable** and **thread-safe**. Methods like `.plusDays()` or `.minusMonths()` do not mutate the target instance; they return a brand-new Date object.

## 🌍 Real-World Usage

Calculating subscription renewal dates, recording database audit timestamps, scheduling multi-timezone calendar meetings, and computing SLA expiration countdowns.

## 🧪 Try It Yourself

1. Create a `LocalDate` for your birthday. Calculate your age using `Period.between(birthday, LocalDate.now())`.
2. Format today's date using pattern `"EEEE, MMMM dd, yyyy"`.

## 🎯 Mini Challenge

Write a program that takes two timestamp strings and calculates the total duration difference in hours and minutes using `Duration`.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.html)
- [Testing and Debugging](23-testing-and-debugging.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Lambdas and Streams](21-lambdas-and-streams.html) | [Next: Testing and Debugging →](23-testing-and-debugging.html)

