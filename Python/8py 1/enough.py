"""
|--------------------------------------------------------------------------
| Will there be enough space?
|--------------------------------------------------------------------------
|
"""

def enough(cap, on, wait):
   return max(wait - (cap - on), 0)


def enough(cap, on, wait):
   return wait + on - cap if wait + on > cap else 0


def enough(cap, on, wait):
   return max(wait + on - cap, 0)


print(enough(10, 5, 5), 0)
print(enough(100, 60, 50), 10)
print(enough(20, 5, 5), 0)