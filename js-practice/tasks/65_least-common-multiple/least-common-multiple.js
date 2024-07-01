const getGreatestCommonDivisor = (a, b) => (b !== 0 ? getGreatestCommonDivisor(b, a % b) : a);

export const leastCommonMultiple = (a, b) => Math.abs(a * b) / getGreatestCommonDivisor(a, b);
