#pip install pytest pytest-html
#pytest --html=report.html test.py

#test case EXample and how to use pytest
import pytest

@pytest.mark.parametrize("num, result", [(1, 11), (2, 22), (3, 33), (4, 44), (5, 55)])
def test_calculation(num, result):
    assert 11 * num != result
