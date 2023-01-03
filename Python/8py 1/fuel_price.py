"""
|--------------------------------------------------------------------------
| Fuel Calculator
|--------------------------------------------------------------------------
|
"""

from math import floor
def fuel_price(l, p):
   return round(l * p - ((floor(l / 2) * 5 if l <= 10 else 25) * l * 0.01), 2)


def fuel_price(l, p):
   return round(l*(p-min(0.05*(l//2), 0.25)), 2)


def fuel_price(litres, price_per_liter):
   return round(litres * (price_per_liter - min((litres // 2) * 0.05, 0.25)), 2)


print(fuel_price(10, 21.5), 212.5)
print(fuel_price(40, 10), 390)
print(fuel_price(15, 5.83), 83.7)