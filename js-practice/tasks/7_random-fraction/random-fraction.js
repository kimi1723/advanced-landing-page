export const randomFraction = () => {
  const randomNum = Math.random();

  return randomNum ? randomNum : randomFraction();
};
