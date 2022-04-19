"""
|--------------------------------------------------------------------------
| Count by X
|--------------------------------------------------------------------------
|
"""

def count_by(x, n):
   return [x * i for i in range(1, n+1)]


def count_by(x, n):
   return range(x, x * n + 1, x)


def count_by(x, n):
   return [e for e in range(x, x * n + x, x)]


print(count_by(1, 5), [1, 2, 3, 4, 5])
print(count_by(2, 5), [2, 4, 6, 8, 10])
print(count_by(3, 5), [3, 6, 9, 12, 15])
print(count_by(50, 5), [50, 100, 150, 200, 250])