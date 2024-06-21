const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0,
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

export const lookupProfile = (firstName, prop) => {
  const contactIndex = contacts.findIndex((contact) => contact.firstName === firstName);

  if (contactIndex === -1) return 'No such contact';

  const contactProp = contacts[contactIndex][prop];

  if (contactProp === undefined) return 'No such property';

  return contactProp;
};
