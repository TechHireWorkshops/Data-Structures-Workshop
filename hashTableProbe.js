class HashTable {
  constructor(size = 4) {
    (this.table = new Array(size)), (this.values = []);
  }

  hash(key) {
    let primeNum = 37;
    let num = 0;
    for (let i = 0; i < key.length; i += 1) {
      num += primeNum + key.charCodeAt(i);
    }
    num = num % this.table.length;
    return parseInt(num);
  }

  insert(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = key;
      this.values[index] = value;
    } else {
      while (this.table[index]) {
        index++;
      }
      this.table[index] = key;
      this.values[index] = value;
    }
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index] === key) {
          return this.values[index];
        }
      }
    }
    return undefined;
  }

  values() {
    return this.values;
  }

  keys() {
    return this.table;
  }
}

let table = new HashTable();
table.insert('first', 'apple');
table.insert('second', 'pineapple');
table.insert('third', 'mango');
table.insert('fourth', 'banana');
// console.log(h.get("third"));
console.log(table);
console.log(table.keys());
console.log(table.values);
