export const traverseTree = (tree, cb) => {
  const newObj = {};

  if (Array.isArray(tree))
    return tree.forEach((el) => {
      if (typeof el === 'object' && el !== null) traverseTree(el, cb);
    });

  Object.entries(tree).forEach(([key, value]) => {
    const isObject = typeof value === 'object';
    const isNull = value === null;

    if (isObject && !isNull) return traverseTree(value, cb);

    newObj[key] = value;
  });

  return cb(newObj);
};
