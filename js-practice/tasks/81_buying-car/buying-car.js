export const buyingCar = (...data) => {
  const monthlySavings = data[2];
  let [carsWorth, amountNeeded, , monthlyPercentDecrease] = data;
  let curMonthlySavings = 0;
  let monthsPassed = 0;

  while (curMonthlySavings + carsWorth < amountNeeded) {
    amountNeeded -= (amountNeeded / 100) * monthlyPercentDecrease;
    carsWorth -= (carsWorth / 100) * monthlyPercentDecrease;

    if (monthsPassed % 2 === 0) monthlyPercentDecrease += 0.5;

    curMonthlySavings += monthlySavings;
    monthsPassed++;
  }

  const moneyLeftOver = Math.floor(curMonthlySavings + carsWorth - amountNeeded);

  return [monthsPassed, moneyLeftOver];
};
