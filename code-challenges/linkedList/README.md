# Code Challenge 5: Singly Linked List

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

Create 3 methods that can be used on singly linked list.

- insert: adds node to beggining of list
- includes: returns a boolean value if node exist in list
- toString: returns string representing all values in linked list

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Insert:

- declare current variable to hold reference to head.
- create new node Instance
- assign node.next to equal current
- reassign head to what node is now
- Big O is: O(n)

Includes:

- declare current variable to equal head
- iterate through list
- if current value equals search value
- return true
- otherwise return false
- Big O is: O(n)

toString:

- itereate over the node while current.next exist
- add current value into a string variable
- once current.next doesnt exist
- add null to the end
- Big O is: O(n)

## API

<!-- Description of each method publicly available to your Linked List -->
