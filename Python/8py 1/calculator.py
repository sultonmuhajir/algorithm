"""
|--------------------------------------------------------------------------
| simple calculator
|--------------------------------------------------------------------------
|
"""

def calculator(x, y, op):
   return eval(f'{x}{op}{y}') if type(x) == type(y) == int and str(op) in '+-*/' else 'unknown value'


def calculator(x,y,op):
   try:
      assert op in "+-*/"
      return eval('%d%s%d' % (x, op, y))
   except:
      return "unknown value"


def calculator(x, y, op):
   try:
      return {'+': x + y, '-': x - y, '*': x * y, '/': x / y}[op]
   except (TypeError, KeyError): 
      return 'unknown value'


print(calculator(6, 2, '+'),8)
print(calculator(4, 3, '-'),1)
print(calculator(5, 5, '*'),25)
print(calculator(5, 4, '/'),1.25)
print(calculator(6, 2, '&'),"unknown value")