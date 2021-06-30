# Reverse A Linked List

Given a Linked list, return the same list reversed.

## White Board Process

![Reverse Linked List](reverse_linked_list.jpg)

## Approach and Efficiency

I utilized 3 variables for reference as I traversed the list. A previous, current, and nextUp. On each traversal, I would point the current node to the previous. And then reassign all variables to be their respective next node.

Big O:

- Space: O(1)
- Time: O(n)
