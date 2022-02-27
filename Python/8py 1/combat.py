"""
|--------------------------------------------------------------------------
| Grasshopper - Terminal game combat function
|--------------------------------------------------------------------------
|
"""

def combat(health, damage):
   return max(0, health-damage)


def combat(health, damage):
   return health - damage if health > damage else 0


def combat(h, d):
   return (h>d)*(h-d)


def combat(health, damage):
   return [0, health-damage][damage < health]


print(combat(100, 5), 95)
print(combat(83, 16), 67)
print(combat(20, 30), 0)