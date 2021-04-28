/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

var LinkedList = function (val) {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function (val) {
  this.val = val;
  this.next = null;
};

//write methods here!

LinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return undefined;
  let removedNode = this.head;
  this.head = removedNode.next;
  this.length--;
  if (this.length === 0) this.tail = null;
  return removedNode;
};

LinkedList.prototype.contains = function (target) {
  if (!this.head) return undefined;
  var node = this.head;
  while (node) {
    if (node.val === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function () {};

var list = new LinkedList();
console.log('list: ', list.tail); // null
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.addToTail(7);
list.addToTail(8);
list.addToTail(9);
console.log('list: ', list); // 4, 5, 6, 7, 8, 9
list.removeHead();
list.removeHead();
console.log('list: ', list); // 6, 7, 8, 9
console.log('list contains: ', list.contains(6)); // true

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';
