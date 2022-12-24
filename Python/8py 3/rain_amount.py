"""
|--------------------------------------------------------------------------
| Fix your code before the garden dies!
|--------------------------------------------------------------------------
|
"""

def rain_amount(mm):
   if mm < 40:
      return f"You need to give your plant {40-mm}mm of water"
   else:
      return "Your plant has had more than enough water for today!"


def rain_amount(mm):
   return (f"You need to give your plant {40-mm}mm of water",
      "Your plant has had more than enough water for today!")[mm>39]


def rain_amount(mm):
   if mm >= 40:
      return "Your plant has had more than enough water for today!"
   else:
      return "You need to give your plant %smm of water" % (40 - mm)


print(rain_amount(100), "Your plant has had more than enough water for today!")
print(rain_amount(39), "You need to give your plant 1mm of water")