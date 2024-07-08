function sumWithDelay(numbers, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = numbers.reduce((acc, val) => acc + val, 0);

      resolve(sum);
    }, delay);
  });
}

sumWithDelay([1, 2, 3], 1000).then((res) => console.log(res));
