"""
|--------------------------------------------------------------------------
| Is it even?
|--------------------------------------------------------------------------
|
"""

def is_even(n): 
   return n % 2 == 0


def is_even(n):
   return not n % 2


def is_even(n): 
   return False if n % 2 else True


print(is_even(0), True)
print(is_even(0.5), False)
print(is_even(1), False)
print(is_even(2), True)
print(is_even(-4), True)