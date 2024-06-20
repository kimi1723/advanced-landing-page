const findLongestWord = (word) => {
  const words = word.split(' ');
  const longestWordLength = words.reduce((acc, current) => (current.length > acc ? current.length : acc), 0);

  return longestWordLength;
};
