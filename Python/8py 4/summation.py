"""
|--------------------------------------------------------------------------
| Grasshopper - Summation
|--------------------------------------------------------------------------
|
"""

def summation(num):
   res = 0
   for i in range(1, num+1):
      res += i
   return res


summation=lambda n:n*-~n>>1


def summation(num):
   return num*(num+1) / 2


summation = lambda x: sum(range(1, x + 1))


def summation(num):
   return sum(range(1,num+1))
    
    
print(summation(1), 1)
print(summation(8), 36)
print(summation(22), 253)
print(summation(100), 5050)
print(summation(213), 22791)