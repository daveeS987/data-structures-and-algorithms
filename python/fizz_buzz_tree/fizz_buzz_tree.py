from queues.queues import Queue


class KNodes:
    def __init__(self, value=None, children=[]):
        self.value = value
        self.children = children


class KaryTree:
    def __init__(self, node=None):
        self.root = node

    def breadth_first(self):
        queue = Queue()
        queue.enqueue(self.root)
        result = []

        while not queue.isEmpty():
            front = queue.dequeue()
            for node in front.children:
                queue.enqueue(node)
            result.append(front.value)
        return result


def fizz_buzz_helper(num):

    if num % 15 == 0:
        return "FizzBuzz"
    if num % 3 == 0:
        return "Fizz"
    if num % 5 == 0:
        return "Buzz"
    else:
        return str(num)


def fizz_buzz_tree(tree):

    if tree.root is None:
        raise Exception("Tree is empty")

    queue = Queue()
    queue.enqueue(tree.root)

    while not queue.isEmpty():
        front = queue.dequeue()
        front.value = fizz_buzz_helper(front.value)
        for node in front.children:
            queue.enqueue(node)

    return tree


if __name__ == "__main__":

    node5 = KNodes(5, [])
    node6 = KNodes(6, [])
    node7 = KNodes(7, [])
    node8 = KNodes(8, [])
    node9 = KNodes(9, [])
    node10 = KNodes(10, [])
    node11 = KNodes(11, [])
    node4 = KNodes(4, [node8, node9])
    node2 = KNodes(2, [node4, node5, node11])
    node3 = KNodes(3, [node6, node7, node10])
    node1 = KNodes(1, [node2, node3])
    new_tree = KaryTree(node1)

    new_tree.breadth_first()
    expected = [1, 2, 3, 4, 5, 11, 6, 7, 10, 8, 9]
    print(new_tree.breadth_first())
