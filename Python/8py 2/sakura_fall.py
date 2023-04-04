"""
|--------------------------------------------------------------------------
| The falling speed of petals
|--------------------------------------------------------------------------
|
"""

def sakura_fall(v):
   return 400 / v if v > 0 else 0


def sakura_fall(velocity):
   if velocity < 1:
      return 0
   else:
      distance = 400
      return distance / velocity


def sakura_fall(v):
   return 0 if v <= 0 else 400 / v


print(sakura_fall(5), 80)
print(sakura_fall(10), 40)
print(sakura_fall(-1), 0)