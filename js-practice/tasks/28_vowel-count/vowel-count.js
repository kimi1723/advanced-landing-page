const vowels = ['a', 'e', 'i', 'o', 'u'];

export const vowelCount = (str) => str.split('').reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
