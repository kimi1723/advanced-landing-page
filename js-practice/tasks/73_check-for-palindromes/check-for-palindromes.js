const alphaNumericRegExp = /[a-zA-Z0-9]/;

export const checkForPalindromes = (str) => {
  const strArr = str.split('');
  const filteredArr = strArr.filter((el) => el.match(alphaNumericRegExp));
  const filteredStr = filteredArr.join('').toLowerCase();
  const filteredReversedStr = filteredArr.toReversed().join('').toLowerCase();

  return filteredStr === filteredReversedStr;
};
