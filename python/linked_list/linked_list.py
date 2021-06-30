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


def linked_list_zip(linklist1, linklist2):

    if linklist1.head is None and linklist2.head is None:
        return None

    if linklist1.head is None:
        return linklist2

    if linklist2.head is None:
        return linklist1

    l1cur = linklist1.head
    l1next = l1cur.next
    l2cur = linklist2.head
    l2next = l2cur.next

    while l1next and l2next:
        l1cur.next = l2cur
        l2cur.next = l1next
        l1cur = l1next
        l2cur = l2next
        l1next = l1next.next
        l2next = l2next.next

    if l1next is None and l2next is None:
        l1cur.next = l2cur
    elif l1next is not None:
        l1cur.next = l2cur
        l2cur.next = l1next
    elif l2next is not None:
        l2cur.next = l2cur
    return linklist1


def get_duplicate_count(link1, link2):

    if link1.head is None or link2.head is None:
        return 0

    storage = {}
    current1 = link1.head

    while current1 is not None:
        if storage[current1.value]:
            storage += 1
        else:
            storage[current1.value] = 1

    count = 0
    current2 = link2.head

    while current2 is not None:
        if storage[current2.value]:
            count += 1
        current2 = current2.next

    return count


if __name__ == "__main__":

    llist = LinkedList()
    llist.append("a").append("b").append("c").append("d").append("e")

    print(str(llist))

    pass
