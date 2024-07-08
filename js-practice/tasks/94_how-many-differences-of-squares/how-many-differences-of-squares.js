export const squares = (n) => {
  const limit = Math.ceil(n / 2);
  const range = new Set();
  let differencesCount = 0;

  for (let i = 1; i <= n; i++) range.add(i);

  for (let i = limit; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      const squareI = i * i;
      const squareJ = j * j;
      const squareDiff = squareI - squareJ;

      if (range.has(squareDiff)) {
        differencesCount++;
        range.delete(squareDiff);
      }
    }
  }

  return differencesCount;
};
