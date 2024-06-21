export const randomFraction = () => {
  const randomNum = Math.random();

  return randomNum === 0 ? randomFraction() : randomNum;
};
