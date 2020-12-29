// import { sumPrimeIndexes } from './sum-of-prime-indexes';

describe.skip('sumPrimeIndexes', () => {
  it('sumPrimeIndexes([]) should return 0', () => {
    expect(sumPrimeIndexes([])).toBe(0);
  });

  it('sumPrimeIndexes([1, 2, 3, 4]) should return 7', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4])).toBe(7);
  });

  it('sumPrimeIndexes([1, 2, 3, 4, 5, 6]) should return 13', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4, 5, 6])).toBe(13);
  });

  it('sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8]) should return 21', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8])).toBe(21);
  });

  it('sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should return 21', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(21);
  });

  it('sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) should return 33', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).toBe(33);
  });

  it('sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) should return 47', () => {
    expect(sumPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(47);
  });
});
