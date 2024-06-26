export const destroyer = (arr, ...toRemove) => arr.filter((el) => toRemove.indexOf(el) === -1);
