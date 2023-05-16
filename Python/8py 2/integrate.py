"""
|--------------------------------------------------------------------------
| Find the Integral
|--------------------------------------------------------------------------
|
"""

def integrate(coefficient, exponent):
   return f'{round(coefficient/(exponent+1))}x^{exponent+1}'


def integrate(coefficient, exponent):
   return '{}x^{}'.format(coefficient//(exponent+1), exponent+1)


def integrate(coefficient, exponent):
   return str(f"{coefficient//(exponent+1)}x^{exponent+1}")


print(integrate(3, 2), "1x^3")
print(integrate(12, 5), "2x^6")
print(integrate(20, 1), "10x^2")
print(integrate(40, 3), "10x^4")
print(integrate(90, 2), "30x^3")