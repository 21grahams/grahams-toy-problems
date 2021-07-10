/* leetcode - Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack */

// input: an empty stack that I will be creating, initializing and building methods on including push, pop, top and retrieving
// output: The minStack function and the methods on MinStack completed
// constraints: -2^31 <= val <= 2^31 - 1 || Methods pop, top and getMin operations will always be called on non-empty stacks. At most 3 * 10^4 calls will be made to push, pop, top, and getMin
// edge cases: none at this time
var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function(val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function() {
  this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return Math.min(...this.stack)
};

// Runtime: 324 ms, faster than 10.08% of JavaScript online submissions for Min Stack.
// Memory Usage: 46.6 MB, less than 30.49% of JavaScript online submissions for Min Stack.

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('first call: ', minStack.getMin()) // -3
minStack.pop();
minStack.top();    // return 0
console.log('second call: ', minStack.getMin()) // -2