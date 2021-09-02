import pytest

from sort_merge.merge_sort import merge_sort


def test_can_handle_reverse_sorted_list():
    test_input = [20, 18, 12, 8, 5, -2]
    actual = merge_sort(test_input)
    expected = [-2, 5, 8, 12, 18, 20]
    assert actual == expected


def test_can_handle_few_unique_list():
    test_input = [5, 12, 7, 5, 5, 7]
    actual = merge_sort(test_input)
    expected = [5, 5, 5, 7, 7, 12]
    assert actual == expected


def test_can_handle_nearly_sorted_list():
    test_input = [2, 3, 5, 7, 13, 11]
    actual = merge_sort(test_input)
    expected = [2, 3, 5, 7, 11, 13]
    assert actual == expected


def test_can_handle_list_with_one_value():
    test_input = [5]
    actual = merge_sort(test_input)
    expected = [5]
    assert actual == expected


def test_can_handle_empty_list():
    actual = merge_sort([])
    expected = []
    assert actual == expected
