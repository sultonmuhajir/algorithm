"""
|--------------------------------------------------------------------------
| What is between?
|--------------------------------------------------------------------------
|
"""

def between(a,b):
   return [i for i in range(a,b+1)]


def between(a,b):
   res = []
   while a <= b:
      res.append(a)
      a += 1
   return res


def between(a,b):
   return list(range(a,b+1))


print(between(1, 4), [1, 2, 3, 4])
print(between(-2, 2), [-2, -1, 0, 1, 2])