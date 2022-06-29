"""
|--------------------------------------------------------------------------
| Holiday VIII - Duty Free
|--------------------------------------------------------------------------
|
"""

from math import floor
def duty_free(price, discount, holiday_cost):
   return floor(holiday_cost / price / discount * 100)


def duty_free(price, discount, holiday_cost):
   return holiday_cost // (price * (discount / 100))


def duty_free(price, discount, holiday_cost):
   return holiday_cost * 100 // (price * discount)


print(duty_free(12, 50, 1000), 166)
print(duty_free(17, 10, 500), 294)