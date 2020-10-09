class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length == 0;
  }

  peek() {
    return this.data[0];
  }
}

let queue1 = new Queue();
console.log(queue1);

queue1.enqueue('a');
queue1.enqueue('b');
queue1.enqueue('c');
queue1.enqueue('d');
queue1.enqueue('e');

console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.peek());
console.log(queue1.dequeue());
