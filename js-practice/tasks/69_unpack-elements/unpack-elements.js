export const unpackElements = (arr) =>
  arr.reduce((acc, val) => (Array.isArray(val) ? unpackElements([...acc, ...val]) : [...acc, val]), []);
