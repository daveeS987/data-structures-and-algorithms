'use strict';

let Graph = require('./graph.js').Graph;
let Vertex = require('./graph.js').Vertex;

// const graph = new Graph();

// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const three = new Vertex(3);
// const eight = new Vertex(8);
// const nine = new Vertex(9);

// graph.addVertex(ten);
// graph.addVertex(two);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(three);
// graph.addVertex(eight);
// graph.addVertex(nine);

// graph.addUndirectedEdge(ten, two);
// graph.addUndirectedEdge(ten, six);
// graph.addUndirectedEdge(ten, three);
// graph.addUndirectedEdge(six, seven);
// graph.addUndirectedEdge(six, eight);
// graph.addUndirectedEdge(three, eight);
// graph.addUndirectedEdge(seven, eight);
// graph.addUndirectedEdge(seven, nine);
// graph.addUndirectedEdge(two, seven);

// console.log(graph);

// console.log(graph.bft(ten));
// console.log(graph.bft(seven));

// console.log('DFS:', graph.dft(ten));
// console.log('Size:', graph.getSize());

let graph = new Graph();
const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const metroville = new Vertex('Metroville');
const monstroplolis = new Vertex('Monstroplolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');

graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(metroville);
graph.addVertex(monstroplolis);
graph.addVertex(narnia);
graph.addVertex(naboo);

graph.addUndirectedEdge(pandora, arendelle);

graph.addUndirectedEdge(arendelle, metroville);
graph.addUndirectedEdge(arendelle, monstroplolis);

graph.addUndirectedEdge(monstroplolis, naboo);
graph.addUndirectedEdge(monstroplolis, metroville);

graph.addUndirectedEdge(metroville, narnia);
graph.addUndirectedEdge(metroville, naboo);

graph.addUndirectedEdge(naboo, narnia);

let result = graph.bft(pandora);
let expected = [
  'Pandora',
  'Arendelle',
  'Metroville',
  'Monstroplolis',
  'Narnia',
  'Naboo',
];
console.log('result:', result);
