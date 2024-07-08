### Async - Fetch data with await

#

Write a function called `fetchData` that takes a URL as an argument and returns a `Promise` that resolves with the data fetched from that URL (via `fetch` method) as a JavaScript object. If an error occurs during the fetch, the `Promise` should reject with an error message.

Use `async`/`await`.

Execution:

```javascript
fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
