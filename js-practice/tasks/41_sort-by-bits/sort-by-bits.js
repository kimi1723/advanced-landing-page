const transferToBits = (a, b) => [a.toString(2), b.toString(2)];

const countBits = (a, b) => {
  const arrA = a.split('');
  const arrB = b.split('');
  let countA = 0;
  let countB = 0;

  arrA.forEach((el) => el === '1' && countA++);
  arrB.forEach((el) => el === '1' && countB++);

  return [countA, countB];
};

export const sortByBits = (arr) =>
  arr.sort((a, b) => {
    const [bitA, bitB] = transferToBits(a, b);
    const [countA, countB] = countBits(bitA, bitB);

    return countA === countB ? a - b : countA - countB;
  });
