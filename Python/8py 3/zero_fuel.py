"""
|--------------------------------------------------------------------------
| Will you make it?
|--------------------------------------------------------------------------
|
"""

def zero_fuel(distance_to_pump, mpg, fuel_left):
   return mpg * fuel_left >= distance_to_pump


zero_fuel = lambda _, __, ___: ___ * __ >= _


def zero_fuel(distance_to_pump, mpg, fuel_left):
   return distance_to_pump / mpg <= fuel_left


print(zero_fuel(50, 25, 2), True)
print(zero_fuel(100, 50, 1), False)