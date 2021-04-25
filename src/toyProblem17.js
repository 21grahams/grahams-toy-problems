// create a graph and implement insert vertex, edge, remove edge, remove vertex

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

var graham = new Graph();
graham.addVertex('Boulder');
graham.addVertex('Colorado');
console.log('graham BEFORE edges: ', graham); // Graph { adjacencyList: { Boulder: [], Colorado: [] } }
graham.addEdge('Colorado', 'Boulder')
console.log('graham AFTER edges: ', graham); // Graph { adjacencyList: { Boulder: ['Colorado'], Colorado: ['Boulder'] } }