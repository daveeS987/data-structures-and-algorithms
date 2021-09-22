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


class Vertex:
    def __init__(self, value=None):
        self.value = value

    # def __str__(self):
    #     return self.value


class Edge:
    def __init__(self, vertex, weight=0):
        self.vertex = vertex
        self.weight = weight


# if __name__ == "__main__":
#     graph = Graph()
#     vertex1 = Vertex(1)
#     vertex2 = Vertex(2)
#     vertex3 = Vertex(3)
#     graph.add_node(vertex1)
#     graph.add_node(vertex2)
#     graph.add_node(vertex3)
#     list = graph.get_nodes()
#     expected = [1, 2, 3]

#     test_list = []
#     for x in list:
#         print(x.value)
#         test_list.append(x.value)

#     print(test_list)
