const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num >= 2;
};

export const calculatePrimorialOfANumber = (n) => {
  const primeNumbers = [];
  let i = 2;

  while (primeNumbers.length < n) {
    if (isPrime(i)) primeNumbers.push(i);
    i++;
  }

  return primeNumbers.reduce((acc, val) => acc * val);
};
