class Animal:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


class Animal_Shelter:
    def __init__(self):
        self.front = None
        self.rear = None
        self.length = 0

    def enqueue(self, animal):

        if self.front is None:
            self.front = animal
            self.rear = animal
        else:
            self.rear.next = animal
            self.rear = animal
        self.length += 1

    def dequeue(self, pref):

        if self.front is None:
            raise Exception("Animal Shelter is Empty")

        if self.front.value == pref:
            dequed = self.front.value
            self.front = self.front.next
            self.length -= 1
            return dequed

        rotation_count = self.length
        answer = None

        while rotation_count >= 0:
            if self.front.value == pref:
                answer = self.front.value
                self.front = self.front.next
                self.length -= 1
                rotation_count -= 1
                break
            else:
                dequed = self.front
                self.front = self.front.next
                self.rear.next = dequed
                self.rear = dequed
                rotation_count -= 1

        for i in range(rotation_count):
            dequed = self.front
            self.front = self.front.next
            self.rear.next = dequed
            self.rear = dequed

        return answer
