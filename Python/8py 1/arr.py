"""
|--------------------------------------------------------------------------
| Filling an array (part 1)
|--------------------------------------------------------------------------
|
"""

def arr(n=0): 
   res = []
   for i in range(n):
      res.append(i)
   return res


def arr(n=0): 
   return list(range(n))


def arr(n=0): 
   return [i for i in range(n)]


def arr(n=0): 
   return [*range(n)]


print(arr(4), [0,1,2,3])
print(arr(0), [])
print(arr(), [])