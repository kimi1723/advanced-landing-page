export class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }

  getFirstName() {
    return this.fullName.split(' ')[0];
  }

  getLastName() {
    return this.fullName.split(' ')[1];
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(first) {
    const firstName = this.getFirstName();

    this.fullName = this.fullName.replace(firstName, first);
  }

  setLastName(last) {
    const firstName = this.getLastName();

    this.fullName = this.fullName.replace(firstName, last);
  }

  setFullName(firstAndLast) {
    this.fullName = firstAndLast;
  }
}
