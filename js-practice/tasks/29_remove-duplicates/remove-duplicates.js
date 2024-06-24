export const removeDuplicates = (arr) => {
  const noDuplicates = [];

  arr.forEach((el) => !noDuplicates.includes(el) && noDuplicates.push(el));

  return noDuplicates;
};
