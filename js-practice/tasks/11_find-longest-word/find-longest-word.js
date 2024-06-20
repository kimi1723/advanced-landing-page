const findLongestWord = (str) => {
  const words = str.split(' ');
  const longestWordLength = words.reduce((acc, current) => (current.length > acc ? current.length : acc), 0);

  return longestWordLength;
};
