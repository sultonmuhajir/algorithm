"""
|--------------------------------------------------------------------------
| Grasshopper - If/else syntax debug
|--------------------------------------------------------------------------
|
"""

def check_alive(health):
   return health > 0


check_alive = (0).__lt__


def check_alive(health):
   if (health > 0):
      return True
   else:
      return False


def check_alive(health):
   return True if health > 0 else False


print(check_alive(5), True)
print(check_alive(0), False)
print(check_alive(-5), False)