"""
- Given a binary tree where values are linked list, linkedlist values are listed
- Write a function that will return info in a tuplet format,
    - sum of all values
    - largest
    - smallest

"""

from queues.queues import Queue, Node


def get_stuff(BinaryTree):
    queue = Queue()
    queue.enqueue(BinaryTree.root)

    while not queue.isEmpty():

        front = queue.dequeue()

        if front.left:
            queue.enqueue(front.left)

        if front.right:
            queue.enqueue(front.right)

        current = front.value.head

        while current:

