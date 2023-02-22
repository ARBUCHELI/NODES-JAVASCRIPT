class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    this.next = node;
  }
}

const firstNode = new Node('I am an instance of a Node!');

module.exports = Node;

const secondNode = new Node(3);

firstNode.setNextNode(secondNode);

console.log(firstNode);