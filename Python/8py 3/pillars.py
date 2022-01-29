"""
|--------------------------------------------------------------------------
| Pillars
|--------------------------------------------------------------------------
|
"""

def pillars(num_pill, dist, width):
   return (num_pill - 1) * dist * 100 + (num_pill - 2) * width if num_pill > 1 else 0


pillars = lambda n,d,w: max(0, d*100*(n-1)+(n-2)*w)


def pillars(num_pill, dist, width):
   return dist * 100 * (num_pill - 1) + width * (num_pill - 2) * (num_pill > 1)


def pillars(n, dist, width):
   return (n-1) * dist * 100 + max(n-2, 0) * width


print(pillars(1, 10, 10) , 0)
print(pillars(2, 20, 25) , 2000)
print(pillars(11, 15, 30) , 15270)