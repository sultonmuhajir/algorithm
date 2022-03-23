"""
|--------------------------------------------------------------------------
| Generate range of integers
|--------------------------------------------------------------------------
|
"""

def generate_range(mn, mx, step):
   res = []
   for i in range(mn, mx+1, step):
      res.append(i)
   return res


def generate_range(min, max, step):
   return list(range(min, max + 1, step))


def generate_range(min, max, step):
   return [i for i in range(min, max+1, step)]


def generate_range(min, max, step):
   return [*range(min, max + 1, step)]


print(generate_range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(generate_range(-10, 1, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1])
print(generate_range(1, 15, 20), [1])