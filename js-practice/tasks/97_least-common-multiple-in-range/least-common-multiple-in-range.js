const isDivisionable = (range, lcm) => range.every((num) => lcm % num === 0);

export const leastCommonMultipleInRage = (range) => {
  const [from, to] = range.sort((a, b) => a - b);
  const numsInRange = [];
  let lcm1 = from * to;
  let lcm2 = from * to;

  for (let i = from; i <= to; i++) numsInRange.push(i);

  while (true) {
    if (isDivisionable(numsInRange, lcm1)) return lcm1;
    if (isDivisionable(numsInRange, lcm1)) return lcm2;

    lcm1 += from;
    lcm2 += to;
  }
};
