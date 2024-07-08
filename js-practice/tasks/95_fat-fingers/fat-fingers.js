export const fatFingers = (sentence) => {
  let isCapsOn = false;

  return sentence
    .split('')
    .map((char) => {
      const lowerChar = char.toLowerCase();

      if (lowerChar === 'a') {
        isCapsOn = !isCapsOn;
        return;
      }

      if (!isCapsOn) return char;

      const upperChar = char.toUpperCase();
      const isUpperCase = upperChar === char;

      return isUpperCase ? lowerChar : upperChar;
    })
    .join('');
};
