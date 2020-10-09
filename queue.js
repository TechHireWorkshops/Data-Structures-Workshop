class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  peek() {
    return this.items[0]
  }
}

let queue1 = new Queue
console.log(queue1)

queue1.enqueue('a')
queue1.enqueue('b')
queue1.enqueue('c')
queue1.enqueue('d')
queue1.enqueue('e')

console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.peek());
console.log(queue1.dequeue());
