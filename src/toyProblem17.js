// create a graph and implement insert vertex, edge, remove edge, remove vertex

class Graph {
  constructor() {
      this.adjacencyList = {};
  }
  addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

var graham = new Graph();
graham.addVertex('Boulder')
graham.addVertex('Colorado')
console.log('graham: ', graham) // Graph { adjacencyList: { Boulder: [], Colorado: [] } }