export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = { value: null };
    this.amount = 0;
  }

  setNextValue(value) {
    this.iterate((cell) => {
      if (cell.next === null) {
        const lastCell = cell;

        lastCell.next = { value, next: null };

        return { isFinished: true };
      }
    });
  }

  getCell({ searchedIndex, value }) {
    if (searchedIndex < 0) return null;

    const { cbCell: cell, cbIndex: index, cbCellBefore: cellBefore } =
      this.iterate(
        (cbCell, cbIndex, cbCellBefore) =>
          ((!value && searchedIndex === cbIndex) || value === cbCell.value) && {
            isFinished: true,
            cbCell,
            cbIndex,
            cbCellBefore,
          }
      ) || {};

    return { cell, index, cellBefore };
  }

  push(n) {
    const { head, tail } = this;

    tail.value = n;
    this.amount++;

    if (head) return this.setNextValue(n);

    this.head = { value: n, next: null };
  }

  iterate(cb, obj, index = 0, cellBefore) {
    const { head } = this;
    const cell = obj || head;
    const { isFinished, ...rest } = cb(cell, index, cellBefore) || {};

    if (isFinished) return rest;

    if (cell.next !== null) return this.iterate(cb, cell.next, index + 1, cell);
  }

  pop() {
    const { amount } = this;
    const { cell: lastCell } = this.getCell({ searchedIndex: amount - 2 }) || {};

    this.amount--;

    if (lastCell?.value) {
      this.tail.value = lastCell.value;
      lastCell.next = null;
    } else {
      this.tail = null;
      this.head.value = null;
    }
  }

  insertAfter(value, valueToInsert) {
    if (!valueToInsert) return false;

    const { cell } = this.getCell({ value }) || {};

    if (!cell) return false;

    this.amount++;
    cell.next = { ...cell.next, value: valueToInsert };
  }

  removeItem(value) {
    const { cell, cellBefore } = this.getCell({ value }) || {};

    if (!cell) return false;

    if (!cellBefore) {
      const nextCell = { ...this.head.next };
      const isNext = nextCell.hasOwnProperty('next');

      this.head = isNext ? nextCell : null;

      if (!isNext) this.tail = { value: null };
    }

    if (cellBefore) {
      const nextCell = cell.next;

      cellBefore.next = nextCell;

      if (!nextCell) this.tail = cellBefore.value;
    }

    this.amount--;

    return true;
  }
}
