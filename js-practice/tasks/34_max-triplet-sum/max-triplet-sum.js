export const maxTripletSum = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const sortedArrNoDuplicates = [];
  let sum = 0;

  sortedArr.forEach((el) => !sortedArrNoDuplicates.includes(el) && sortedArrNoDuplicates.push(el));

  for (let i = 0; i < 3; i++) {
    sum += sortedArrNoDuplicates[sortedArrNoDuplicates.length - 1 - i];
  }

  return sum;
};
