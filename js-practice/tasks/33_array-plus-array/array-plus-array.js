export const arrayPlusArray = (arr1, arr2) =>
  arr1.length > arr2.length
    ? arr1.map((el, index) => (!arr2[index] ? el : el + arr2[index]))
    : arr2.map((el, index) => (!arr1[index] ? el : el + arr1[index]));
