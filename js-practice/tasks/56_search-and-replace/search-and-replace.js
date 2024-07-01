export const searchAndReplace = (sentence, searchValue, replaceValue) => {
  const replaceValueCased = (searchValue.charAt(0) === searchValue.charAt(0).toLowerCase()
    ? replaceValue.charAt(0).toLowerCase()
    : replaceValue.charAt(0).toUpperCase()
  ).concat(replaceValue.slice(1));

  return sentence.replace(searchValue, replaceValueCased);
};
