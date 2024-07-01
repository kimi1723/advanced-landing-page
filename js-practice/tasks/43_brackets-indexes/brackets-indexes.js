export const bracketsIndexes = (str, givenIndex) => {
  if (str.charAt(givenIndex) !== '(') return -1;

  const strArr = str.split('');
  let openCount = 0;
  let closingIndex = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '(' && givenIndex === i) {
      for (let j = i; j < strArr.length; j++) {
        const el = strArr[j];

        if (el === '(') openCount++;

        if (el === ')') openCount--;

        if (openCount === 0) {
          closingIndex = j;
          break;
        }
      }

      break;
    }
  }
  return closingIndex;
};

bracketsIndexes('((1)23(45))(aB)', 1);
