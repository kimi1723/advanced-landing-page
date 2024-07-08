function fetchData(url) {
  return fetch(url);
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
