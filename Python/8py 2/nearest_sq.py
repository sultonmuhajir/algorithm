"""
|--------------------------------------------------------------------------
| Find Nearest square number
|--------------------------------------------------------------------------
|
"""

def nearest_sq(n):
   return round(n**0.5)**2


nearest_sq = lambda n: round(n ** 0.5) ** 2


from math import sqrt
def nearest_sq(n):
   return pow(round(sqrt(n)), 2)


print(nearest_sq(1), 1)
print(nearest_sq(2), 1)
print(nearest_sq(10), 9)
print(nearest_sq(111), 121)
print(nearest_sq(9999), 10000)