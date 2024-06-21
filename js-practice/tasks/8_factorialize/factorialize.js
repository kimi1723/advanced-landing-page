export const factorialize = (n) => {
  let sum = 1;

  while (n !== 0) {
    sum = sum * n;
    n--;
  }

  return sum;
};
