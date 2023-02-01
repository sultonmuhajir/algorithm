"""
|--------------------------------------------------------------------------
| Is the string uppercase?
|--------------------------------------------------------------------------
|
"""

def is_uppercase(inp):
   return inp.upper() == inp


def is_uppercase(stg):
   return not any(c.islower() for c in stg)


def is_uppercase(inp):
   return all([n.isupper() for n in inp if n.isalpha()])


print(is_uppercase("c"), False)
print(is_uppercase("C"), True)
print(is_uppercase("hello I AM DONALD"), False)
print(is_uppercase("HELLO I AM DONALD"), True)
print(is_uppercase("$%&"), True)