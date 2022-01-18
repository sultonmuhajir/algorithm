"""
|--------------------------------------------------------------------------
| Sum without highest and lowest number
|--------------------------------------------------------------------------
|
"""

import functools
def sum_array(arr):
   return 0 if arr == None or len(arr) <= 2 else functools.reduce(lambda a, b: a+b, arr) - (min(arr)+max(arr))


def sum_array(arr):
   return sum(sorted(arr or [])[1:-1])


def sum_array(arr):
   return sum(sorted(arr)[1:-1]) if arr and len(arr) > 1 else 0


def sum_array(arr):
   return sum(arr) - min(arr) - max(arr) if arr and len(arr) > 1 else 0


def sum_array(arr):
   return sum(sorted(arr)[1:-1]) if arr else 0


print(sum_array([3]), 0)
print(sum_array(None), 0)
print(sum_array([ 3, 5]), 0)
print(sum_array([6, 2, 1, 8, 10]), 16)
print(sum_array([6, 0, 1, 10, 10]), 17)