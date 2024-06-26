export const peopleInBus = (arr) => arr.reduce((acc, [peopleIn, peopleOff]) => acc + peopleIn - peopleOff, 0);
