import pytest

from sort_insertion.insertion_sort import insertion_sort


def test_can_handle_reverse_sorted_list():
    test_input = [20, 18, 12, 8, 5, -2]
    actual = insertion_sort(test_input)
    expected = [-2, 5, 8, 12, 18, 20]
    assert actual == expected


def test_can_handle_few_unique_list():
    test_input = [5, 12, 7, 5, 5, 7]
    actual = insertion_sort(test_input)
    expected = [5, 5, 5, 7, 7, 12]
    assert actual == expected


def test_can_handle_nearly_sorted_list():
    test_input = [2, 3, 5, 7, 13, 11]
    actual = insertion_sort(test_input)
    expected = [2, 3, 5, 7, 11, 13]
    assert actual == expected


def test_can_handle_list_with_one_value():
    test_input = [5]
    actual = insertion_sort(test_input)
    expected = [5]
    assert actual == expected


def test_can_handle_empty_list():
    actual = insertion_sort([])
    expected = []
    assert actual == expected
