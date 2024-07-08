const isNum = (n) => typeof n === 'number';

export const carrying = (a, b) => {
  if (!isNum(a)) return;

  if (b === undefined) return (c) => (isNum(c) ? a + c : undefined);

  return isNum(b) ? a + b : undefined;
};
