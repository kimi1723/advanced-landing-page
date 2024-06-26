export const numbersToReversedArray = (num) => {
  const arr = num.toString().split('');
  const reversedNumArr = arr.toReversed().map((n) => +n);

  return reversedNumArr;
};
