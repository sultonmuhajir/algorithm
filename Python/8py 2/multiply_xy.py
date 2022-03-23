"""
|--------------------------------------------------------------------------
| Function 3 - multiplying two numbers
|--------------------------------------------------------------------------
|
"""

def multiply(x,y):
   return x*y


multiply = lambda _, __: _*__


from operator import mul
def multiply(*args):
   return mul(*args)


def multiply(a,b):
   return (a).__mul__(b)


def multiply(*_):
   return _[0]*_[1]


print(multiply(2,3), 6)