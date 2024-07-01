export const swapCases = (str) =>
  str
    .split('')
    .map((el) => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
    .join('');
