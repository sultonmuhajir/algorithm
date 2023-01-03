"""
|--------------------------------------------------------------------------
| Convert to Binary
|--------------------------------------------------------------------------
|
"""

def to_binary(n):
   return int(bin(n)[2:])


def to_binary(n):
   res, count = 0, 0
   while n:
      res += n%2 * 10**count
      count += 1
      n //= 2
   return res


def to_binary(n):
   return int(f'{n:b}')


def to_binary(n):
   return int(format(n, 'b'))


print(to_binary(1), 1)
print(to_binary(2), 10)
print(to_binary(3), 11)
print(to_binary(5), 101)