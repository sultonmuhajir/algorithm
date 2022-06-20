"""
|--------------------------------------------------------------------------
| Parse nice int from char problem
|--------------------------------------------------------------------------
|
"""

def get_age(age):
   return int(age.split(' ')[0])


import re
def get_age(age):
   return int(re.search(r"\d+", age).group())


def get_age(age):
   return int(age[0])


def get_age(age):
   return int(__import__('re').search(r'\d+', age).group(0))


def get_age(age):
   for x in age:
      if x != str(age):
         return int(x)


print(get_age("2 years old"), 2)
print(get_age("4 years old"), 4)
print(get_age("5 years old"), 5)
print(get_age("7 years old"), 7)