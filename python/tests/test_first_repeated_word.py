from repeated_word.repeated_word import find_first_repeated
import pytest
from hashtable.hashtable import HashTable


def test_can_instantiate_a_hashamp():
    hashmap = HashTable()
    assert hashmap


def test_empty_string_returns_None():
    input1 = ""
    actual = find_first_repeated(input1)
    assert actual == None


def test_no_repeats_returns_None():
    input1 = "aa bb cc ddd ee fff"
    actual = find_first_repeated(input1)
    assert actual == None


def test_will_return_first_repeated_word():
    input1 = "aa DDD aA cc ddd ee fff"
    actual = find_first_repeated(input1)
    assert actual == "aa"


def test_function_ignores_upper_and_lower_case():
    input1 = "aa DDD bb cc ddd ee fff"
    actual = find_first_repeated(input1)
    assert actual == "ddd"


def test_will_not_include_punctuations_in_check():
    input1 = "aa DDD bb cc ddd ee fff !DdD,"
    actual = find_first_repeated(input1)
    assert actual == "ddd"
