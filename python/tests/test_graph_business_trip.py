import pytest

from graph.graph import Graph, Vertex, Edge
from graph_business_trip.graph_business_trip import business_trip


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


def test_input_metroville_pandora_returns_true(example):
    graph = example[0]
    metroville = example[3]
    pandora = example[1]


def test_happy_path_multiple_cities_returns_true(example):
    graph = example[0]
    arendelle = example[2]
    monstropolis = example[4]
    naboo = example[6]


def test_unhappy_path_returns_fales(example):
    pass


def test_unhappy_path_with_multiple_cities_return_false(example):
    pass


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

    graph1.add_edge(pandora, arendelle, 150)
    graph1.add_edge(pandora, metroville, 82)

    graph1.add_edge(arendelle, pandora, 150)
    graph1.add_edge(arendelle, metroville, 99)
    graph1.add_edge(arendelle, monstropolis, 42)

    graph1.add_edge(metroville, narnia, 37)
    graph1.add_edge(metroville, naboo, 26)
    graph1.add_edge(metroville, monstropolis, 105)
    graph1.add_edge(metroville, arendelle, 99)

    graph1.add_edge(monstropolis, arendelle, 42)
    graph1.add_edge(monstropolis, metroville, 105)
    graph1.add_edge(monstropolis, naboo, 73)

    graph1.add_edge(narnia, metroville, 37)
    graph1.add_edge(narnia, naboo, 250)

    graph1.add_edge(naboo, narnia, 250)
    graph1.add_edge(naboo, metroville, 26)
    graph1.add_edge(naboo, monstropolis, 73)
    return graph1, pandora, arendelle, metroville, monstropolis, narnia, naboo
