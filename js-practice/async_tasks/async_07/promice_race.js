const num = Promise.resolve(1);
const delayedNum = new Promise((resolve) => setTimeout(() => resolve(5), 2000));
const promises = [num, delayedNum];

const promisesResolved = () =>
  Promise.all(promises)
    .then(([a, b]) => {
      console.log(`Sum: ${a + b}`);
      Promise.race(promises).then((val) => console.log(`First arrived value: ${val}`));
    })
    .catch((err) => console.log(err));

const promisesTimedOut = () => {
  const res = Promise.all(promises);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(res) || res.length < 2) return reject(new Error('Timeout'));
    }, 1000);

    return res.then((data) => console.log(data)).catch((err) => console.log(err));
  });
};

promisesResolved().then(() => promisesTimedOut());
