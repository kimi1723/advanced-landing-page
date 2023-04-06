function fetchData(url) {
  // your code
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));