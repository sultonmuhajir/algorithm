"""
|--------------------------------------------------------------------------
| No Loops 2 - You only need one
|--------------------------------------------------------------------------
|
"""

def check(a, x):
   return x in a


check = list.__contains__
from operator import contains as check


def check(a, x): 
   return a.count(x) > 0


print(check([66, 101], 66), True)
print(check([80, 117, 115, 104, 45, 85, 112, 115], 45), True)
print(check(['t', 'e', 's', 't'], 'e'), True)
print(check(['what', 'a', 'great', 'kata'], 'kat'), False)