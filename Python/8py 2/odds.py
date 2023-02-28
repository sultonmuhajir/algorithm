"""
|--------------------------------------------------------------------------
| Are arrow functions odd?
|--------------------------------------------------------------------------
|
"""

odds = lambda x: [i for i in x if i % 2 != 0]


def odds(values):
   return list(filter(lambda x: x&1,values))


def odds(values):
   return [i for i in values if i%2]


print(odds([]), [])
print(odds([2,4,6]), [])
print(odds([1,3,5]), [1,3,5])
print(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5])