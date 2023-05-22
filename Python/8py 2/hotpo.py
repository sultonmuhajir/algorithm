"""
|--------------------------------------------------------------------------
| Collatz Conjecture (3n+1)
|--------------------------------------------------------------------------
|
"""

def hotpo(n):
   return 0 if n == 1 else 1 + hotpo(n * 3 + 1 if n % 2 else n / 2)


hotpo = f = lambda n:n>1and-~f([n/2,3*n+1][n%2])


def hotpo(n):
   res = 0
   while n != 1:
      n = 3 * n + 1 if n % 2 else n / 2
      res += 1
   return res


print(hotpo(1), 0)
print(hotpo(5), 5)
print(hotpo(6), 8)
print(hotpo(23), 15)