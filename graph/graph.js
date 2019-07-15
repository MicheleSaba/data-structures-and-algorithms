// AddNode()
// Adds a new node to the graph
// Takes in the value of that node
'use strict';
// Returns the added node
// AddEdge()
// Adds a new edge between two nodes in the graph
// Include the ability to have a “weight”
// Takes in the two nodes to be connected by the edge
// Both nodes should already be in the Graph
// GetNodes()
// Returns all of the nodes in the graph as a collection (set, list, or similar)
// GetNeighbors()
// Returns a collection of nodes connected to the given node
// Takes in a given node
// Include the weight of the connection in the returned collection
// Size()
// Returns the total number of nodes in the graph

class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    this.adjList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
  }
  depthFirst() {
    const nodes = Object.keys(this.adjList);
    const visited = {};
    for (let i = 0; i < nodes.length; i++) {
      const nodes = nodes[i];
      this.depthFirstHelper(node, visited);
    }
  }
  depthFirstHelper(vertex, visited) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      const neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neightbors[i];
        this.depthFirstHelper(neightbor, visited);
      }
    }
  }
}
module.exports = Graph;
