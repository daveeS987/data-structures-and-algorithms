from hashtable.hashtable import HashTable


def find_common_values(tree1, tree2):

    if tree1.root is None or tree2.root is None:
        return None

    hashmap = HashTable()
    result = []

    def walk1(node):
        nonlocal hashmap
        if node:
            hashmap.add(node.value, node.value)
            walk1(node.left)
            walk1(node.right)

    walk1(tree1.root)

    def walk2(node):
        nonlocal hashmap
        nonlocal result
        if node:
            if hashmap.contains(node.value):
                result.append(node.value)
            walk2(node.left)
            walk2(node.right)

    walk2(tree2.root)

    return result
