"""
|--------------------------------------------------------------------------
| Take the Derivative
|--------------------------------------------------------------------------
|
"""

def derive(coefficient, exponent): 
   return f"{coefficient*exponent}x^{exponent-1}"


derive = lambda c,e: f"{c*e}x^{e-1}"


def derive(coefficient, exponent): 
   return("{}x^{}".format(coefficient*exponent, exponent-1))


print(derive(7,8), "56x^7")
print(derive(5,9), "45x^8")