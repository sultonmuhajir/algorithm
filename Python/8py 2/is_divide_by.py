"""
|--------------------------------------------------------------------------
| Can we divide it?
|--------------------------------------------------------------------------
|
"""

def is_divide_by(number, a, b):
   return  number%a==0 and number%b==0


def is_divide_by(n, a, b):
   return n%a == 0 == n%b


def is_divide_by(number, a, b):
   return not (number%a or number%b)


print(is_divide_by(8, 2, 4), True)
print(is_divide_by(12, -3, 4), True)
print(is_divide_by(8, 3, 4), False)
print(is_divide_by(48, 2, -5), False)