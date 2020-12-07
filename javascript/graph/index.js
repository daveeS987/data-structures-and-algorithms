'use strict';

let Graph = require('./graph.js').Graph;
let Vertex = require('./graph.js').Vertex;

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const nine = new Vertex(9);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addVertex(nine);

graph.addUndirectedEdge(ten, two);
graph.addUndirectedEdge(ten, six);
graph.addUndirectedEdge(ten, three);
graph.addUndirectedEdge(six, seven);
graph.addUndirectedEdge(six, eight);
graph.addUndirectedEdge(three, eight);
graph.addUndirectedEdge(seven, eight);
graph.addUndirectedEdge(seven, nine);
graph.addUndirectedEdge(two, seven);

console.log(graph);

console.log(graph.bft(ten));
console.log(graph.bft(seven));

console.log('DFS:', graph.dft(ten));
console.log('Size:', graph.getSize());
