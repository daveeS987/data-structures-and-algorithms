# Challenge 15 : Trees

<!-- Short summary or background information -->

Create a class Binary Search Tree with methods attached

## Challenge

<!-- Description of the challenge -->

- Create an add() method that will add new node based on the value
- Create a contain() method that returns boolean wheter the value is in our tree

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

add() will recursively go through the tree comparing each node value with the current value we're trying to add. Based on the value, it will continue going either left or right

Big O time: O(n)  
Big O Space: O(1)

contains() will iterate through the tree checking each node value and moving left or right accordingly

Big O time: O(n)  
Big O Space: O(1)

## API

<!-- Description of each method publicly available in each of your trees -->

# Challenge 16: Find Maximum Value in a Binary Tree

<!-- Short summary or background information -->

## Challenge Description

<!-- Description of the challenge -->

Given a Binary Tree, return the maximum value

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Iterate all the way to the right and return the right most value.

Big O time: O(height of tree)
Big O Space: O(1)

## Solution

<!-- Embedded whiteboard image -->

![whiteboard](find-max.png)
