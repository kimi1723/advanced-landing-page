export const stringExpansion = (str) => {
  const strArr = str.split('');
  let expansionedStr = '';
  let times = 0;

  for (let i = 0; i < strArr.length; i++) {
    const el = strArr[i];
    const nextEl = strArr[i + 1];
    let j = 0;

    if (Number.isNaN(+el)) {
      do {
        expansionedStr = expansionedStr.concat(el);
        j++;
      } while (j < times);
    } else if (Number.isNaN(+nextEl)) times = +el;
  }

  return expansionedStr;
};
