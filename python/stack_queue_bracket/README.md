# Multi Bracket Validation (Stack Problem)

Given a string, return a boolean whether the brackets are balanced.

## Links

- [See The Code](stack_queue_bracket.py)
- [See The Test](../tests/test_stack_queue_bracket.py)

## White Board Process

![Multi Bracket Validation](multi_bracket_validation.jpg)

## Approach and Efficiency

I utilized a stack, a dictionary with opening and closing brackets as key value pairs, and a set with opening brackets for this problem. I looped through the string, and checked every element. If the element is an opening bracket, I add to the stack. If the element is a closing bracket, I check if the stacks is not empty and it matches whats on top of the stack. If either of those conditions are false, I return false. Otherwise I pop off the stack and move on. At the end I return whether the stack is empty.

Big O:

- Time: O(n)
- Space: O(n)

### Collaborators

Daniel Dills, Wondwosen Tsige, Prabin Singh, Michael Ryan
