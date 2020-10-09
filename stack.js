class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return 'Underflow';
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}


let stack1 = new Stack

stack1.push('a')
stack1.push('b')
stack1.push('c')
stack1.push('d')
stack1.push('e')

console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.pop());