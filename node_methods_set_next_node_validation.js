class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      }
      else {
        //throw error;
        throw new Error("Invalid next node")
      }
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  
  module.exports = Node;
  
  firstNode.setNextNode(2);