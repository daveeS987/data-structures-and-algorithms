# Code Challenge 3 - Array Binary Search

<!-- Short summary or background information -->

Use a binary search to find the index of the target

## Challenge

<!-- Description of the challenge -->

Given an array and a target, find the index of the target.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

We declared three variables. A start, mid, and index. We looked at the entire array. We compared the target to the middle of the array. If target was greater than the mid, we only looked at the greater half of the array on the next iteration. And vice Versa. Every iteration we halfed the array we looked at.

## Solution

<!-- Embedded whiteboard image -->

![WhiteBoard](../../assets/arrayBinarySearch.png)
