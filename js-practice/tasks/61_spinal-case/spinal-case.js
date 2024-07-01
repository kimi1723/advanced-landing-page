const regExpes = {
  all: /[A-Z _]/,
  underscoreSpace: /[_ ]/,
  capitalLetters: /[A-Z]/,
};

export const spinalCase = (str) => {
  const { all, underscoreSpace, capitalLetters } = regExpes;

  return str
    .split('')
    .map((el, index) => {
      const lowerCaseEl = el.toLowerCase();

      if (index === 0 || str.charAt(index - 1).match(all)) return lowerCaseEl;

      return (el.match(underscoreSpace) && '-') || (el.match(capitalLetters) && '-'.concat(lowerCaseEl)) || lowerCaseEl;
    })
    .join('');
};
