export const repeatString = (str, times) => {
  if (times <= 0) return '';

  let repeatedStr = str;

  for (let i = 1; i < times; i++) {
    repeatedStr = repeatedStr.concat(str);
  }

  return repeatedStr;
};
