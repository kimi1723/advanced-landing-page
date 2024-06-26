export const uniqueInOrder = (sequence) => {
  const sequenceArr = Array.isArray(sequence) ? sequence : sequence.split('');
  const uniqueSequence = [];

  sequenceArr.forEach((el, index) => el !== sequenceArr[index + 1] && uniqueSequence.push(el));

  return uniqueSequence;
};
