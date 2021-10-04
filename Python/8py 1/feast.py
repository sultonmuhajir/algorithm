"""
|--------------------------------------------------------------------------
| The Feast of Many Beasts
|--------------------------------------------------------------------------
|
"""

def feast(beast, dish):
   return beast[0] == dish[0] and beast[-1] == dish[-1]


feast = lambda beast, dish: all([beast[i] == dish[i] for i in [0,-1]])


def feast(beast, dish):
   return beast.startswith(dish[0]) and beast.endswith(dish[-1])


def feast(b, d):
   return b[::len(b)-1] == d[::len(d)-1]


print(feast("great blue heron", "garlic naan"), True)
print(feast("chickadee", "chocolate cake"), True)
print(feast("brown bear", "bear claw"), False)