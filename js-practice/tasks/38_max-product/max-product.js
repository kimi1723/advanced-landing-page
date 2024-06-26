export const maxProduct = (arr) => {
  const isZero = arr.some((el) => el === 0);
  const initialValue = isZero ? 0 : arr[0];

  return arr.reduce((acc, value, index) => {
    if (index + 1 === arr.length) return acc;

    const product = value * arr[index + 1];

    return acc > product ? acc : product;
  }, initialValue);
};
