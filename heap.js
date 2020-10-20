class MaxHeap {
  constructor() {
    this.items = [];
  }

  insert(item) {
    let i = this.items.length;
    this.items.push(item);
    while (i > 0 && this.items[Math.floor((i + 1) / 2 - 1)] < this.items[i]) {
      let parentIndex = Math.floor((i + 1) / 2 - 1);
      let temp = this.items[i];
      this.items[i] = this.items[parentIndex];
      this.items[parentIndex] = temp;
      i = parentIndex;
    }
    return this.items;
  }

  remove(item) {
    let i = this.items.indexOf(item);
    this.items[i] = this.items.pop();
    while (true) {
      let lowerChild =
        this.items[(i + 1) * 2] > this.items[(i + 1) * 2 - 1]
          ? (i + 1) * 2
          : (i + 1) * 2 - 1;
      if (this.items[i] < this.items[lowerChild]) {
        let temp = this.items[i];
        this.items[i] = this.items[lowerChild];
        this.items[lowerChild] = temp;
        i = lowerChild;
      } else break;
    }
    return this.items;
  }

  find(item) {
    let found;
    if (this.items[0] === item) {
      return this.items[0];
    }
    if (item > this.items[0]) {
      return 'not in heap';
    }
    let parents = [];
    parents.push(0);
    while (true) {
      if (parents.length === 0) {
        return 'not in heap';
      }
      if (this.items[Math.floor((parents[0] + 1) * 2 - 1)] === item) {
        found = this.items[Math.floor((parents[0] + 1) * 2 - 1)];
        break;
      } else {
        if (this.items[Math.floor((parents[0] + 1) * 2 - 1)]) {
          parents.push(Math.floor((parents[0] + 1) * 2 - 1));
        }
      }
      if (this.items[Math.floor((parents[0] + 1) * 2)] === item) {
        found = this.items[Math.floor((parents[0] + 1) * 2)];
        break;
      } else {
        if (this.items[Math.floor((parents[0] + 1) * 2)]) {
          parents.push(Math.floor((parents[0] + 1) * 2));
        }
      }
      parents.shift();
    }
    return { value: found, index: this.items.indexOf(found) };
  }

  heapify(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return this.items;
  }
}

let heap = new MaxHeap();
console.log(heap.heapify([17, 1, 2, 3, 7, 25, 36, 19, 100]));
console.log(heap.remove(17));
console.log(heap.find(327));
