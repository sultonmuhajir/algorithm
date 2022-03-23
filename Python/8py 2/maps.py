"""
|--------------------------------------------------------------------------
| Beginner - Lost Without a Map
|--------------------------------------------------------------------------
|
"""

def maps(a):
   return list(map(lambda x: x * 2, a))


maps = lambda a: [2*n for n in a]


def maps(a):
   return [2 * x for x in a]


def maps(a):
   if len(a) > 0:
      for i in range(len(a)):
         a[i] = a[i] * 2
   return a


def maps(a):
   return list(map((2).__mul__, a))


print(maps([1, 2, 3]), [2, 4, 6])
print(maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
print(maps([]), [])