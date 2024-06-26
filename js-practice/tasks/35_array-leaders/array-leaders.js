export const arrayLeaders = (arr) => {
  const leadersArray = [];
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];

    if (currentValue > sum) leadersArray.unshift(currentValue);
    sum += currentValue;
  }

  return leadersArray;
};
