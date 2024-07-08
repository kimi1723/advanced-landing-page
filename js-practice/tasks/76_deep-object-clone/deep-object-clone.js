export const deepObjectClone = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) =>
      typeof value === 'object' && value !== null ? [key, deepObjectClone(value)] : [key, value]
    )
  );
