"""
|--------------------------------------------------------------------------
| Miles per gallon to kilometers per liter
|--------------------------------------------------------------------------
|
"""

def converter(mpg):
   return round(mpg * (1.609344/4.54609188), 2)


converter = lambda x: round(x * 0.354006043538, 2)


def converter(mpg):
   LITTER_PER_GALLON = 4.54609188
   KILOMETRES_PER_MILE = 1.609344
   return round(mpg * (KILOMETRES_PER_MILE/LITTER_PER_GALLON), 2)


print(converter(12), 4.25)
print(converter(24), 8.50)
print(converter(36), 12.74)