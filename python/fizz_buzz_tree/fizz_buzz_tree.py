from queues.queues import Queue


class K_node:
    def __init__(self, value=None, children=[]):
        self.value = value
        self.children = children


class K_Tree:
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
    pass
