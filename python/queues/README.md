# Queues

Implement a queue data structure using linked list

## Links

- [See The Code](./queues.py)
- [See The Test](../tests/test_queue.py)

## Methods

### Enqueue

- Create new node
- if front doesnt exist, reassign queues front and rear to equal node
- otherwise
- make the rear point to new node
- reassign rear to be new node
- Big O:
  - Time: O(1)

### Dequeue

- if front doesnt exist return None
- store front value into dequed variable
- reassign front to be the next item
- return dequed item
- Big O:
  - Time: O(1)

### Peek

- If empty return None
- return fronts value
- Big O:
  - Time: O(1)

### isEmpty

- return boolean whether front is None
- Big O:
  - Time: O(1)
