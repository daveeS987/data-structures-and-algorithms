class Node:
    def __init__(self, value=None, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev


class Doubly_Linked_list:
    def __init__(self, node=None):
        self.head = node

    def insert(self, value):
        node = Node(value)

        if self.head is not None:
            node.next = self.head
            self.head.prev = node
        self.head = node
        return self

    def append(self, value):
        node = Node(value)

        if self.head is None:
            self.head = node
            return self

        current = self.head
        while current.next is not None:
            current = current.next

        node.prev = current
        current.next = node
        return self

    def insert_after(self, value, target):
        pass
