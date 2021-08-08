"""
|--------------------------------------------------------------------------
| String repeat
|--------------------------------------------------------------------------
|
"""

def repeat_str(repeat, string):
   return string*repeat


repeat_str = lambda r, s: s * r


def repeat_str(repeat, string):
   solution = ""
   for i in range(repeat):
      solution += string
   return solution

   
def repeat_str(repeat, string):
   return "".join([string]*repeat)
   
   
from operator import mul as repeat_str


print(repeat_str(4, 'a'), 'aaaa')
print(repeat_str(3, 'hello '), 'hello hello hello ')
print(repeat_str(2, 'abc'), 'abcabc')