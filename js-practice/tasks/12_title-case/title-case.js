const titleCase = (str) => {
  const words = str.split(' ');
  const wordsLowerCase = words.map((word) => word.toLowerCase());
  const wordsCapitalized = wordsLowerCase.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const strCapitalized = wordsCapitalized.join(' ');

  return strCapitalized;
};
