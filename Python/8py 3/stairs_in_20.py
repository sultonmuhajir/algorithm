"""
|--------------------------------------------------------------------------
| How many stairs will Suzuki climb in 20 years?
|--------------------------------------------------------------------------
|
"""

def stairs_in_20(stairs):
   res = 0
   for i in stairs:
      res += sum(i)
   return res * 20


def stairs_in_20(stairs):
   return sum(sum(day) for day in stairs) * 20


def stairs_in_20(stairs):
   return 20 * sum(map(sum, stairs))


def stairs_in_20(stairs):
   return sum(sum(stairs, [])) * 20