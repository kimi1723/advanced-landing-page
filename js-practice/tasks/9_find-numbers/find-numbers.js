export const findNumbers = (str) => {
  const matchingStrings = str.match(/\d+/g);
  const matchingNumbers = matchingStrings.map((str) => +str);

  return matchingNumbers;
};
