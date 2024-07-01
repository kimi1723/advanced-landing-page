export const runningAverage = () => {
  const prevScores = [];

  return (n) => {
    prevScores.push(n);

    return prevScores.reduce((acc, val) => acc + val, 0) / prevScores.length;
  };
};
