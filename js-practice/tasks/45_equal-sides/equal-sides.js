export const equalSides = (arr) => {
  const sum = arr.reduce((acc, val) => acc + val);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = sum - leftSum;

    if (i > 0) rightSum -= arr[i];

    if (leftSum === rightSum) return i;

    leftSum += arr[i];
  }

  return -1;
};
