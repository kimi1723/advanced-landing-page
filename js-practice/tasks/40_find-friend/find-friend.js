export const findFriend = (arr) => {
  let possibilities = 0;
  const possibleIndexes = [];

  for (let i = 1; i < arr.length - 1; i++) {
    const colors = [arr[i - 1], arr[i], arr[i + 1]];
    let blueCount = 0;
    let redCount = 0;

    for (let j = 0; j < colors.length; j++) {
      const color = colors[j];
      const levelIndex = [-1, 0, 1];
      const leveledIndex = i + levelIndex[j];

      if (color === 'blue') blueCount++;

      if (color === 'red' && !possibleIndexes.includes(leveledIndex)) {
        redCount++;
        possibleIndexes.push(leveledIndex);
      }
    }

    if (blueCount === 2 && redCount === 1) {
      possibilities++;
    }
  }

  return possibilities;
};
