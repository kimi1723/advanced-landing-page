export const checkLetters = (arr) => {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  let i = 0;

  while (i <= str2.length) {
    const index = str1.indexOf(str2.charAt(i));

    if (index === -1) return false;

    i++;
  }

  return true;
};
