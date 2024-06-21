export const factorialize = (n) => {
  let sum = 1,
    num = n;

  while (num !== 0) {
    sum *= num;
    num--;
  }

  return sum;
};
