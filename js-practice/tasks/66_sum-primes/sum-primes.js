const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num >= 2;
};

export const sumPrimes = (n) => {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};
