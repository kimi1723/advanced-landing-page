const randomFraction = () => {
    const randomNum = Math.random();

    if(randomNum === 0) return randomFraction();

    return randomNum;
};