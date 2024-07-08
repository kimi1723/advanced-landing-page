export const addedCharacters = (originalStr, modifiedStr) => {
  const originalStrArr = originalStr.split('');
  const modifiedStrArr = modifiedStr.split('');

  originalStrArr.forEach((char) => {
    const indexToDelete = modifiedStrArr.findIndex((modifiedChar) => modifiedChar === char);

    modifiedStrArr.splice(indexToDelete, 1);
  });

  const [additionalChar] = modifiedStrArr;

  return additionalChar;
};
