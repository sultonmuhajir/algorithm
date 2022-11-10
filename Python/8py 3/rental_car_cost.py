"""
|--------------------------------------------------------------------------
| Transportation on vacation
|--------------------------------------------------------------------------
|
"""

def rental_car_cost(d):
   return d * 40 - (50 if d >= 7 else 20 if d >= 3 else 0)


def rental_car_cost(d):
   return d * 40 - (d > 2) * 20 - (d > 6) * 30


def rental_car_cost(d):
   return 40 * d - ((50, 20)[d < 7], 0)[d < 3]


def rental_car_cost(d):
   return 40*d - 20*(2<d<7) - 50*(d>6) 


print(rental_car_cost(1), 40)
print(rental_car_cost(2), 80)
print(rental_car_cost(3), 100)
print(rental_car_cost(4), 140)
print(rental_car_cost(7), 230)
print(rental_car_cost(8), 270)