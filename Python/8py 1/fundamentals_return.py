"""
|--------------------------------------------------------------------------
| Fundamentals: Return
|--------------------------------------------------------------------------
|
"""

def add(a,b):
   return a+b
def divide(a,b):
   return a/b
def multiply(a,b):
   return a*b
def mod(a,b):
   return a%b
def exponent(a,b):
   return a**b
def subt(a,b):
   return a-b


from operator import (
   add as add,
   mul as multiply,
   truediv as divide,
   mod as mod,
   pow as exponent,
   sub as subt,
)


add = lambda a, b: a + b
multiply = lambda a, b: a * b
divide = lambda a, b: a / b
mod = lambda a, b: a % b
exponent = lambda a, b: a ** b
subt = lambda a, b:a - b


print(add(1, 2), 3)
print(multiply(1, 2), 2)
print(divide(2, 1), 2)
print(mod(1, 2), 1)
print(exponent(1, 2), 1)
print(subt(1, 2), -1)