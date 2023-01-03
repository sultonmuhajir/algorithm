"""
|--------------------------------------------------------------------------
| Stringy Strings
|--------------------------------------------------------------------------
|
"""

def stringy(size):
   return "".join([str(i%2) for i in range(1,size+1)])


def stringy(size):
   return ('10' * size)[:size]


def stringy(size):
   return '10'*(size//2)+'1'*(size%2)


print(stringy(4), "1010")