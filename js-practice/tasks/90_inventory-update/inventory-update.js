export const updateInventory = (curInv, newInv) =>
  curInv
    .map(([value, name]) => {
      const duplicatedIndex = newInv.findIndex((item) => item[1] === name);

      if (duplicatedIndex === -1) return [value, name];

      const [removedValue] = newInv.splice(duplicatedIndex, 1)[0];

      return [value + removedValue, name];
    })
    .concat(newInv)
    .sort(([, nameA], [, nameB]) => (nameA > nameB ? 1 : -1));
