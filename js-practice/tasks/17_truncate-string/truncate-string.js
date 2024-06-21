export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;

  return maxLength <= 3 ? str.slice(0, maxLength) + '...' : str.slice(0, maxLength - 3) + '...';
};
