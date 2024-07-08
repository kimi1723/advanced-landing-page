const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

export const calculateOrbitalPeriod = (data) =>
  data.map(({ name, avgAlt }) => {
    const a = EARTH_RADIUS + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(a ** 3 / GM));

    return { name, orbitalPeriod };
  });
