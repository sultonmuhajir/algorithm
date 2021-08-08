"""
|--------------------------------------------------------------------------
| Basic Mathematical Operations
|--------------------------------------------------------------------------
|
"""

def basic_op(operator, value1, value2):
   return eval(str(value1)+operator+str(value2))


def basic_op(operator, value1, value2):
   if operator == '+':
      return value1 + value2
   elif operator == '-':
      return value1 - value2
   elif operator == '*':
      return value1 * value2
   else:
      return value1 / value2


def basic_op(operator, value1, value2):
   return eval("{}{}{}".format(value1, operator, value2))


from operator import add, div, mul, sub
def basic_op(op, a, b):
   return {'+': add, '/': div, '*': mul, '-': sub}[op](a, b)


def basic_op(operator, value1, value2):
   ops = {'+': lambda a, b: a + b, 
         '-': lambda a, b: a - b,
         '*': lambda a, b: a * b,
         '/': lambda a, b: a / b}
   return ops[operator](value1, value2)


def basic_op(o, a, b):
   return {'+':a+b,'-':a-b,'*':a*b,'/':a/b}.get(o)

   
print(basic_op('+', 4, 7), 11)
print(basic_op('-', 15, 18), -3)
print(basic_op('*', 5, 5), 25)
print(basic_op('/', 49, 7), 7)