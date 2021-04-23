// create a binary search tree and implement insert and find

class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }
  insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
          this.root = newNode;
          return this;
      } else {
          let current = this.root;
          while (true) {
              if (val < current.val) {
                  if (current.left === null) {
                      current.left = newNode;
                      return this;
                  } else {
                      current = current.left;
                  }
              } else if (val > current.val) {
                  if (current.right === null) {
                      current.right = newNode;
                      return this;
                  } else {
                      current = current.right;
                  }
              }
          }
      }
  }
}

var tree = new BinarySearchTree();
tree.insert(1);
tree.insert(200);
tree.insert(30);
tree.insert(400);
tree.insert(50);
console.log('tree: ', tree)

//====================================
// PREVIOUS TO BUILDING INSERT
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
//====================================