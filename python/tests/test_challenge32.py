import pytest

from trees.trees import BinaryTree, Node
from challenge32.challenge32 import find_common_values


def test_can_instantiate_a_new_node():
    node = Node()
    assert node


def test_can_instantiate_a_new_binary_tree():
    tree = BinaryTree()
    assert tree


def test_will_return_None_if_one_empty_tree(tree1):
    tree2 = BinaryTree()
    actual = find_common_values(tree1, tree2)
    assert actual == None


def test_will_return_None_if_both_empty_tree():
    tree1 = BinaryTree()
    tree2 = BinaryTree()
    actual = find_common_values(tree1, tree2)
    assert actual == None


def test_will_return_list_of_duplicate_values(tree1, tree2):
    actual = find_common_values(tree1, tree2)
    expected = [2, 4, 6]
    assert actual == expected


@pytest.fixture
def tree1():
    one = Node(1)
    two = Node(2)
    three = Node(3)
    four = Node(4)
    five = Node(5)
    six = Node(6)
    seven = Node(7)

    tree = BinaryTree(one)
    one.left = two
    one.right = three
    two.left = four
    two.right = five
    three.left = six
    three.right = seven

    return tree


@pytest.fixture
def tree2():
    one = Node(11)
    two = Node(2)
    three = Node(31)
    four = Node(4)
    five = Node(51)
    six = Node(6)
    seven = Node(71)

    tree = BinaryTree(one)
    one.left = two
    one.right = three
    two.left = four
    two.right = five
    three.left = six
    three.right = seven

    return tree
