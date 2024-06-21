export const findNumbers = (str) => {
  const matchingStrings = str.match(/\d+/g);
  const matchingNumbers = matchingStrings.map((s) => +s);

  return matchingNumbers;
};
