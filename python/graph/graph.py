from queues.queues import Queue


class Graph:
    def __init__(self):
        self._adjacency_list = {}

    def add_node(self, node):
        """
        add node
        Arguments: value
        Returns: The added node
        Add a node to the graph
        """
        # v = Vertex(value)
        self._adjacency_list[node] = []
        return node

    def add_edge(self, start_vertex, end_vertex, weight=0):
        """
        add edge
        Arguments: 2 nodes to be connected by the edge, weight (optional)
        Returns: nothing
        Adds a new edge between two nodes in the graph
        If specified, assign a weight to the edge
        Both nodes should already be in the Graph
        """
        if start_vertex not in self._adjacency_list:
            raise KeyError("Starting Vertex not in Graph")
        if end_vertex not in self._adjacency_list:
            raise KeyError("End Vertex not in Graph")

        edge = Edge(end_vertex, weight)
        adjacencies = self._adjacency_list[start_vertex]
        adjacencies.append(edge)

    def get_nodes(self):
        """
        get nodes
        Arguments: none
        Returns all of the nodes in the graph as a collection (set, list, or similar)
        """
        return self._adjacency_list.keys()

    def get_neighbors(self, vertex):
        """
        get neighbors
        Arguments: node
        Returns a collection of edges connected to the given node
        Include the weight of the connection in the returned collection
        """
        return self._adjacency_list[vertex]

    def size(self):
        """
        size
        Arguments: none
        Returns the total number of nodes in the graph
        """
        return len(self._adjacency_list)

    def breadth_first(self, vertex):
        nodes = []
        breadth = Queue()
        visited = set()

        breadth.enqueue(vertex)
        visited.add(vertex)

        while not breadth.isEmpty():
            front = breadth.dequeue()
            nodes.append(front.value)

            for child in [e.vertex for e in self.get_neighbors(front)]:
                if child not in visited:
                    visited.add(child)
                    breadth.enqueue(child)

        return nodes


class Vertex:
    def __init__(self, value=None):
        self.value = value


class Edge:
    def __init__(self, vertex, weight=0):
        self.vertex = vertex
        self.weight = weight
