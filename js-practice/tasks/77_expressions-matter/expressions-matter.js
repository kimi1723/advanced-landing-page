export const expressionsMatter = (a, b, c) =>
  Math.max(a + b + c, a * (b + c), (a + b) * c, a * b + c, a + b * c, a * b * c);
