const CHAR_MAP = new Map([
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ["'", '&apos;'],
]);

const entityRegExp = /[&<>"']/;

export const convertHTMLEntities = (str) =>
  str
    .split('')
    .map((el) => el.replace(entityRegExp, (i) => CHAR_MAP.get(i)))
    .join('');
