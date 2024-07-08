export class Stack {
  constructor() {
    this.last = null;
    this.isEmpty = true;
    this.size = 0;
  }

  push(value) {
    const { last } = this;

    this.isEmpty = false;
    this.size++;
    this.last = !last ? { value, prev: null } : { value, prev: { ...last } };
  }

  pop() {
    if (this.size === 0) return;

    const {
      last: { value, prev },
    } = this;

    this.last = { ...prev };

    return value;
  }
}
