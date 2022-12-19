"""
|--------------------------------------------------------------------------
| SpeedCode #2 - Array Madness
|--------------------------------------------------------------------------
|
"""

def array_madness(a, b):
   return sum([i**2 for i in a]) > sum([i**3 for i in b])


array_madness = lambda a,b:sum(_*_ for _ in a)>sum(__**3 for __ in b)


def array_madness(a,b):
   return sum(map(lambda a: a ** 2, a)) > sum(map(lambda b: b ** 3, b))


print(array_madness([4, 5, 6], [1, 2, 3]),True)
print(array_madness([1, 2, 3], [4, 5, 6]),False)