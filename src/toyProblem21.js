// create a tree class using the functional-shared instantiation pattern and implement addChild and contains

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

const extend = (newTree, treeMethods) => {
  for (let key in treeMethods) {
    newTree[key] = treeMethods[key]
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {

  var child = Tree(value);
  this.children.push(child);
  };

treeMethods.contains = function(target) {

  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  };

var tree = new Tree();
tree.addChild('graham')
tree.addChild('kirsh')
console.log('tree: ', tree.contains('graham')); // true
console.log('tree: ', tree.contains('Galvanize')); // false
console.log('tree: ', tree)