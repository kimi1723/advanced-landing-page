export const dropElements = (arr, check) => {
  const firstPassingIndex = arr.findIndex(check);

  return firstPassingIndex === -1 ? [] : arr.slice(firstPassingIndex);
};
