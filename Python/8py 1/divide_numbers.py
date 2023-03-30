"""
|--------------------------------------------------------------------------
| Incorrect division method
|--------------------------------------------------------------------------
|
"""

def divide_numbers(x,y):
   return x / y


from operator import truediv as divide_numbers
divide_numbers = lambda x, y: (x).__truediv__(y)
divide_numbers = __import__("operator").truediv


print(divide_numbers(4, 2), 2)
print(divide_numbers(10, 2), 5)
print(divide_numbers(9, 4), 2.25)
print(divide_numbers(21, 5), 4.2)
print(divide_numbers(9, 3), 3)
print(divide_numbers(1, 100), 0.01)