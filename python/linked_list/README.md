# Singly Linked List
<!-- Short summary or background information -->

A collection of methods on a Linked List Class

## Linked List Methods

### Insert

- Create a new Node
- Have that node point to whatever head is pointing at
- Reassign head to equal the new node
- Big O:
  - Time: O(1)
  - Space: O(1)

### Includes

- Declare a variable called current equal to head
- Use a while loop to traverse the list
- On each node, check if its the target
- Return true if its found
- Return false if while loop doesnt return true
- Big O:
  - Time: O(n)
  - Space: O(1)

### To String

- Declare a variable to store a string
- Use a while loop to traverse the list
- On each node, add the value in string format
- Return the string at the end
- Big O:
  - Time: O(n)
  - Space: O(1)
