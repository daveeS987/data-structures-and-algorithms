import pytest

from sort_quick.quick_sort import quick_sort, partition, swap


def test_can_handle_reverse_sorted_list():
    test_input = [20, 18, 12, 8, 5, -2]
    quick_sort(test_input)
    assert test_input == [-2, 5, 8, 12, 18, 20]


def test_can_handle_few_unique_list():
    test_input = [5, 12, 7, 5, 5, 7]
    quick_sort(test_input)
    assert test_input == [5, 5, 5, 7, 7, 12]


def test_can_handle_nearly_sorted_list():
    test_input = [2, 3, 5, 7, 13, 11]
    quick_sort(test_input)
    assert test_input == [2, 3, 5, 7, 11, 13]


def test_can_handle_list_with_one_value():
    test_input = [5]
    quick_sort(test_input)
    assert test_input == [5]


def test_can_handle_empty_list():
    test_input = []
    quick_sort(test_input)
    assert test_input == []
