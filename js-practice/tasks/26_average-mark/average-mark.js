export const averageMark = (arr) => {
  const avg = arr.reduce((acc, value) => acc + value, 0) / arr.length;

  return Math.floor(avg);
};
