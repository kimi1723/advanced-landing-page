const DNA_PAIRS = new Map([
  ['A', 'T'],
  ['T', 'A'],
  ['G', 'C'],
  ['C', 'G'],
]);

export const DNAPairing = (str) => str.split('').map((el) => [el, DNA_PAIRS.get(el)]);
