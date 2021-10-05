import pytest

from graph.graph import Graph, Vertex, Edge


def test_can_instantiate_Graph():
    graph = Graph()
    assert graph
    assert graph._adjacency_list == {}


def test_can_instantiate_Vertex():
    vertex = Vertex()
    assert vertex
    assert vertex.value == None


def test_can_instantiate_Edge():
    vertex1 = Vertex("hello")
    edge = Edge(vertex1, weight=50)
    assert edge.vertex == vertex1
    assert edge.weight == 50


def test_vertex_can_be_added_to_graph():
    graph = Graph()
    vertex1 = Vertex("hello")
    graph.add_node(vertex1)
    result = graph.size()
    assert result == 1


def test_an_edge_can_be_added_to_graph():
    graph = Graph()
    vertex1 = Vertex(1)
    vertex2 = Vertex(2)
    graph.add_node(vertex1)
    graph.add_node(vertex2)
    graph.add_edge(vertex1, vertex2, 20)
    vertex1_list = graph._adjacency_list[vertex1]
    first_edge = vertex1_list[0]
    assert first_edge.vertex == vertex2
    assert first_edge.weight == 20


def test_a_collection_of_all_nodes_can_be_retrieved_from_graph():
    graph = Graph()
    vertex1 = Vertex(1)
    vertex2 = Vertex(2)
    vertex3 = Vertex(3)
    graph.add_node(vertex1)
    graph.add_node(vertex2)
    graph.add_node(vertex3)
    list = graph.get_nodes()
    expected = [1, 2, 3]
    for i, obj in enumerate(list):
        assert obj.value == expected[i]


def test_neighbors_are_returned_with_weights_between_nodes_included():
    graph = Graph()
    vertex1 = Vertex(1)
    vertex2 = Vertex(2)
    vertex3 = Vertex(3)
    graph.add_node(vertex1)
    graph.add_node(vertex2)
    graph.add_node(vertex3)
    graph.add_edge(vertex1, vertex2, 20)
    graph.add_edge(vertex1, vertex3, 30)
    actual = graph.get_neighbors(vertex1)
    edge1 = actual[0]
    edge2 = actual[1]
    assert edge1.vertex == vertex2
    assert edge1.weight == 20
    assert edge2.vertex == vertex3
    assert edge2.weight == 30


def test_size_returns_correct_size():
    graph = Graph()
    vertex1 = Vertex(1)
    vertex2 = Vertex(2)
    vertex3 = Vertex(3)
    graph.add_node(vertex1)
    graph.add_node(vertex2)
    graph.add_node(vertex3)
    actual = graph.size()
    assert actual == 3


# def test_a_graph_with_only_one_node_and_edge_can_be_returned():
#     pass


# def test_an_empty_graph_properly_returns_null():
#     pass


# -------------------------------------------------------------------
# Breadth First Search
# -------------------------------------------------------------------


def test_breadth_first_will_return_correct_ouput_given_pandora(example):
    graph = example[0]
    pandora = example[1]
    actual = graph.breadth_first(pandora)
    expected = ["pandora", "arendelle", "metroville", "monstropolis", "narnia", "naboo"]
    assert pandora.value == "pandora"
    assert actual == expected


def test_breadth_first_will_return_correct_ouput_given_arendelle(example):
    graph = example[0]
    arendelle = example[2]
    actual = graph.breadth_first(arendelle)
    expected = ["arendelle", "pandora", "metroville", "monstropolis", "narnia", "naboo"]
    assert arendelle.value == "arendelle"
    assert actual == expected


def test_breadth_first_will_return_correct_ouput_given_narnia(example):
    graph = example[0]
    narnia = example[5]
    actual = graph.breadth_first(narnia)
    expected = ["narnia", "metroville", "naboo", "monstropolis", "arendelle", "pandora"]
    assert narnia.value == "narnia"
    assert actual == expected


@pytest.fixture
def example():
    graph1 = Graph()
    pandora = Vertex("pandora")
    arendelle = Vertex("arendelle")
    metroville = Vertex("metroville")
    monstropolis = Vertex("monstropolis")
    narnia = Vertex("narnia")
    naboo = Vertex("naboo")

    graph1.add_node(pandora)
    graph1.add_node(arendelle)
    graph1.add_node(metroville)
    graph1.add_node(monstropolis)
    graph1.add_node(narnia)
    graph1.add_node(naboo)

    graph1.add_edge(pandora, arendelle)

    graph1.add_edge(arendelle, pandora)
    graph1.add_edge(arendelle, metroville)
    graph1.add_edge(arendelle, monstropolis)

    graph1.add_edge(metroville, narnia)
    graph1.add_edge(metroville, naboo)
    graph1.add_edge(metroville, monstropolis)
    graph1.add_edge(metroville, arendelle)

    graph1.add_edge(monstropolis, arendelle)
    graph1.add_edge(monstropolis, metroville)
    graph1.add_edge(monstropolis, naboo)

    graph1.add_edge(narnia, metroville)
    graph1.add_edge(narnia, naboo)

    graph1.add_edge(naboo, narnia)
    graph1.add_edge(naboo, metroville)
    graph1.add_edge(naboo, monstropolis)
    return graph1, pandora, arendelle, metroville, monstropolis, narnia, naboo
