"""
|--------------------------------------------------------------------------
| Find Maximum and Minimum Values of a List
|--------------------------------------------------------------------------
|
"""

def minimum(arr):
   return min(arr)
def maximum(arr):
   return max(arr)


minimum,maximum = min,max


def min(arr):
   return sorted(arr)[0]
def max(arr):
   return sorted(arr)[-1]


from functools import reduce
def min(arr):
   return reduce(lambda x, y: x if x < y else y, arr)
def max(arr):
   return reduce(lambda x, y: x if x > y else y, arr)


def min(arr):
   return vars(__builtins__)['min'](arr)
def max(arr):
   return vars(__builtins__)['max'](arr)


print(minimum([-52, 56, 30, 29, -54, 0, -110]), -110)
print(minimum([42, 54, 65, 87, 0]), 0)
print(maximum([-52, 56, 30, 29, -54, 0, -110]), 56)
print(maximum([4,6,2,1,9,63,-134,566]), 566)