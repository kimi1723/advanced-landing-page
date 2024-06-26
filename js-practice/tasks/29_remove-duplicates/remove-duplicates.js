export const removeDuplicates = (arr) => {
  const noDuplicatesSet = new Set();

  arr.forEach((el) => noDuplicatesSet.add(el));

  return Array.from(noDuplicatesSet);
};
