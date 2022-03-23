"""
|--------------------------------------------------------------------------
| Difference of Volumes of Cuboids
|--------------------------------------------------------------------------
|
"""

from math import prod
def find_difference(a, b):
   return abs(prod(a)-prod(b))


def find_difference(a, b):
   return abs((a[1]*a[2]*a[0])-b[1]*b[2]*b[0])


def find_difference(a, b):
   A = B = 1
   for i, j in zip(a, b):
      A *= i
      B *= j
   return abs(A - B)


def find_difference(a, b):
   return abs(eval("*".join(map(str, a))) - eval("*".join(map(str, b))))


print(find_difference([3, 2, 5], [1, 4, 4]), 14)
print(find_difference([9, 7, 2], [5, 2, 2]), 106)