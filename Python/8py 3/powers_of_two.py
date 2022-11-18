"""
|--------------------------------------------------------------------------
| Powers of 2
|--------------------------------------------------------------------------
|
"""

def powers_of_two(n):
   return [2**i for i in range(n+1)]


def powers_of_two(n):
   return map(1 .__lshift__, range(n + 1))


def powers_of_two(n):
   return [1<<x for x in range(n+1)]


print(powers_of_two(0), [1])
print(powers_of_two(1), [1, 2])
print(powers_of_two(4), [1, 2, 4, 8, 16])