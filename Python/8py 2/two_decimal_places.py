"""
|--------------------------------------------------------------------------
| Formatting decimal places #0
|--------------------------------------------------------------------------
|
"""

def two_decimal_places(n):
   return round(n, 2)


def two_decimal_places(n):
   return round(n* 100) / 100


def two_decimal_places(n):
   return float("%.2f" % n)


def two_decimal_places(n):
   return ((n * 100 + 0.5) // 1 ) / 100


print(two_decimal_places(4.659725356), 4.66)
print(two_decimal_places(173735326.3783732637948948), 173735326.38)
print(two_decimal_places(4.653725356), 4.65)