"""
|--------------------------------------------------------------------------
| Simple multiplication
|--------------------------------------------------------------------------
|
"""

def simple_multiplication(n) :
   return n * (8 + n%2)


simple_multiplication = lambda a : a * (8 + (a & 1))


def simple_multiplication(number) :
   return number * 8 if number % 2 == 0 else number * 9


def simple_multiplication(number) :
   return number * (8 if number % 2 == 0 else 9)


print(simple_multiplication(2), 16)
print(simple_multiplication(1), 9)
print(simple_multiplication(8), 64)
print(simple_multiplication(4), 32)
print(simple_multiplication(5), 45)