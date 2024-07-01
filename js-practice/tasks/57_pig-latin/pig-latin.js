const vowels = ['a', 'e', 'i', 'o', 'u'];
const suffixes = ['way', 'ay'];

export const pigLatin = (str) => {
  const strArr = str.split('');
  let strToMove = '';

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) break;

    strToMove = strToMove.concat(strArr[i]);
  }

  const suffixIndex = Number(!!strToMove);

  return str.replace(strToMove, '').concat(strToMove, suffixes[suffixIndex]);
};
