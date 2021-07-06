# Stacks

Implement a stack data structure using linked list

## Links

- [See the Code](./stacks.py)
- [See the Test](../tests/test_stacks.py)

## Methods

### Push

- Create new node
- point new nodes next towards top
- reassign top to be new node
- Big O:
  - Time: O(1)

### Pop

- if top is None, return None
- store top value into popped variable
- reassign top to be next node
- return popped
- Big O:
  - Time: O(1)

### Peek

- If top is empty, return None
- return top value
- Big O:
  - Time: O(1)

### isEmpty

- return boolean whether top is None
- Big O:
  - Time: O(1)
