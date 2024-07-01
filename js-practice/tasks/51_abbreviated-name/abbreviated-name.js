export const abbreviatedName = (fullName) => {
  const names = fullName.split(' ');
  const namesAbbreviated = names.map((name, index) => (index === 0 ? name : name.slice(0, 1).concat('.')));

  return namesAbbreviated.join(' ');
};
