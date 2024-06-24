export const arrayChunks = (arr, size) => {
  if (arr.length === size) return arr;

  const mainArr = [];
  const chunksNeeded = Math.ceil(arr.length / size);

  for (let i = 0; i < chunksNeeded; i++) {
    const chunk = arr.splice(0, size);

    mainArr.push(chunk);
  }

  return mainArr;
};
