export const symmetricDifference = (...arrays) =>
  [...arrays.reduce((acc, val) => acc.symmetricDifference(new Set(val)), new Set([]))].toSorted((a, b) => a - b);
