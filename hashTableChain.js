class HashTable {
  constructor(size = 4) {
    this.table = new Array(size)
  }

  hash(key) {
    let primeNum = 37
    let num = 0;
    for (let i = 0; i < key.length; i += 1) {
      num += primeNum + key.charCodeAt(i);
    }
    num = num % this.table.length;
    return parseInt(num)
  }

  insert(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value])
  }

  get(key) {
    let index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1]
        }
      }
    }
    return undefined;
  }
  
  showTable() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`${i} ${this.table[i]}`)
      }
    }
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          if (!valuesArr.includes(this.table[i][j][1])) {
            valuesArr.push(this.table[i][j][1])
          }

        }
      }
    }
    return valuesArr
  }

}

let table = new HashTable();
table.insert("first", "apple")
table.insert("second", "pineapple")
table.insert("third", "mango")
table.insert("fourth", "banana")

console.log(table.table)
console.log(table.get("first"))
console.log(table.values());
console.log(table.showTable())