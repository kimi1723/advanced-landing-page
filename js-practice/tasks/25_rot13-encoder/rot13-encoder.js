export const rot13Encoder = (str) => {
  const charCodes = str.split('').map((char) => {
    let charCode = char.charCodeAt();

    if (charCode >= 65 && charCode < 78) {
      charCode += 13;
    } else if (charCode >= 78 && charCode <= 90) {
      charCode -= 13;
    }

    return charCode;
  });
  const transformedStr = String.fromCharCode(...charCodes);

  return transformedStr;
};
