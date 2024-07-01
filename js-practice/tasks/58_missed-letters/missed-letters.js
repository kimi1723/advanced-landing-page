export const missedLetters = (str) => {
  const firstLetterCode = str.charCodeAt(0);
  const lastLetterCode = str.charCodeAt(str.length - 1);
  let i = firstLetterCode;
  let index = 1;

  while (i < lastLetterCode - 1) {
    const charCode = str.charCodeAt(index);

    if (charCode !== firstLetterCode + index) return String.fromCharCode(charCode - 1);

    i++;
    index++;
  }
};
