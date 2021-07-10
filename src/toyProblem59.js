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
const MinStack = () => {
  // do something
};

MinStack.prototype.push = function(val) {

};

MinStack.prototype.pop = function() {

};

MinStack.prototype.top = function() {

};

MinStack.prototype.getMin = function() {

};

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2