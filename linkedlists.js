class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      this.head = newNode;
      newNode.nextNode = current;
    }
  }

  size() {
    let total = 0;
    if (this.head === null) return total;
    else {
      let current = this.head;
      while (current.nextNode !== null) {
        total++;
        current = current.nextNode;
      }
      return total + 1;
    }
  }

  head() {
    const current = this.head;
    if (!current) return "The list is empty";
    return current;
  }

  tail() {
    let current = this.head;
    if (!current) return "The list is empty";

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    if (!current) return "The list is empty";

    for (let i = 0; i < index; i++) {
      if (!current.nextNode) return "Index out of bounds";
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.head) return "The list is empty";
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    ///////////////THIS IS CHATGPT SOLUTION
    let current = this.head;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    ////////////////THIS IS MY SOLUTION, IT WORKS BUT ITS NOT EFFICIENT
    // const listSize = this.size();
    // const newLastListIndex = listSize - 2;
    // const newLastList = this.at(newLastListIndex);
    // newLastList.nextNode = null;
  }

  contains(value) {
    if (!this.head) return "The list is empty";

    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.head) return "The list is empty";

    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    if (!this.head) return "The list is empty";

    let current = this.head;
    let array = [];
    while (current) {
      array.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    array.push("null");
    return array.join(" -> ");
  }

  insertAt(value, index) {
    if (!this.head || index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let i = 0;
    const newNode = new Node(value);

    while (current && i < index - 1) {
      current = current.nextNode;
      i++;
    }

    if (!current) return "Index out of bounds";

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (!this.head) return null;

    let current = this.head;
    if (index === 0) {
      this.head = current.nextNode;
      return;
    }

    let i = 0;
    while (current && i < index - 1) {
      current = current.nextNode;
      i++;
    }

    if (!current) return "Index out of bounds";

    current.nextNode = current.nextNode.nextNode;
  }
}
