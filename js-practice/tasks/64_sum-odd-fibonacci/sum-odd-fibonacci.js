export const sumOddFibonacci = (n) => {
  const fiboNumbers = [1, 1];
  let i = 0;

  while (true) {
    const nextNumber = fiboNumbers[i] + fiboNumbers[i + 1];

    if (nextNumber > n) break;

    fiboNumbers.push(nextNumber);
    i++;
  }

  return fiboNumbers.reduce((acc, val) => (val % 2 === 1 ? acc + val : acc), 0);
};
