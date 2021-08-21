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

// input: a series of nodes in a connected undirected graph
// output: a deep copy (clone) of the graph
// constraints: The number of nodes in the graph is in the range [0, 100]. 1 <= Node.val <= 100. Node.val is unique for each node. There are no repeated edges and no self-loops in the graph. The Graph is connected and all nodes can be visited starting from the given node.
// edge cases: if the graph is empty, return empty graph
class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

var cloneGraph = (node) => {
  // create a map object
  let map = {};
  // return traverse function passing in node (base case)
  return traverse(node);

  // create a traverse function passing in node
  function traverse(node) {
    // if there's no node, return node
    if (!node) return node;
    // if there's no map at the value of the current node
    if (!map[node.val]) {
      // assign current map at the val of node to the new Node of the value of node
      map[node.val] = new Node(node.val);
      // assign current map at the val of node's neighbors to a mapped version of node.neighbors passing in neighbor and recursively calling traverse with neighbor passed in
      map[node.val].neighbors = node.neighbors.map((neighbor) =>
        traverse(neighbor)
      );
    }
    // return map at the node val
    return map[node.val];
  };
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

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ])
); // [[2,4],[1,3],[2,4],[1,3]]

// test two
let nodeE = new Node();

nodeE.neighbors = null;

console.log(cloneGraph([[]])); // [];

// test three
console.log(cloneGraph([])); // [];

// test four
let nodeG = new Node(1);
let nodeK = new Node(2);

nodeG.neighbors = nodeK;
nodeK.neighbors = nodeG;

console.log(cloneGraph([[2], [1]])); // [[2], [1]];
