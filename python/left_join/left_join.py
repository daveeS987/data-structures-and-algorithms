def left_join(map1, map2):

    result = []

    for key, value in map1.items():
        inner = [key, value]
        if key in map2:
            inner.append(map2[key])
        else:
            inner.append(None)
        result.append(inner)

    return result


def left_join_hash(map1, map2):

    result = []

    for index in map1.bucket:
        if map1.bucket[index] is not None:
            current = map1.bucket[index].head
            while current:
                inner_list = [current[0], current[1]]
                inner_list.append(map2.get(current[0]))
                result.append(inner_list)

    return result
