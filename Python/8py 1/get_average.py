"""
|--------------------------------------------------------------------------
| Get the mean of an array
|--------------------------------------------------------------------------
|
"""

from math import floor
def get_average(marks):
   return floor(sum(marks) / len(marks))


get_average = lambda m: int(__import__("numpy").mean(m))


def get_average(marks):
   return sum(marks) // len(marks)


import numpy
def get_average(marks):
   return int(numpy.mean(marks))


print(get_average([2, 2, 2, 2]), 2, "didn't work for [2, 2, 2, 2]")
print(get_average([1, 5, 87, 45, 8, 8]), 25, "didn't work for [1, 5, 87, 45, 8, 8]")
print(get_average([2,5,13,20,16,16,10]), 11, "didn't work for [2,5,13,20,16,16,10]")