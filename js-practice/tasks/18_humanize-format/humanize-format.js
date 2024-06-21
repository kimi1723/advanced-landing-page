export const humanizeFormat = (num) => {
  if (typeof num !== 'number') return '';

  if (num === 11 || num === 12 || num === 13) return num + 'th';

  const numStringified = num.toString();
  const lastChar = numStringified.charAt(numStringified.length - 1);

  switch (lastChar) {
    case '1':
      return num + 'st';
    case '2':
      return num + 'nd';
    case '3':
      return num + 'rd';
    default:
      return num + 'th';
  }
};
