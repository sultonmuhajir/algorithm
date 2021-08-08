"""
|--------------------------------------------------------------------------
| Array plus array
|--------------------------------------------------------------------------
|
"""

import functools
def array_plus_array(arr1,arr2):
   return(functools.reduce(lambda a, b: a+b, arr1) + functools.reduce(lambda a, b: a+b, arr2))


def array_plus_array(arr1,arr2):
   return sum(arr1+arr2)


def array_plus_array(arr1,arr2):
   counter = 0
   for i in arr1:
      counter += i
   for i in arr2:
      counter += i
   return counter


def array_plus_array(*args):
   return sum(map(sum, args))


def array_plus_array(arr1,arr2):
   result=0
   for ar1,ar2 in zip(arr1,arr2):
      result = result + (ar1+ar2)
   return result


from itertools import chain
def array_plus_array(*arrays):
   return sum(chain.from_iterable(arrays))


print(array_plus_array([1, 2, 3], [4, 5, 6]), 21)
print(array_plus_array([-1, -2, -3], [-4, -5, -6]), -21)
print(array_plus_array([0, 0, 0], [4, 5, 6]), 15)
print(array_plus_array([100, 200, 300], [400, 500, 600]), 2100)