export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

export class Man extends Human {}

export class Woman extends Human {}

export class God {
  static create() {
    const adam = new Man('Adam', 'male');
    const eve = new Woman('Eve', 'female');

    return [adam, eve];
  }
}
