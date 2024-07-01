const CAT_YEARS = [15, 9, 4];
const DOG_YEARS = [15, 9, 5];

export const catAndDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1 || i === 2) {
      catYears += CAT_YEARS[i - 1];
      dogYears += DOG_YEARS[i - 1];
    } else if (i > 2) {
      catYears += CAT_YEARS[2];
      dogYears += DOG_YEARS[2];
    }
  }

  return [humanYears, catYears, dogYears];
};
