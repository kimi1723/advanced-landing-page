const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num >= 2;
};

export const minNumberToPrime = (arr) => {
  const sum = arr.reduce((acc, value) => acc + value, 0);
  let closestPrime = sum;

  while (true) {
    if (isPrime(closestPrime)) break;

    closestPrime++;
  }

  const minNumber = closestPrime - sum;

  return minNumber;
};
