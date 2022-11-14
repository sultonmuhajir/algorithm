"""
|--------------------------------------------------------------------------
| Opposite number
|--------------------------------------------------------------------------
|
"""

def opposite(number):
   return number * -1;


opposite = lambda x: -x


def opposite(number):
   return float(('-' + str(number)).replace('--', ''))


opposite=(0.).__sub__


def opposite(number):
   return (~int(number) + int(number)) * number


print(opposite(1),-1)
print(opposite(25.6), -25.6)
print(opposite(0), 0)
print(opposite(1425.2222), -1425.2222)
print(opposite(-3.1458), 3.1458)
print(opposite(-95858588225),95858588225)