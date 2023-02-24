"""
|--------------------------------------------------------------------------
| Sum of Multiples
|--------------------------------------------------------------------------
|
"""

def sum_mul(n, m):
   return "INVALID" if m <= 0 or n <= 0 else sum([i for i in range(n,m,n)])


def sum_mul(n, m):
   return sum(range(n, m, n)) if n > 0 and m > 0 else "INVALID"


def sum_mul(n, m):
   return sum([x for x in range(n, m, n)]) if n > 0 < m else "INVALID"


print(sum_mul(0, 0), 'INVALID')
print(sum_mul(2, 9), 20)
print(sum_mul(3, 13), 30)
print(sum_mul(4, 123), 1860)
print(sum_mul(581, 256), 0)
print(sum_mul(0, 2), 'INVALID')
print(sum_mul(-5, 5), 'INVALID')