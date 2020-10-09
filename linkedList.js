class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // creates a new node
    let node = new Node(data);

    // to store current node
    let current;

    // if list is Empty add the
    // data and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // creates a new node
      let node = new Node(data);
      let curr;
      let prev;

      curr = this.head;

      // add the data to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an data
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first data
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an data
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the data
        prev.next = curr.next;
      }
      this.size--;

      // return the remove data
      return curr.data;
    }
  }

  removeNode(data) {
    let current = this.head;
    let prev = null;

    // iterate over the list
    while (current != null) {
      // comparing data with current
      // data if found then remove the
      // and return true
      if (current.data === data) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

}


let list = new LinkedList
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

console.log(list)