export default String.prototype.camelCase = function () {
  const str = this.toString();
  const strArr = str.split(' ');
  const camelArr = strArr.map((el) => el.charAt(0).toUpperCase().concat(el.slice(1)));

  return camelArr.join('');
};
