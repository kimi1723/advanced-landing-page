export const binaryDecode = (str = '') =>
  str
    .split(' ')
    .map((el) => String.fromCharCode(parseInt(el, 2)))
    .join('');
