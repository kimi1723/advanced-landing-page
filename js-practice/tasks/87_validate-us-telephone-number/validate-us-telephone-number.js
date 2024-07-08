const usTelRegExp = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

export const validateUSTelephoneNumber = (tel) => usTelRegExp.test(tel);
