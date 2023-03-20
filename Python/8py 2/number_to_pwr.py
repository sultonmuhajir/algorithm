"""
|--------------------------------------------------------------------------
| Power
|--------------------------------------------------------------------------
|
"""

def number_to_pwr(number, p): 
   res = 1
   for i in range(p): res *= number
   return res


def number_to_pwr(number, p): 
   return 1 if p == 0 else number * number_to_pwr(number, p-1)


def number_to_pwr(number, p): 
   res=1
   i=0
   while i < p:
      i+=1
      res*=number
   return res


print(number_to_pwr(4, 2), 16)
print(number_to_pwr(10, 4), 10000)
print(number_to_pwr(10, 0), 1)