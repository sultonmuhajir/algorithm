"""
|--------------------------------------------------------------------------
| Find Multiples of a Number
|--------------------------------------------------------------------------
|
"""

def find_multiples(integer, limit):
   return [i for i in range(integer, limit+1, integer)]


def find_multiples(integer, limit):
   return list(range(integer, limit+1, integer))


def find_multiples(integer, limit):
   return [*range(0, limit + 1, integer)][1:]


print(find_multiples(5, 25), [5, 10, 15, 20, 25])
print(find_multiples(1, 2), [1, 2])