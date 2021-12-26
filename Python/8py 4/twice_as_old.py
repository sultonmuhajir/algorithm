"""
|--------------------------------------------------------------------------
| Twice as old
|--------------------------------------------------------------------------
|
"""

def twice_as_old(d, s):
   return abs(d - s - s)


twice_as_old = lambda d,s: ((d-s*2)**2)**0.5


def twice_as_old(d, s):
   return abs(d-2*s)


def twice_as_old(dad_years_old, son_years_old):
   return abs(2*son_years_old - dad_years_old)


print(twice_as_old(36,7) , 22)
print(twice_as_old(55,30) , 5)
print(twice_as_old(42,21) , 0)
print(twice_as_old(22,1) , 20)
print(twice_as_old(29,0) , 29)