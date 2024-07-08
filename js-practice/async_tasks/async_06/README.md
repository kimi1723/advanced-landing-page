### Async - Fetch with timeout

#

Write a function called `fetchWithTimeout` that takes a URL and a timeout duration (in milliseconds) as arguments and returns a `Promise` that fetches data from that URL (via `fetch` method). If the `fetch` takes longer than the specified timeout duration, the function should reject the `Promise` with an error message.

Don't use `async`/`await`.

Execution:

```javascript
fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 5000)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
