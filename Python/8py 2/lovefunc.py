"""
|--------------------------------------------------------------------------
| Opposites Attract
|--------------------------------------------------------------------------
|
"""

def lovefunc( flower1, flower2 ):
   return (flower1 + flower2) % 2 != 0


lovefunc = lambda a, b: (a ^ b) & 1


def lovefunc( flower1, flower2 ):
   return bool((flower1+flower2)%2)


def lovefunc(a, b):
   return a % 2 ^ b % 2


def lovefunc( flower1, flower2 ):
   return (flower1 + flower2) % 2 == 1


print(lovefunc(1,4), True)
print(lovefunc(2,2), False)
print(lovefunc(0,1), True)
print(lovefunc(0,0), False)