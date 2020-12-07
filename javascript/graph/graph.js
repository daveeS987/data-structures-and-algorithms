'use strict';

let Queue = require('../queues/queues.js');
let Stack = require('../stacks/stacks.js');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }


  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    return this;
  }


  addDirectedEdge(startVertex, endVertex) {
    if (this.adjacencyList.has(startVertex) && this.adjacencyList.has(endVertex)) {
      const neighbors = this.adjacencyList.get(startVertex);
      neighbors.push(new Edge(endVertex));
      return this;
    } else {
      console.error('Vertex may not be present in this graph');
      return null;
    }
  }


  addUndirectedEdge(startVertex, endVertex) {
    this.addDirectedEdge(startVertex, endVertex);
    this.addDirectedEdge(endVertex, startVertex);
    return this;
  }


  getSize() {
    return this.adjacencyList.size;
  }


  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }


  bft(startVertex) {

    const queue = new Queue();
    const visitedNodes = new Set();
    queue.enqueue(startVertex);
    visitedNodes.add(startVertex);

    while (queue.peek()) {

      const currentVertex = queue.dequeue();
      const neighbors = this.adjacencyList.get(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;
        if (visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        queue.enqueue(neighborVertex);
      }
    }
    return visitedNodes;
  }


  dft(startVertex) {

    const stack = new Stack();
    const visitedNodes = new Set();
    stack.push(startVertex);
    visitedNodes.add(startVertex);

    while(stack.peek()) {

      let currentVertex = stack.pop();
      let neighborList = this.adjacencyList.get(currentVertex);

      for(let edge of neighborList) {
        let neighborVertex = edge.vertex;
        if(visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        stack.push(neighborVertex);
      }
    }
    return visitedNodes;
  }

}


module.exports = {Vertex, Edge, Graph};

