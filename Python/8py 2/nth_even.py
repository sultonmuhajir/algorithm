"""
|--------------------------------------------------------------------------
| Get Nth Even Number
|--------------------------------------------------------------------------
|
"""

def nth_even(n):
   return n * 2 - 2


nth_even = lambda _:_*2-2


def nth_even(n):
   return (n + n) - 2 


def nth_even(n):
   return 2 * (n - 1)


print(nth_even(1), 0)
print(nth_even(2), 2)
print(nth_even(3), 4)
print(nth_even(100), 198)
print(nth_even(1298734), 2597466)