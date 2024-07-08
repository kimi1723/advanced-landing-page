const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num >= 2;
};

export const sumOfPrimeIndexes = (arr) => arr.reduce((acc, value, index) => (isPrime(index) ? acc + value : acc), 0);
