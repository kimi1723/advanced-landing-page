export const reverseStringInRange = (str, [firstIndex, secondIndex]) => {
  const strArray = str.split('');
  const reversedRange = strArray.slice(firstIndex, secondIndex + 1).reverse();
  const reversedArr = strArray.toSpliced(firstIndex, reversedRange.length, ...reversedRange);
  const reversedStr = reversedArr.join('');

  return reversedStr;
};
