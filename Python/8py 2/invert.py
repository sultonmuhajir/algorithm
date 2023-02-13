"""
|--------------------------------------------------------------------------
| Invert values
|--------------------------------------------------------------------------
|
"""

def invert(lst):
   return list(map(lambda x: x * -1, lst))


def invert(lst):
   res=[]
   for num in lst:
      res.append(num*-1)
   return res


def invert(lst):
   return [-x for x in lst]


def invert(lst):
   return [] if lst == [] else [i*(-1) for i in lst]


print(invert([1,2,3,4,5]),[-1,-2,-3,-4,-5])
print(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
print(invert([]), [])