export const findElements = (arr, check) => {
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const hasPassed = check(currentValue);

    if (hasPassed) return currentValue;
  }
};
