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
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const deletedVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, deletedVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

var graham = new Graph();
graham.addVertex('Boulder');
graham.addVertex('Colorado');
graham.addVertex('United States');
graham.addVertex('North America');
graham.addVertex('Western Hemisphere');
graham.addVertex('Globe');
console.log('graham BEFORE edges: ', graham); // Graph { adjacencyList: { Boulder: [], Colorado: [], 'United States': [], 'North America': [], 'Western Hemisphere': [], Globe: [] } }
graham.addEdge('Colorado', 'Boulder');
graham.addEdge('Western Hemisphere', 'Globe');
console.log('graham AFTER edges: ', graham); // Graph { adjacencyList: { Boulder: ['Colorado'], Colorado: ['Boulder'], 'Western Hemisphere': ['Globe'], Globe: [ 'Western Hemisphere' ] } }
graham.removeEdge('Colorado', 'Boulder');
graham.removeEdge('Western Hemisphere', 'Globe');
console.log('graham AFTER removeEdge: ', graham); // Graph { adjacencyList: { Boulder: [], Colorado: [], 'United States': [], 'North America': [], 'Western Hemisphere': [], Globe: [] } }
graham.addEdge('Colorado', 'Boulder');
graham.addEdge('Colorado', 'Globe');
graham.removeVertex('Colorado')
console.log('graham AFTER removeVertex: ', graham); // Graph { adjacencyList: { Boulder: [], 'United States': [], 'North America': [], 'Western Hemisphere': [], Globe: [] } }
