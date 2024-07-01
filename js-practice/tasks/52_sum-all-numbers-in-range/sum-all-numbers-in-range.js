export const sumAllNumbersInRange = (range) => {
  const [a, b] = [Math.min(...range), Math.max(...range)];
  let sum = 0;

  for (let i = a; i <= b; i++) sum += i;

  return sum;
};
