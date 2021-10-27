"""
|--------------------------------------------------------------------------
| Grasshopper - Messi goals function
|--------------------------------------------------------------------------
|
"""

def goals(laLiga, copaDelRey, championsLeague):
   return laLiga+copaDelRey+championsLeague


goals = lambda x, y, z: sum((x, y, z))


def goals(*a):
   return sum(a)


print(goals(0, 0, 0), 0)
print(goals(5, 10, 2), 17)