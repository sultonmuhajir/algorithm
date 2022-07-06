"""
|--------------------------------------------------------------------------
| Expressions Matter
|--------------------------------------------------------------------------
|
"""

def expression_matter(a, b, c):
   return max(a+b+c, a*b*c, (a+b)*c, a*(b+c))


def expression_matter(a, b, c):
   return max(max(eval(f'{a}{op1}({b}{op2}{c})'), eval(f'({a}{op1}{b}){op2}{c}')) for op1 in '+*' for op2 in '+*')


def expression_matter(a, b, c):
   if 1 not in [a, b, c]:
      return a * b * c
   elif a == 1 and c == 1:
      return a + b + c
   elif a == 1 or (b == 1 and a < c):
      return (a + b) * c
   else:
      return a * (b + c)


print(expression_matter(2, 1, 2), 6)
print(expression_matter(2, 1, 1), 4)
print(expression_matter(2, 2, 4), 16)