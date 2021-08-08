"""
|--------------------------------------------------------------------------
| Century From Year
|--------------------------------------------------------------------------
|
"""

from math import ceil

def century(year):
   return ceil(year/100)


def century(year):
   return (year + 99) // 100


def century(year):
   return -(-year//100)


def century(year):
   return (year - 1) // 100 + 1


def century(year):
   return 1 + (year - 1) // 100


print(century(1705), 18, 'Testing for year 1705')
print(century(1900), 19, 'Testing for year 1900')
print(century(1601), 17, 'Testing for year 1601')
print(century(2000), 20, 'Testing for year 2000')
print(century(356), 4, 'Testing for year 356')
print(century(89), 1, 'Testing for year 89')