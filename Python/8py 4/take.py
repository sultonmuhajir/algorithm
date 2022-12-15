"""
|--------------------------------------------------------------------------
| Enumerable Magic #25 - Take the First N Elements
|--------------------------------------------------------------------------
|
"""

def take(arr,n):
   return arr[0:n]


take = lambda _,__: _[:__]


def take(arr,n):
   return arr[:n]


print(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2])