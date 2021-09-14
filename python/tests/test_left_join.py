import pytest

from left_join.left_join import left_join


def test_function_will_account_for_empty_left():
    obj1 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    actual = left_join({}, obj1)
    expected = []
    assert actual == expected


def test_function_will_account_for_empty_right():
    obj1 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    actual = left_join(obj1, {})
    expected = [["a", "aa", None], ["b", "bb", None], ["c", "cc", None], ["d", "dd", None], ["e", "ee", None]]
    assert actual == expected


def test_function_will_account_for_both_empty():
    actual = left_join({}, {})
    expected = []
    assert actual == expected


def test_function_will_account_for_all_matching():
    obj1 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    obj2 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    actual = left_join(obj1, obj2)
    expected = [["a", "aa", "aa"], ["b", "bb", "bb"], ["c", "cc", "cc"], ["d", "dd", "dd"], ["e", "ee", "ee"]]
    assert actual == expected


def test_function_will_account_for_left_side_larger():
    obj1 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    obj2 = {"c": "cc", "v": "vv", "e": "ee"}

    actual = left_join(obj1, obj2)
    expected = [["a", "aa", None], ["b", "bb", None], ["c", "cc", "cc"], ["d", "dd", None], ["e", "ee", "ee"]]
    assert actual == expected


def test_function_will_account_for_right_side_larger():
    obj1 = {"c": "cc", "v": "vv", "e": "ee"}
    obj2 = {"a": "aa", "b": "bb", "c": "cc", "d": "dd", "e": "ee"}
    actual = left_join(obj1, obj2)
    expected = [["c", "cc", "cc"], ["v", "vv", None], ["e", "ee", "ee"]]
    assert actual == expected
