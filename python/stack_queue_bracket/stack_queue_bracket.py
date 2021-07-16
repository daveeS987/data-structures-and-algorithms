from stacks.stacks import Stack


def validate_brackets(string):

    stack = Stack()
    brackets = {"}": "{", "]": "[", ")": "("}
    opening_bracket = {"{", "(", "["}

    for char in string:
        if char in opening_bracket:
            stack.push(char)
        elif char in brackets:
            if stack.isEmpty() or stack.pop() != brackets[char]:
                return False

    return stack.isEmpty()
