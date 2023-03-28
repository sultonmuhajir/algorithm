"""
|--------------------------------------------------------------------------
| Is he gonna survive?
|--------------------------------------------------------------------------
|
"""

def hero(bullets, dragons):
   return True if bullets == 0 and dragons == 0 else bullets / dragons >= 2


def hero(bullets, dragons):
   return bullets >= dragons * 2


def hero(bullets, dragons):
   return dragons <= bullets / 2


def hero(bullets, dragons):
   return bullets >= 2*dragons


print(hero(10, 5), True)
print(hero(7, 4), False)
print(hero(4, 5), False)
print(hero(100, 40), True)
print(hero(1500, 751), False)
print(hero(0, 1), False)
print(hero(0, 0), True)