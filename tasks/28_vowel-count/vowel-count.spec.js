// import { getVowelCount } from './vowel-count';

xdescribe('vowel-count', () => {
    test(`getVowelCount("abracadabra") should return 5`, () => {
        expect(getVowelCount("abracadabra")).toBe(5);
    });

    test(`getVowelCount("pear tree") should return 4`, () => {
        expect(getVowelCount("pear tree")).toBe(4);
    });

    test(`getVowelCount("o a kak ushakov lil v kashu kakao") should return 12`, () => {
        expect(getVowelCount("o a kak ushakov lil v kashu kakao?")).toBe(12);
    });

    test(`getVowelCount("my pyx") should return 0`, () => {
        expect(getVowelCount("my pyx'")).toBe(0);
    });
});