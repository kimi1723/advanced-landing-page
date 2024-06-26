export const rowWeights = (arr) =>
  arr.reduce(([team1, team2], value, index) => (index % 2 === 0 ? [team1 + value, team2] : [team1, team2 + value]), [
    0,
    0,
  ]);
