"""
|--------------------------------------------------------------------------
| Super Duper Easy
|--------------------------------------------------------------------------
|
"""

def problem(a):
   return 'Error' if type(a) == str else a * 50 + 6


def problem(a):
   try:
      return a * 50 + 6
   except TypeError:
      return "Error"


def problem(a):
   return "Error" if isinstance(a,str) else a*50+6


def problem(a):
   return a*50+6 if str(a).replace(".", "").isdigit() else "Error"


print(problem("hello"), "Error")
print(problem(1), 56)