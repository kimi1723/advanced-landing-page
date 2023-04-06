function fetchWithTimeout(url, timeout) {
  // your code
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then(data => console.log(data))
  .catch(error => console.error(error));