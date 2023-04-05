"""
|--------------------------------------------------------------------------
| Enumerable Magic #1 - True for All?
|--------------------------------------------------------------------------
|
"""

def all(seq, fun): 
   return not False in list(map(fun, seq))


def _all(seq, fun): 
   return all(map(fun,seq))


def all(seq, fun): 
   for item in seq: 
      if not fun(item): return False
   return True


print(_all((1, 2, 3, 4, 5), lambda x: x>9), False)
print(_all((1, 2, 3, 4, 5), lambda x: x<9), True)