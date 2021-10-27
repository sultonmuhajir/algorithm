"""
|--------------------------------------------------------------------------
| Return Negative
|--------------------------------------------------------------------------
|
"""

def make_negative(number):
   return number if number <= 0 else -number


make_negative = lambda x: x * -1 if x >= 0 else x


def make_negative( number ):
   return -abs(number)


def make_negative( number ):
   if number >= 0:
      return number * -1
   else:
      return number


def make_negative(n):
   return int('-' + str(n)) if n > 0 else n


print(make_negative(42),-42)
print(make_negative(-9),-9)
print(make_negative(0),0)