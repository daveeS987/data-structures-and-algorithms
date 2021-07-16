from stacks.stacks import Node, Stack


def validate_brackets(string):

    stack = Stack()
    brackets = {"}": "{", "]": "[", ")": "("}
    opening_bracket = {"{", "(", "["}

    for char in string:
        if char in opening_bracket:
            stack.push(char)
        elif char in brackets:
            if stack.isEmpty():
                return False
            value = stack.pop()
            if value != brackets[char]:
                return False

    return stack.isEmpty()


if __name__ == "__main__":
    pass
