import pytest

from stack_queue_bracket.stack_queue_bracket import validate_brackets
from stacks.stacks import Node, Stack


def test_case_one():
    actual = validate_brackets("{}")
    expected = True
    assert actual == expected


def test_case_two():
    actual = validate_brackets("{}(){}")
    expected = True
    assert actual == expected


def test_case_three():
    actual = validate_brackets("()[[Extra Characters]]")
    expected = True
    assert actual == expected


def test_case_four():
    actual = validate_brackets("(){}[[]]")
    expected = True
    assert actual == expected


def test_case_five():
    actual = validate_brackets("{}{Code}[Fellows](())")
    expected = True
    assert actual == expected


def test_case_six():
    actual = validate_brackets("[({}]")
    expected = False
    assert actual == expected


def test_case_seven():
    actual = validate_brackets("((](")
    expected = False
    assert actual == expected


def test_case_eight():
    actual = validate_brackets("{(})")
    expected = False
    assert actual == expected


def test_case_empty_string():
    actual = validate_brackets("")
    expected = True
    assert actual == expected


def test_case_no_brackets():
    actual = validate_brackets("adsfadsfasdfasdfaf")
    expected = True
    assert actual == expected
