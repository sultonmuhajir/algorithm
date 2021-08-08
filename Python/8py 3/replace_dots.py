"""
|--------------------------------------------------------------------------
| FIXMEE: Replace all dots
|--------------------------------------------------------------------------
|
"""

def replace_dots(s):
   return s.replace('.', '-')


replace_dots = lambda str: str.replace('.', '-')



import re
def replace_dots(str):
   return re.sub(r"\.", "-", str)


def replace_dots(str):
   return'-'.join(str.split('.'))


import re
def replace_dots(s):
   return re.sub("[.]", "-", s)


print(replace_dots(""), "")
print(replace_dots("no dots"), "no dots")
print(replace_dots("one.two.three"), "one-two-three")
print(replace_dots("........"), "--------")