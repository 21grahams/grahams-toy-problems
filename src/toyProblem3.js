/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */


// pseudoclassical instantiation

var Stack = function() {

  this.storage = {};
  this.count = 0;

  Stack.prototype.push = (val) => {
      this.storage[this.count] = val;
      this.count++;
  };

  Stack.prototype.pop = () => {
      this.count--;
      if (this.count < 0) {
          this.count = 0;
      }
      return this.storage[this.count];
  };

  Stack.prototype.size = () => {
      return this.count;
  }

};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  this.head = 0;
  this.tail = 0;
  this.queueStorage = {};

  Queue.prototype.enqueue = (val) => {
      this.queueStorage[this.tail] = val;
      this.tail++;
  };

  Queue.prototype.deqeueue = () => {
      if (this.tail > this.head) {
          var removedOne = this.queueStorage[this.head];
          delete this.queueStorage[this.head];
          this.head++;
          return removedOne;
      }
  };

  Queue.prototype.size = () => {
      return this.tail - this.head;
  };
};

//=======================================
//=================STACK=================
//=======================================
let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log('STACK: ', stack.size()) // 5
stack.pop()
console.log('STACK: ', stack.size()) // 4
//=======================================
//=================QUEUE=================
//=======================================
let index = new Queue();
index.enqueue(10)
index.enqueue(20)
index.enqueue(30)
index.enqueue(40)
index.enqueue(50)
console.log('QUEUE: ', index.size()) // 5
index.deqeueue()
index.deqeueue()
console.log('QUEUE: ', index.size()) // 3