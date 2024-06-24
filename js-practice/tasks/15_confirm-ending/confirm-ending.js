export const confirmEnding = (str, targetStr) => {
  const substring = str.substring(str.length - targetStr.length);

  return substring === targetStr;
};
