const reverseString = str => {
    const splitStr = str.split('');
    const reversedStrArray = splitStr.toReversed();
    const reversedStr = reversedStrArray.join('');

    return reversedStr;
};