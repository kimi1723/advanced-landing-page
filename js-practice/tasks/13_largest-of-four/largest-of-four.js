export const largestOfFour = (arr) => {
  const largestNumbers = arr.map((subArray) => subArray.reduce((acc, current) => (current >= acc ? current : acc), 0));

  return largestNumbers;
};
