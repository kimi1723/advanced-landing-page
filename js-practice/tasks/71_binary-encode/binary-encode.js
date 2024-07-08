export const binaryEncode = (str = '') =>
  str
    .split('')
    .map((el) => el.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
