"""
|--------------------------------------------------------------------------
| Is n divisible by x and y?
|--------------------------------------------------------------------------
|
"""

def is_divisible(n,x,y):
   return (n%x)==0 and (n%y)==0

   
def is_divisible(n,x,y):
   return not (n%x or n%y)

   
def is_divisible(n,x,y):
   return n % x + n % y == 0 

   
def is_divisible(n, x, y):
   return not n % x and not n % y

   
from math import gcd; is_divisible = lambda n, x, y: not n%(x*y//(gcd(x, y)))


print(is_divisible(3,2,2),False)
print(is_divisible(3,3,4),False)
print(is_divisible(12,3,4),True)
print(is_divisible(8,3,4),False)