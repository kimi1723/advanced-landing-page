export const missingTerm = (numbers) => {
  const differences = [];

  numbers.forEach((num, index) => {
    if (index === numbers.length - 1) return;

    const numDiff = Math.abs(num - numbers[index + 1]);

    differences.push(numDiff);
  });

  const isAscending = numbers.reduce((acc, num) => acc < num, 0);
  const difference =
    differences.length > 2
      ? differences.find((num, index) => num === differences[index + 1])
      : Math.abs(differences[0] - differences[1]);

  const lastProperNumberIndex = numbers.findIndex(
    (num, index) => (isAscending ? num + difference : num - difference) !== numbers[index + 1]
  );

  const missingNumber = isAscending
    ? numbers[lastProperNumberIndex] + difference
    : numbers[lastProperNumberIndex] - difference;

  return missingNumber;
};
