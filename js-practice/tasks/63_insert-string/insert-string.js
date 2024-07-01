export const insertString = (str, strToInsert, index) => str.split('').toSpliced(index, 0, strToInsert).join('');
