export const diffArray = (arr1, arr2) => {
  const filteredArr1 = arr1.filter((el) => arr2.indexOf(el) === -1);
  const filteredArr2 = arr2.filter((el) => arr1.indexOf(el) === -1);

  return filteredArr1.concat(filteredArr2);
};
