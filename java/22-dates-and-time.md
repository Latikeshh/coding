# Dates and Time

## Definition

The `java.time` API models dates, times, durations, and time zones with purpose-specific immutable types.

## Hindi Explanation

`java.time` date, time aur timezone ko alag types se sahi tarah represent karta hai.

## Marathi Explanation

`java.time` date, time ani timezone yanna vegveglya types madhye yogya prakare dakhavto.

## Hinglish Explanation

Date-only, time-only, local date-time aur global timestamp ke liye alag types chuno.

## Why Use It?

Purpose-specific types avoid confusion between calendar dates, local clock times, and globally ordered instants.

## Syntax and Example

```java
import java.time.LocalDate;
import java.time.Period;

LocalDate today = LocalDate.now();
LocalDate dueDate = today.plusDays(14);
Period untilDue = Period.between(today, dueDate);
System.out.println("Due: " + dueDate);
System.out.println("Days: " + untilDue.getDays());
```

## Code Breakdown

`LocalDate` has no time zone. `LocalTime` is a local wall-clock time; `LocalDateTime` combines date and time but still has no zone. `Instant` is a point on the UTC timeline. `ZonedDateTime` applies a region time zone and its daylight-saving rules.

## Another Practical Example

```java
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

ZonedDateTime meeting = Instant.now().atZone(ZoneId.of("Asia/Kolkata"));
System.out.println(meeting);
```

Parse and format with `DateTimeFormatter`, for example `LocalDate.parse("2026-10-03")`. Prefer ISO forms for machine exchange.

## Common Mistakes

- Using a local date-time to represent a globally timed event without a zone.
- Assuming every day has exactly 24 hours in every time zone.
- Using outdated mutable `Date`/`Calendar` APIs for new code without a reason.

## Important Notes

An unzoned date-time is often called “local” or “zone-naive.” Use `Instant` for event timestamps and `ZonedDateTime` when regional civil time matters. Inject a `Clock` when testable current-time behavior is needed.

## Real-World Usage

Dates schedule appointments, calculate due dates, and timestamp events across regions.

## Try It Yourself

Calculate a library return date 21 days after checkout.

## Mini Challenge

Parse a date, reject dates before today, and display it in ISO format and a human-friendly format.

## Related Topics

[Variables](03-variables-and-data-types.md) · [Testing](23-testing-and-debugging.md)

## Navigation

[Previous: Lambdas and Streams](21-lambdas-and-streams.md) | [Home](00-README.md) | [Next: Testing and Debugging](23-testing-and-debugging.md)
