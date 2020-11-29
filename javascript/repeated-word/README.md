# Code Challenge 31: Find First Repeated Word

<!-- Short summary or background information -->

## Challenge Description

<!-- Description of the challenge -->

Given a String, find the first repeated word.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Use regex to take string and break down into an array. Iterate through the array, and check if the current value is already in our hashmap. If it is, return that value. If not, just add to our hashmap.

Space: O(n)  
Time: O(n)

## Solution

<!-- Embedded whiteboard image -->

**Problem Domain:**

Given a String, find the first repeating words.

Input: Long String
Output: the first repeated word or undefined if no words repeat

Considerations:

- What happens with capital vs lowercase?
- Does the case matter?
- Need to consider periods, commas, etc that are touching words

**Algorithm:**

Break down string into an array
Iterate through the array
if the current item is in our hashmap
return that item
else add to the hashmap

**PseudoCode:**

declare array = use regex to put all word characters into an array  
declare Hashmap

Iterate through the array  
If (current item is present in our hashmap)  
return current item  
else  
add current item to hashmap
