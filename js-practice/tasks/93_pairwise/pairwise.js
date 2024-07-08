export const pairwise = (nums, providedNum) => {
  const usedIndexes = new Set();

  return nums.reduce((acc, val, index) => {
    if (usedIndexes.has(index)) return acc;

    const pairIndex = nums.findIndex((num, pIndex) => {
      const isEqual = num + val === providedNum;
      const isDiffIndex = pIndex !== index;
      const isBanned = usedIndexes.has(pIndex);

      return isEqual && isDiffIndex && !isBanned;
    });

    if (pairIndex !== -1) {
      usedIndexes.add(index).add(pairIndex);

      return acc + index + pairIndex;
    }

    return acc;
  }, 0);
};
