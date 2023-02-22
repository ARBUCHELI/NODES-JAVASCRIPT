class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

module.exports = Node;

const firstNode = new Node(3);
console.log(firstNode.data);
console.log(firstNode.next);