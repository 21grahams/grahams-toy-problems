/* leetcode - Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack */

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