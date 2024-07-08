### Async - Fetch with retry

#

Write a function called `retryFetch` that takes a URL and a number of retries as arguments and returns a `Promise` that fetches data from that URL (via `fetch` method). If the `fetch` fails, the function should retry the `fetch` the given number of times before rejecting the `Promise` with an error message.

Don't use `async`/`await`.

Execution:

```javascript
retryFetch('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
