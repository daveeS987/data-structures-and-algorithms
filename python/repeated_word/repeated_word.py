from hashtable.hashtable import HashTable
import re


def find_first_repeated(string):

    if len(string) == 0:
        return None

    hash_map = HashTable()
    lowered = string.lower()
    words_array = re.findall(r"\w+", lowered)

    for word in words_array:
        if hash_map.contains(word):
            return word
        else:
            hash_map.add(word, word)

    return None
