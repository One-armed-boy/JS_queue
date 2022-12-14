class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  enqueue(element) {
    const node = new Node(element);
    if (this.length === 0) {
      this.start = node;
    } else {
      this.end.next = node;
    }
    this.length++;
    this.end = node;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    const startNode = this.start;
    this.start = startNode.next;
    this.length--;
    return startNode.data;
  }

  getAll() {
    const result = [];
    let node = this.start;
    while (node) {
      result.push(node.data);
      node = node.next;
    }
    return result;
  }
}

export default Queue;
