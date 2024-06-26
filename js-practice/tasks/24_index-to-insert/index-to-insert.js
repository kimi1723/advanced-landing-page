export const indexToInsert = (arr, value) => {
  const sortedArr = arr.toSorted((a, b) => a - b);
  const lowestIndex = sortedArr.findIndex((el) => el >= value);

  if (lowestIndex === -1) return arr.length;

  return lowestIndex;
};
