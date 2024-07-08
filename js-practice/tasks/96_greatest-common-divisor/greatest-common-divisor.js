export const greatestCommonDivisor = (num1, num2) => {
  const smallerNum = Math.min(num1, num2);
  const limit = Math.ceil(smallerNum);

  for (let i = limit; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) return i;
  }
};
