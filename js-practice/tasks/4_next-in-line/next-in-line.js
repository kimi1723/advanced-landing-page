export const nextInLine = (arr, num) => {
  arr.push(num);

  const removedElement = arr.shift();

  return removedElement;
};
