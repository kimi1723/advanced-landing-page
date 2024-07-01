export const firstNSmallest = (arr, n) => {
  const smallestElements = arr.toSorted((a, b) => a - b).slice(0, n);

  return arr.filter((el) => smallestElements.includes(el)).slice(0, n);
};
