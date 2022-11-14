"""
|--------------------------------------------------------------------------
| Count Odd Numbers below n
|--------------------------------------------------------------------------
|
"""

from math import floor
def odd_count(n):
   return floor(n/2)


def oddCount(n):
   return n // 2


def odd_count(n):
   return len(range(1, n, 2))


def oddCount(n):
   return n >> 1


print(odd_count(15),7)
print(odd_count(15023),7511)