function retryFetch(url, retries) {
  // your code
}

retryFetch('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then(data => console.log(data))
  .catch(error => console.error(error));