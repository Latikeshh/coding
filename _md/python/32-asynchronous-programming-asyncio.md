---
layout: default
title: "32 asynchronous programming asyncio"
---

# ⚡ Asynchronous Programming in Python (`asyncio`, `async` & `await`)

> 🔴 Advanced

## 📖 Definition

**Asynchronous Programming** in Python is a concurrent execution model enabled by the built-in **`asyncio` module** using the **`async` and `await` keywords**. It allows Python programs to handle non-blocking I/O operations (such as API HTTP requests, database queries, file reads, or web socket feeds) on a single thread without waiting or blocking main thread execution.

---

## 🌐 Multilingual Explanation

### English
In traditional synchronous Python, every network call or I/O operation blocks thread execution until a response arrives. `asyncio` introduces an Event Loop that pauses execution of an asynchronous task (`coroutine`) at an `await` checkpoint, yielding control to run other pending tasks concurrently while waiting for I/O responses.

### Hindi (Roman Script)
Normal Python code line-by-line chalta hai aur Jab tak network call ya file read poori nahi hoti, Agla code block wait karta hai. `asyncio` se hum `async def` aur `await` use karke concurrent non-blocking tasks chala sakte hain. Isse Fast APIs (jaise FastAPI framework), web scrapers, aur microservices bohot fast execute hote hain.

### Marathi (Roman Script)
`asyncio` mule Python madhye asynchronous non-blocking code lihita yeto. `async def` ne coroutine tayar hote aani `await` ne I/O response chi wat paahat astana dusre pending tasks run hotaat. FastAPI aani backend microservices madhye `asyncio` cha khup wapar hoto.

### Hinglish
High-performance Python backend apps (FastAPI, Web Sockets, Async DB Drivers like `asyncpg`) asynchronous programming par base hote hain. `time.sleep()` jaise blocking calls Event Loop ko freeze kar dete hain, isliye async code mein `await asyncio.sleep()` use karna zaroori hai.

---

## ⚙️ Event Loop & Coroutine Architecture

```text
[ Main Thread ] ──► [ Event Loop Starts ]
                           │
    ┌──────────────────────┴──────────────────────┐
    ▼                                             ▼
[ Task 1: Fetch User API ]               [ Task 2: Fetch Orders API ]
    │ (Pauses at await)                       │ (Executes concurrently)
    ▼                                             ▼
[ Yields Control to Event Loop ] ──► [ Task 2 Finishes ]
    │                                             │
    ▼                                             ▼
[ Task 1 Data Arrives ──► Resumes Task 1 ] ──► [ Both Tasks Completed ]
```

- **Coroutine**: An asynchronous function defined with `async def`. It returns a coroutine object when called and must be run using `await` or `asyncio.run()`.
- **Event Loop**: The central manager in `asyncio` that coordinates execution of coroutines and switches tasks when an I/O pause occurs.

---

## 💡 Practical Production Examples

### Example 1: Synchronous vs Asynchronous Execution Benchmark

```python
import asyncio
import time

# 1. Asynchronous Task Definition
async def fetch_data(task_id: int, delay_seconds: int) -> dict:
    print(f"[Task {task_id}] Started fetching data...")
    
    # Non-blocking async sleep (yields control to Event Loop)
    await asyncio.sleep(delay_seconds)
    
    print(f"[Task {task_id}] Finished in {delay_seconds}s!")
    return {"task_id": task_id, "status": "COMPLETED"}

# 2. Main Async Entry Point
async def main():
    start_time = time.perf_counter()
    
    # Run 3 async tasks concurrently using asyncio.gather()
    results = await asyncio.gather(
        fetch_data(1, 2), # 2 seconds
        fetch_data(2, 3), # 3 seconds
        fetch_data(3, 1)  # 1 second
    )
    
    elapsed = time.perf_counter() - start_time
    print(f"\nAll tasks finished in {elapsed:.2f} seconds!")
    print("Results:", results)

# Execute event loop
if __name__ == "__main__":
    asyncio.run(main())
```

#### Execution Output:

```text
[Task 1] Started fetching data...
[Task 2] Started fetching data...
[Task 3] Started fetching data...
[Task 3] Finished in 1s!
[Task 1] Finished in 2s!
[Task 2] Finished in 3s!

All tasks finished in 3.01 seconds!
Results: [{'task_id': 1, 'status': 'COMPLETED'}, {'task_id': 2, 'status': 'COMPLETED'}, {'task_id': 3, 'status': 'COMPLETED'}]
```

> ⚡ **Performance Note**: Synchronous execution of tasks (1s + 2s + 3s) would take **6 seconds**. Asynchronous execution completes all 3 tasks concurrently in **3 seconds**!

---

### Example 2: Handling Async Timeouts (`asyncio.wait_for`)

Cancel an API request if it takes longer than a specified timeout limit:

```python
import asyncio

async def long_running_api_request():
    await asyncio.sleep(5) # Simulating a 5-second slow API response
    return "API Payload Delivered"

async def main():
    try:
        # Enforce a 2-second timeout
        data = await asyncio.wait_for(long_running_api_request(), timeout=2.0)
        print("Received Data:", data)
    except asyncio.TimeoutError:
        print("⚠️ Request timed out! Slow API server canceled.")

if __name__ == "__main__":
    asyncio.run(main())
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Using Blocking Calls in Async Functions**: Using synchronous blocking functions like `time.sleep(2)` or `requests.get()` inside `async def` freezes the Event Loop! Use non-blocking async equivalents (`await asyncio.sleep(2)` or `httpx` / `aiohttp`).
- **Forgetting `await` on Coroutines**: Calling an async function without `await` (e.g. `fetch_data()`) returns an unexecuted coroutine object and throws a RuntimeWarning (`coroutine 'fetch_data' was never awaited`).
- **Calling `asyncio.run()` Inside an Already Running Event Loop**: Calling `asyncio.run()` inside Jupyter Notebooks or nested async functions causes `RuntimeError: asyncio.run() cannot be called from a running event loop`. Use `await` directly in those environments.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write an async coroutine `download_file(filename, download_time)` that simulates downloading 3 files (`file1.pdf` 2s, `file2.mp4` 4s, `file3.zip` 1s) concurrently using `asyncio.gather()`.
2. Measure the total execution time and verify that all 3 downloads finish in ~4 seconds instead of 7 seconds.

---

## 🎯 Mini Challenge

Build an asynchronous currency converter simulator:
- Define an async function `fetch_exchange_rate(from_curr, to_curr)` that simulates fetching rates for `USD -> INR`, `EUR -> INR`, and `GBP -> INR` with random network delays (between 1 and 3 seconds).
- Use `asyncio.gather()` to fetch all 3 rates concurrently.
- Format and print the converted values as soon as all responses arrive.

---

## 🔗 Related Topics

- [Advanced Functions, Closures & Scope](15-functions-advanced.html)
- [Iterators and Generators (`yield`)](20-iterators-and-generators.html)
- [Testing and Debugging in Python](28-testing-and-debugging.html)

---

## 🧭 Navigation

[← Python Home](./) | [← Previous: Mini Projects](31-mini-projects.html) | [Python Home →](./)
