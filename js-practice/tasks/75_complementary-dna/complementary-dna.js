const DNA_PAIRS = new Map([
  ['A', 'T'],
  ['T', 'A'],
  ['G', 'C'],
  ['C', 'G'],
]);

export const complementaryDNA = (str) =>
  str
    .split('')
    .map((el) => DNA_PAIRS.get(el))
    .join('');
