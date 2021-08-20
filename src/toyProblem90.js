/* leetcode - Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}


Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph */

class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

const cloneGraph = node => {
  return node;
};

// test one
let nodeA = new Node(1);
let nodeB = new Node(2);
let nodeC = new Node(3);
let nodeD = new Node(4);

nodeA.neighbors = nodeB;
nodeA.neighbors = nodeD;
nodeB.neighbors = nodeA;
nodeB.neighbors = nodeC;
nodeC.neighbors = nodeB;
nodeC.neighbors = nodeD;
nodeD.neighbors = nodeA;
nodeD.neighbors = nodeC;

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]])); // [[2,4],[1,3],[2,4],[1,3]]

// test two
let nodeE = new Node();

nodeE.neighbors = null;

console.log(cloneGraph([[]])) // [];

// test three
console.log(cloneGraph([])) // [];

// test four
let nodeG = new Node(1);
let nodeK = new Node(2);

nodeG.neighbors = nodeK;
nodeK.neighbors = nodeG;

console.log(cloneGraph([[2], [1]])) // [[2], [1]];