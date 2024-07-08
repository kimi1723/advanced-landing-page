const msgRegExp = /^(\d\s?,?\s?)*\d$/;
const numbersRegExp = /\d+/g;

export const validateBet = ([numbersAmount, maxNumber], numbersStr) => {
  if (!msgRegExp.test(numbersStr)) return null;

  const numbers = numbersStr.match(numbersRegExp);

  if (numbers.length !== numbersAmount) return null;

  const numbersSet = new Set(numbers);

  if (numbers.length !== numbersSet.size) return null;

  const sortedNumbers = numbers.sort((a, b) => a - b);
  const largestNum = sortedNumbers[sortedNumbers.length - 1];

  if (largestNum > maxNumber) return null;

  return sortedNumbers;
};
