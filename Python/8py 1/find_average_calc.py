"""
|--------------------------------------------------------------------------
| Calculate average
|--------------------------------------------------------------------------
|
"""

def find_average(numbers):
   return sum(numbers) / len(numbers)


from numpy import mean as find_average


def find_average(a):
   return sum(a)/len(a) if a else 0


from statistics import mean
def find_average(numbers):
   return mean(numbers)


print(find_average([1, 2, 3]), 2)