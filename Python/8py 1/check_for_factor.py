"""
|--------------------------------------------------------------------------
| Grasshopper - Check for factor
|--------------------------------------------------------------------------
|
"""

def check_for_factor(base, factor):
   return base % factor == 0


def check_for_factor(base, factor):
   return not (base % factor)


def check_for_factor(base, factor):
   return (base / factor).is_integer()


def check_for_factor(base, factor):
   return factor in (x for x in range(1, base) if base % x == 0)


print(check_for_factor(63, 7), True)
print(check_for_factor(2450, 5), True)
print(check_for_factor(653, 7), False)
print(check_for_factor(2453, 5), False)