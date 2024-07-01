export const findObjectAnalogy = (arr, obj) => {
  const keys = Object.keys(obj);

  return arr.filter((el) => keys.every((key) => el.hasOwnProperty(key) && el[key] === obj[key]));
};
