class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


"""
animal object =
{
    animal: "dog"
}
"""


class Animal_Shelter:
    def __init__(self):
        self.front = None
        self.rear = None
        self.length = 0

    def enqueue(self, animal_obj):
        node = Node(animal_obj)

        if self.front is None:
            self.front = node
            self.rear = node
        else:
            self.rear.next = node
            self.rear = node
        self.length += 1

    def dequeue(self, pref):

        if self.front is None:
            raise Exception("Animal Shelter is Empty")

        if self.front.value["animal"] == pref:
            dequed = self.front.value["animal"]
            self.front = self.front.next
            self.length -= 1
            return dequed

        rotation_count = self.length
        answer = None

        while rotation_count >= 0:
            if self.front.value["animal"] == pref:
                answer = self.front.value["animal"]
                self.front = self.front.next
                self.length -= 1
                rotation_count -= 1
                break
            else:
                dequed = self.front.value
                dequed_node = Node(dequed)
                self.front = self.front.next
                self.rear.next = dequed_node
                self.rear = dequed_node
                rotation_count -= 1

        for i in range(rotation_count):
            dequed = self.front.value
            dequed_node = Node(dequed)
            self.front = self.front.next
            self.rear.next = dequed_node
            self.rear = dequed_node

        return answer
