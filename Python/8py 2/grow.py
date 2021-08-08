"""
|--------------------------------------------------------------------------
| Beginner - Reduce but Grow
|--------------------------------------------------------------------------
|
"""

def grow(arr):
   res = 1
   for i in range(len(arr)):
      res *= arr[i]
   return res


from functools import reduce
def grow(arr):
   return reduce(lambda x, y: x * y, arr)


def grow(arr):
   return eval('*'.join([str(i) for i in arr]))


import math
def grow(arr):
   return math.prod(arr)


print(grow([1, 2, 3]), 6)
print(grow([4, 1, 1, 1, 4]), 16)
print(grow([2, 2, 2, 2, 2, 2]), 64)