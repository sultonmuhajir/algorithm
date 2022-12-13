"""
|--------------------------------------------------------------------------
| Plural
|--------------------------------------------------------------------------
|
"""

def plural(n):
   return n != 1


def plural(n):
   return False if n == 1 else True


def plural(n):
   return not(n == 1)


def plural(n):
   return [True, False][n == 1]


print(plural(0), True)
print(plural(1), False)
print(plural(100), True)