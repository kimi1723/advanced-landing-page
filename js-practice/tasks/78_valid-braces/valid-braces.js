const matchingBraces = {
  ')': '(',
  ']': '[',
  '}': '{',
};

export const validBraces = (str) => {
  if (str.length < 2) return false;

  const strArr = str.split('');
  const opened = [];

  for (let i = 0; i < strArr.length; i++) {
    const el = strArr[i];

    switch (el) {
      case '(':
      case '[':
      case '{':
        opened.push(el);
        break;

      case ')':
      case ']':
      case '}':
        if (opened[opened.length - 1] !== matchingBraces[el]) return false;

        opened.pop();
        break;

      default:
        return false;
    }
  }

  return true;
};
