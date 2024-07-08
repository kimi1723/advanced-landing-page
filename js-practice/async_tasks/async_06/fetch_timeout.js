function fetchWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const res = fetch(url);

    setTimeout(() => reject(new Error('Response did not arrive on time')), timeout);

    return res.then((data) => resolve(data)).catch((err) => reject(err));
  });
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
