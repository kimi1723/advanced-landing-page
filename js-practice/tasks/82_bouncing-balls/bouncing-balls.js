export const bouncingBalls = (floorHeight, bounceMultiplier, windowHeight) => {
  if (floorHeight <= 0 || bounceMultiplier <= 0 || bounceMultiplier >= 1 || windowHeight > floorHeight) return -1;

  let bounceHeight = floorHeight * bounceMultiplier;
  let ballSeenCount = 1;

  while (bounceHeight >= windowHeight) {
    ballSeenCount += 2;
    bounceHeight *= bounceMultiplier;
  }

  return ballSeenCount;
};
