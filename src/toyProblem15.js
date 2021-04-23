// create a binaryHeap and implement insert, remove and priority queue

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

var heap = new MaxBinaryHeap();
heap.insert(55);
console.log('heapInsert ', heap)
// [41, 39, 33, 18, 27, 12]
//  0   1   2   3   4   5
