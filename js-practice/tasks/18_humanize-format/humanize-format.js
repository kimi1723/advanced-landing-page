export const humanizeFormat = (num) => {
  if (typeof num !== 'number') return '';

  const numStringified = num.toString();

  if (num === 11 || num === 12 || num === 13) return numStringified.concat('th');

  const lastChar = numStringified.charAt(numStringified.length - 1);
  let suffix;

  switch (lastChar) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  return numStringified.concat(suffix);
};
