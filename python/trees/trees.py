class Node:
    """
    Docstring
    """

    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BinaryTree:
    """
    Docstring
    """

    def __init__(self, node=None):
        self.root = node

    def pre_order(self):
        # root >> left >> right
        result = []

        def walk(node):
            if node:
                result.append(node.value)
                walk(node.left)
                walk(node.right)

        walk(self.root)
        return result

    def in_order(self):
        # left >> root >> right
        result = []

        def walk(node):
            if node:
                walk(node.left)
                result.append(node.value)
                walk(node.right)

        walk(self.root)
        return result

    def post_order(self):
        # left >> right >> root
        result = []

        def walk(node):
            if node.left:
                walk(node.left)
            if node.right:
                walk(node.right)
            result.append(node.value)

        walk(self.root)
        return result


class BinarySearchTree(BinaryTree):
    """
    Docstring
    """

    def addIteravily(self, value):

        node = Node(value)

        if self.root is None:
            self.root = node
            return self

        current = self.root

        while current:

            if value == current.value:
                raise Exception("Value already exist")

            if value > current.value:
                if current.right is None:
                    current.right = node
                    return self
                current = current.right
            else:
                if current.left is None:
                    current.left = node
                    return self
                current = current.left

    def addRecursively(self, value):

        new_node = Node(value)

        if self.root is None:
            self.root = new_node
            return self

        def walk(node):

            if value == node.value:
                raise Exception("Value already exist")

            if value > node.value:
                if node.right is None:
                    node.right = new_node
                    return
                walk(node.right)
            else:
                if node.left is None:
                    node.left = new_node
                    return
                walk(node.left)

        walk(self.root)

    def containsIteravily(self, target):

        if self.root is None:
            return None

        current = self.root

        while current:
            if current.value == target:
                return True
            if target > current.value:
                current = current.right
            else:
                current = current.left

        return False

    def containsRecursively(self, target):
        if self.root is None:
            return None

        def walk(node):

            if node == None:
                return False

            if node.value == target:
                return True

            if target > node.value:
                return walk(node.right)
            else:
                return walk(node.left)

        return walk(self.root)
