"""
|--------------------------------------------------------------------------
| To square(root) or not to square(root)
|--------------------------------------------------------------------------
|
"""

from math import sqrt
def square_or_square_root(arr):
   return list(map(lambda i: sqrt(i) if sqrt(i) % 1 == 0 else i * i, arr))


def square_or_square_root(arr):
   return [int(sqrt(a)) if sqrt(a) % 1 == 0 else a ** 2 for a in arr]


def square_or_square_root(arr):
   return [n*n if n**0.5 % 1 else n**0.5 for n in arr]


def square_or_square_root(arr):
   res = []
   for x in arr:
      root = x**0.5
      if root.is_integer():
         res.append(root)
      else:
         res.append(x*x)
   return res


print(square_or_square_root([4, 3, 9, 7, 2, 1]), [2, 9, 3, 49, 4, 1])
print(square_or_square_root([100, 101, 5, 5, 1, 1]), [10, 10201, 25, 25, 1, 1])
print(square_or_square_root([1, 2, 3, 4, 5, 6]), [1, 4, 9, 2, 25, 36])