class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self, node=None):
        self.head = node

    def insert(self, value):
        node = Node(value)

        node.next = self.head
        self.head = node
        return self

    def includes(self, target):
        current = self.head

        while current:
            if current.value == target:
                return True
            current = current.next
        return False

    def __str__(self):
        string = ""

        current = self.head
        while current:
            string += f"{ {current.value} } -> "
            current = current.next

        string += " None "
        return string

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return self
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node
        return self

    def insert_before(self, target, new_value):
        new_node = Node(new_value)

        if self.head is None:
            return None

        if self.head.value == target:
            new_node.next = self.head
            self.head = new_node
            return self

        current = self.head

        while current is not None:
            if current.next.value == target:
                new_node.next = current.next
                current.next = new_node
                return self
            current = current.next

        print("Target not within list")

    def insert_after(self, target, new_value):

        new_node = Node(new_value)

        if self.head is None:
            return None

        current = self.head

        while current is not None:
            if current.value == target:
                new_node.next = current.next
                current.next = new_node
                return self
            current = current.next

        print("Target not within list")

    def kth_from_the_end(self, k):

        if k < 0:
            return "K is negative"

        if self.head is None:
            return None

        count = 0
        current = self.head

        while current:
            count += 1
            current = current.next

        if count < k:
            return "K is larger than linked list"

        current = self.head
        count = count - k

        while count > 1:
            current = current.next
            count -= 1

        return current.value


if __name__ == "__main__":

    llist = LinkedList()
    llist.append("a").append("b").append("c").append("d").append("e")

    print(str(llist))

    pass
