'use strict';

let Graph = require('../graph.js').Graph;
let Vertex = require('../graph.js').Vertex;
let Edge = require('../graph.js').Edge;

describe('Graph Implementation should function correctly', () => {

  it('Node can be successfully added to the graph', () => {

    let graph = new Graph();
    let vertex1 = new Vertex(1);
    graph.addVertex(vertex1);
    expect(graph.adjacencyList.has(vertex1)).toEqual(true);
  });

  it('An edge can be successfully added to the graph', () => {

    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2);
    let neighborsList = graph.getNeighbors(vertex1);
    expect(neighborsList[0].vertex.value).toEqual(2);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    graph.addVertex(vertex1).addVertex(vertex2).addVertex(vertex3).addVertex(vertex4);
    let result = graph.getAllVertex();
    let expectedValues = [1,2,3,4];
    for(let i = 0; i < result.lenth; i++) {
      expect(result[i]).toEqual(expectedValues[i]);
    }
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    graph.addVertex(vertex1).addVertex(vertex2).addVertex(vertex3).addVertex(vertex4);
    graph.addDirectedEdge(vertex1, vertex2);
    graph.addDirectedEdge(vertex2, vertex3);
    graph.addDirectedEdge(vertex3, vertex4);
    let neighbors = graph.getNeighbors(vertex1);
    let expected = [2,3,4];
    for(let i=0; i < neighbors.length;i++) {
      expect(neighbors[i].vertex.value).toEqual(expected[i]);
    }
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    graph.addVertex(vertex1).addVertex(vertex2).addVertex(vertex3).addVertex(vertex4);
    graph.addDirectedEdge(vertex1, vertex2);
    graph.addDirectedEdge(vertex2, vertex3);
    graph.addDirectedEdge(vertex3, vertex4);
    let neighbors = graph.getNeighbors(vertex1);
    for(let i=0; i < neighbors.length;i++) {
      expect(neighbors[i].weight).toEqual(0);
    }
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let vertex4 = new Vertex(4);
    graph.addVertex(vertex1).addVertex(vertex2).addVertex(vertex3).addVertex(vertex4);
    expect(graph.getSize()).toEqual(4);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    graph.addVertex(vertex1);
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();
  });

});


describe('BreadthFirstSearch should return correct values', () => {

});
