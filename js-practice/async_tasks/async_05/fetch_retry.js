function retryFetch(url, retries) {
  let i = 1;

  return (function retry() {
    const res = fetch(url);

    return res
      .then((data) => data)
      .catch((err) => {
        if (i < retries) {
          i++;
          return retry();
        }

        return err;
      });
  })();
}

retryFetch('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
