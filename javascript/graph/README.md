# Graphs

<!-- Short summary or background information -->

## Challenge:

<!-- Description of the challenge -->

Implement a graph data structure that represents an adjacency list.

## Methods Available:

- addVertex(vertex) : adds a new vertex to our graph
- addDirectedEdge(startVertex, endVertex) : connects two vertex with a directed edge
- addUndirectedEdge(startVertex, endVertex) : connects two vertex with bi-directional edge
- getSize() : returns the size of the graph
- getNeighbors(vertex) : will return all the neighbors of a given vertex
- bft() : will do a breadth first search and return a set of vertex in the graph
- dft() : will do a depth first search and return a set of vertex in the graph

<br>
<hr>
<br>

# Implement Breadth First Search

<!-- Short summary or background information -->

## Challenge Description:

<!-- Description of the challenge -->

Implement a Breadth First Search of a graph data structure.

## Approach & Efficiency:

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Traverse a graph using a queue. Declare a unique node set. Declare a new queue and add the starting node to it. While there are nodes in the queue, dequeue a node. Check the corresponding list of neighbor vertex. If a neighbor vertex is not in our unique node set, add that node to our set and also enqueue it into our queueu. Keep doing this process until there is nothing in the queue. Return the unique node set.

Space: O(n)

V = number of vertices  
E = number of edges  
Time: O(V = E)

## Solution

<!-- Embedded whiteboard image -->
